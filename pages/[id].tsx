import {
    GetStaticPaths,
    GetStaticPropsContext,
    InferGetStaticPropsType,
  } from 'next'
  import { getPost,getPosts } from '@shared/get-post'
  import PostLayout from '@layouts/post'
 
  import hydrate from 'next-mdx-remote/hydrate'
  import renderToString from 'next-mdx-remote/render-to-string'

  import firebase from 'services/firebase'
  import  'firebase/storage'
  import {useState} from 'react'
 
  export default function Post({
    post,
  }: InferGetStaticPropsType<typeof getStaticProps>) {

    // Marked.setOptions({ highlight: (code, lang) => highlight(lang.en, code).value });
    // const content = Marked.parse(post.article)
    
    // const content = hydrate(post.article)
    // const dom = new BeautifulDom(content)
    // const [posting,setPosting] = useState([])
    return <PostLayout title={post.title}>
        <h2>{post.title}</h2>
        {post.article.map(i=>hydrate(i))}

        
        </PostLayout>
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts()
  
    const paths = posts.map(({ id}) => ({
      params: {
        id,
      },
    }))
  
    return {
      paths,
      fallback: false,
    }
  }
  
  export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
    const { id } = params as { id: string }

    const result = await getPost(id)
    let article = result.article
    
    let sentence:string[] = article.split('<br/>')
    
    const asyncRes = await Promise.all(sentence.map(async(i)=>{
        i.trim()
        let re = /!\[.*\]/
        const match = i.match(re)
        
        if(match && match.length>0){
            const img_title = match[0].replace('![','').replace(']','')
            let title = result.title
            title = title.replace(/ /g, '_')
            
            const storage = firebase.storage()
            
            const storageRef = storage.ref();
            const img = storageRef.child(`article/${title}/${img_title}`)
            // console.log(img)
            // try{
            const url = await img.getDownloadURL()
            i+='('+url+')'
        }
        
        

        const mdxSource = await renderToString(i)
        
        return mdxSource
    }))
    
    return {
      props: {
        post:{
            title:result.title,
            article:asyncRes
        }

      },
    }
  }