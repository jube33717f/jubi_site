/**
 * @file Home Page
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { css } from '@emotion/react'
import {sm4} from '../shared/globals'
import {bgWrap,next} from 'styles/me'
import Image from 'next/image'
import Page from '@layouts/page'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

const homeStyles = css`
    width:100vw;
    height:100vh;
    position:absolute;
    overflow:hidden;
    top:0;
    font-family: var(--font-art),sans-serif;
    font-feature-settings: "palt","calt","liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size:2rem;
    font-weight: light;
`
 /* <------------------------------------ **** HOME PAGE START **** ------------------------------------ */
const Home=()=> {
    return<>   
            <Page>

                <div css={homeStyles}>
                    <div css={bgWrap}>
                        
                        <figure>
                            {/* <------------------------------------ **** SECTION 1 START **** ------------------------------------ */}
                            {/** background */}
                            <Image 
                                src='/bg.jpg'
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                />
                            <figcaption>
                                {/* <------------------------------------ **** SECTION 1 END **** ------------------------------------ */}
                                {/* <------------------------------------ **** SECTION 2 START **** ------------------------------------ */}
                                {/** title */}
                                <div  css={next} >←</div>
                                {/* <------------------------------------ **** SECTION 2 END **** ------------------------------------ */}
                                {/* <------------------------------------ **** SECTION 3 START **** ------------------------------------ */}
                                {/** title */}
                                <div>
                                    <h3>JUBI <span>CHEN</span></h3>
                                    <p>            INTERESTING FREE ENTHUSIASTIC NAIVE</p>
                                </div>
                                {/* <------------------------------------ **** SECTION 3 END **** ------------------------------------ */}
                            </figcaption>
                        </figure>
                    </div>                    
                </div>  
            </Page>
            
  
    </>
}
/* <------------------------------------ **** HOME PAGE END **** ------------------------------------ */
export default Home;
