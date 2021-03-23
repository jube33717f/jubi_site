

import CardContainer from '@layouts/cardContainer'
import {postIndexList, postIndexItem,postIndexTitleBar} from './style'
import WritingList,{getStaticProps} from '@components/writingList'
import {useEffect,useState} from 'react'
import {ArticleType} from '@shared/get-post'

import { getPosts } from '@shared/get-post'



const Article = ({active,clickHandler}:{active:string[],clickHandler:({index}:{index:number})=>void}) =>{
    const [post,setPost] = useState<Article[]>([])
    
    
    useEffect(()=>{
        initialPosts()
        
    },[])
    const initialPosts = async ()=>{
        const posts =  await getPosts()
        setPost(posts)
    }
    return (
        <CardContainer color='#D3CCCB' about={active[3]}>
            {active[3]=='active'&&<h1 style={{color:'#FAED45'}}>WRITINGS </h1>||<h4 
            onClick={(e)=>{
                clickHandler({index:3})
            }}
            style={{color:'black'}}>W</h4> }
            {active[3]=='active'&&<section>
                <WritingList posts={post}/>
                          
            </section>}
           
        </CardContainer>
    )
}
export default Article;
