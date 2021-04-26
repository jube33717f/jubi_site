/**
 * @file Global style
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */

import {css} from '@emotion/react'

export const breakpoints = {
    _sm1:'320px',
    _sm2:'360px',
    _sm3:'400px',
    _sm4:'640px',

    _md:'960px',

    _lg1:'1024px',
    _lgm:'1200px',
    _lg2:'1367px',
    _lg3:'1500px'
}
const media = (pixels:string )=> `@media (min-width: ${pixels})`
const max_media = (pixels:string )=> `@media (max-width: ${pixels})`
const { _sm1, _sm2, _sm3, _sm4, _md , _lg1,_lgm, _lg2, _lg3} = breakpoints

export const sm1 = max_media(_sm1)
export const sm2 = max_media(_sm2)
export const sm3 = max_media(_sm3)
export const sm4 = max_media(_sm4)

export const mdm = max_media(_md)
export const md = media(_md)

export const lg1 = media(_lg1)
export const lgm = media(_lgm)
export const lg2 = media(_lg2)
export const lg3 = media(_lg3)
export const globalStyles = css`
    
    :root{
        --page-width:100%;
        --page-text: rgb(48,48,48);
        --primary-color: rgb(255，214,136);
        --easing: all 0.5s cubic-bezier(.55,0,.1,1);
        --base-size: 10em;
        --base-reverse-size: -10em;
        --font-art:Caveat;
        --font-hard:Manrope;
        
        --breakpoints-small-first: 640px;
        --breakpoints-small-second: 480px;
        --breakpoints-small-third: 360px;
        --breakpoints-small-fourth: 320px;
        --breakpoints-medium: 1007px;
        --breakpoints-large-second: 1367px;
        --breakpoints-large-third: 1024px;
    }
   
    html,
    body {
        overflow-x: hidden;
        cursor: none;
        color:var(--page-text);
        padding: 0;
        margin: 0;
        font-family:  Caveat, Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color:#F3EBE9;
        font-feature-settings: "palt","calt","liga";

    }
    ol,ul{
        list-style: none;
        font-family:var(--font-hard);
        display: flex;
    }
    a {
        color: inherit;
        text-decoration: none;


    }
    h1{
        font-size:2.5rem;
        line-height:1em;
        font-family:var(--font-hard);
        font-variation-settings: "wght" 500;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0.67em;
        margin-inline-end: 0px;
        white-space: normal;
        letter-spacing: .1em;
    }
    h4{
        /* font-family:var(--font-hard); */
        font-size:2.3rem;
        padding-left:1.5%;
        line-height:1rem;
        padding-left:10%;
        color:'#410807';
        font-variation-settings:"wght" 600;
        margin-top:1em;
        span{
            font-size:.4em;
        }
    }

    * {
        box-sizing: border-box;
    }
    #__next,main {
        /* min-height: 100vh; */
    }
     
    
`
