import {InferGetStaticPropsType} from 'next'
import Page from '@layouts/page'
import { getPosts } from '@shared/get-post'



function Post({
    posts,
}:InferGetStaticPropsType<typeof getStaticProps>){

    return (
    <Page>
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </Page>)
}
/*
id: string,
    title: string,
    tag: string,
    article: string,
    date:Date,
    */
export const getStaticProps = async()=>{
    const posts =await getPosts()

    
    // firebaseLoad();
    return {
        props:{
            posts,
        }
    }
}


export default Post;