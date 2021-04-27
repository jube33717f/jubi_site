import {css} from '@emotion/react'
import {sm4} from '../../shared/globals'
const title_h1 = css `
    color:#6D9EEB;
    height:1em;
    font-size:1.4em;
    text-align:center;
    margin-left:.3rem;
    position:absolute;
`
const scroll = css`
    overflow-y: auto;
    height:100%auto;
    overflow: -moz-scrollbars-none;
    display:none;
    ${sm4}{
        display:block;
        overflow-y: auto;
    }
`
const box = css`
    bottom:0;
    touch-action: pan-y;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transform: matrix(1, 0, 0, 1, 0, 0);
    position:absolute;
    top:3em;
    ${sm4}{
        display:block;
    }
`
const cases = css`
    width:100vw;
    height:50vw;
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 0px;
    overflow: hidden;
    margin:0;
    padding:0;

`
const img_display = css`
    width: 50vw;
    height: 50vw;
    transform: matrix(1, 0, 0, 1, 0, 0);
    position: absolute;
    border:rgba(0,0,0,0.05) solid 10px;  
`
const description = css`
    width: 50vw;
    height: 50vw;
    position: absolute;
    transform: matrix(1, 0, 0, 1, 0, 0);
    z-index:2;
    bottom: 0px;
    transform: translateZ(0);  
`

const intro1 = css`
    left: 2vw;
    top: auto;
    height:10vw;
    bottom: 40vw;
    color: #e9103a;
    
    p{
        letter-spacing: 1px;
        margin-top: 0;
        margin-left:4px;
        margin-bottom: 1em;
        font-size: 1.3rem;
        :after{
            content:'';
            font-size: 20px;
            background: rgb(233, 16, 58);
            display: block;
            height: 2px;
            width: 10%;
        }
       
    }
`
const intro2 = css`
    display:absolute;
    top: auto;
    bottom:0;
    padding-right: 20px;
    margin-left:10px;
    p{
        text-align: left;
        margin-top: 0;
        margin-bottom: 1em;
        display: block;
        font-size: 2.2rem;
        font-weight:700;
        color: #fff;
        span{
            display:block;
            color:rgb(233, 16, 58);
            font-weight:300;
            font-size: 1.7rem;
        }
    }
`

export {title_h1,scroll,box,cases,img_display,description,intro1,intro2}