
import {css, keyframes} from '@emotion/react'


const footer=css`
    width:100%;
    text-align:center;
    margin-top:0em;
    color: #6D9EEB;
    font-family:var(--font-hard);
    font-size:.7em;
    font-variation-settings:"wght" 500;
    line-height:.9em;
    letter-spacing:.01em;
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
`
export {footer}