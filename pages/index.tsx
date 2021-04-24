

import { css } from '@emotion/react'

import SEO from '@components/seo'

import {useState} from 'react'

import {sm4} from '../shared/globals'
import {bgWrap,next} from 'styles/me'
import Image from 'next/image'

import Page from '@layouts/page'
const homeStyles = css`
    width:100vw;
    height:100vh;
    position:absolute;
    overflow:hidden;
    top:0;
    /* display: flex;
     flex-flow: row wrap; 
    justify-content: flex-start; */
    font-family: var(--font-art),sans-serif;
    font-feature-settings: "palt","calt","liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size:2rem;
    font-weight: light;
    /* position:fixed; */
    /* ${sm4}{
        position:relative;
    } */
    /* font-weight:100; */
`

const Home=()=> {
     
  
   
    // const mouseOverTitleHandler (e: Event,{index}:{index:number})=>{

    // }
    // const mouseUp
    return<>
    
        
    
            <Page>
                {/* <div css={navStatus}>
                        
                    </div> */}
                <div css={homeStyles}>
                    
                        <div css={bgWrap}>
                        <figure>
                            <Image 
                                src='/bg.jpg'
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                />
                            <figcaption>
                            <div  css={next} >←</div>
                                <div>
                                    <h3>JUBI <span>CHEN</span></h3>
                                    <p>            INTERESTING FREE ENTHUSIASTIC NAIVE</p>
                                </div>
                            </figcaption>
                        </figure>
                        


                    </div>
                    
                </div>  
            </Page>
            
  
    </>
}

export default Home;
