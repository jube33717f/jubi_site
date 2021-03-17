
import Head from 'next/head'
import { css } from '@emotion/react'
import Cursor from '@components/cursor'
import SEO from '@components/seo'
import Article from '@components/article'
import Me from '@components/me'
import Info from '@components/info'
import Portfolio from '@components/portfolio'
import {useState} from 'react'
import PhoneNavigation from '@components/navigation'
import {sm4} from '../shared/globals'
const homeStyles = css`
    width:100%;
    height:100vh;
    display: flex;
    /* flex-flow: row wrap; */
    justify-content: flex-start;
    font-family: var(--font-art),sans-serif;
    font-feature-settings: "palt","calt","liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size:2rem;
    font-weight: light;
    /* font-weight:100; */
`
const navStatus = css`
    display:none;
    position:absolute;
    ${sm4}{
        display:block;
        position:absolute;
        
    }
`
const Home=()=> {
     
    const [shown,setShown] = useState(['active','inactive','inactive','inactive'])
    const clickTitleHandler = ({index}:{index:number})=>{
        let arr = []
        if(shown[index]=='inactive'){
            arr=['inactive','inactive','inactive','inactive']
            arr[index]= 'active'
            setShown(arr)
            
        }
        
    }
    // const mouseOverTitleHandler (e: Event,{index}:{index:number})=>{

    // }
    // const mouseUp
    return<>
    <Cursor/>
        <Head>
            <title>
                <SEO 
                    title="Jubi Chen" 
                />
            </title>
            
            
        </Head>
        
        <main>
            <div css={homeStyles}>
                <div css={navStatus} >
                    <PhoneNavigation clickHandler={clickTitleHandler}/>
                </div>
                <Me active={shown} clickHandler={clickTitleHandler}/>
                <Info active={shown} clickHandler={clickTitleHandler}/>
                <Portfolio active={shown} clickHandler={clickTitleHandler}/>
                <Article active={shown} clickHandler={clickTitleHandler}/>
                
            </div>  
        </main>
    </>
}

export default Home;
