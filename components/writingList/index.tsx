

import { getPosts,getPostsByPage, getPostsTotalNumber , ArticleType} from '@shared/get-post'
import {InferGetStaticPropsType} from 'next'
import {postIndexList, postIndexItem,postIndexTitleBar,pagination} from './style'
import Link from 'next/link'
import {useState,useEffect} from 'react'
import { Pagination } from 'antd';

const WritingList= (
//     { posts,amount
// }:InferGetStaticPropsType<typeof getStaticProps>
) => {
    const [page,setPage] = useState(1)
    const [total,setTotal] = useState(1)
    const [lists,setLists] = useState<ArticleType[]>()

    const initialSetting = async()=>{
        const amount = await getPostsTotalNumber ()
        setTotal(amount)
        const posts = await getPostsByPage(1)
        setLists(posts)
        
    }


    useEffect(()=>{
        initialSetting()

    },[])
  
    
    return <>
    <ul css={postIndexList} >{lists.map(item=>(
        <li key={item.id} css={postIndexItem}>
            <Link href={`/${item.id}`} >
                <a onClick={()=>{console.log(`/${item.id}`)}}
                >
                    <time>{item.date}</time>
                    <h2> {item.title} 
                        <div css={postIndexTitleBar} ></div>
                    </h2>
                </a>
            </Link>      
        </li> 
    ))}</ul>
    <div css={pagination}>
        
        <Pagination simple 
            defaultCurrent={1} 
            defaultPageSize={5} 
            total={total} 
            onChange={async (page: number)=>{
                const posts = await getPostsByPage(page)
                setLists(posts)
            }}
        />
    </div>
    
    </>
}

  


  




export default WritingList;