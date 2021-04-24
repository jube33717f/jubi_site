

import CardContainer from '@layouts/cardContainer'
import {postIndexList, postIndexItem,postIndexTitleBar} from 'styles/article'
import WritingList from '@components/writingList'
import {useEffect,useState} from 'react'
import {ArticleType} from '@shared/get-post'

import { getPosts } from '@shared/get-post'
import Page from '@layouts/page'
import PhoneNavigation from '@components/navigation'
import WebNavigation from '@components/navi_web'


const Article = () =>{

    
   
    return (
        <Page>
     
        <div style={{position:'absolute',top:'0',marginLeft:'55px',height:'100vh',width:'100vw'}}>
            <h1 >WRITINGS </h1>
            <section>
                <WritingList />
                          
            </section>
        </div>
        </Page>
    )
}
export default Article;
