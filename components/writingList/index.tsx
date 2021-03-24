

import { getPosts } from '@shared/get-post'
import {InferGetStaticPropsType} from 'next'
import {postIndexList, postIndexItem,postIndexTitleBar} from './style'
import Link from 'next/link'

const WritingList= ({
    posts,
}:InferGetStaticPropsType<typeof getStaticProps>) => (<ul css={postIndexList} >{posts.map(item=>(
        <li key={item.id} css={postIndexItem}>
            <Link href={`/${item.id}`} >
                <a onClick={()=>{console.log(`/${item.id}`)}}
                >
                    <time>2020</time>
                    <h2> {item.title} <div css={postIndexTitleBar} ></div></h2>
                </a>
            </Link>      
        </li> 
    ))}</ul>)

  


export const getStaticProps = async()=>{
    const posts =await getPosts()

    
    // firebaseLoad();
    return {
        props:{
            posts,
        }
    }
}



export default WritingList;