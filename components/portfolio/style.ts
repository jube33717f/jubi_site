
import {css, keyframes} from '@emotion/react'

import {sm1,sm2,sm3,sm4,md,lg1,lgm,lg2} from '../../shared/globals'
const footer=css`
    width:100%;
    text-align:center;
    /* position:absolute;
    bottom:1em; */
    padding-top:.6em;
    color: #6D9EEB;
    font-family:var(--font-hard);
    
    font-variation-settings:"wght" 500;
    
    
    background:#F2B27C;
    
    p:nth-of-type(1){
            display:none;
    }
    letter-spacing:.01em;
    line-height:.7em;
    font-size:.3em;
    ${lg1}{
        p:nth-of-type(2){
            :after{
                height:1px;
                background-color: #6D9EEB;
                width:22em;
                margin:auto;
                content: "";
                display: block;
            }
        }
        
    }
    ${lgm}{
        line-height:.9em;
        font-size:.4em;
        p:nth-of-type(2){
            :after{
                height:1px;
                background-color: #6D9EEB;
                width:22em;
                margin:auto;
                content: "";
                display: block;
            }
        }
    }
    ${lg2}{
        padding-top:.4em;
        font-size:.7em;
        line-height:.9em;
        p:nth-of-type(1){
            display:block;
        }
        p:nth-of-type(2){
            :after{
                height:1px;
                background-color: #6D9EEB;
                width:25em;
                margin:auto;
                content: "";
                display: block;
            }
        }
    }
`
const title = css`
    color:#6D9EEB;
    ${sm4}{
        display:none;
    }
`
export {footer,title}