/**
 * @file Article Page
 * @date 2021-04-01
 * @author Jubi
 * @lastModify Jubi 2021-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
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
import { avatar, info, infoBox } from '../layouts/post/style'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
 /* <------------------------------------ **** ARTICLE PAGE START **** ------------------------------------ */
export default function Post({
    post,
  }: InferGetStaticPropsType<typeof getStaticProps>) {

 
    return <PostLayout title={post.title}>
        <h2>{post.title}</h2>
        <div css={infoBox}>
            <div css={avatar}><img src='/tinkerbell2.gif'/></div>
            <div css={info}>
                <span>Jubi</span>
                <time>{post.date}</time>
            </div>
        </div>
        {post.article.map(i=>hydrate(i))}

        
        </PostLayout>
  }
/* <------------------------------------ **** ARTICLE PAGE END **** ------------------------------------ */


  export const getStaticPaths: GetStaticPaths = async () => {
    const results = await getPosts()
  
    const paths = results.map(({ id}) => ({
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

        i = i.replace(/^\s+|\s+$/,'');

        let re = /!\[.*\]/
        const match = i.match(re)
        
        if(match && match.length>0){
            const img_title = match[0].replace('![','').replace(']','')
            let title = result.title
            title = title.replace(/ /g, '_')
            
            const storage = firebase.storage()
            
            const storageRef = storage.ref();
            const img = storageRef.child(`article/${title}/${img_title}`)
            
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
            article:asyncRes,
            date:result.date
        }

      },
    }
  }