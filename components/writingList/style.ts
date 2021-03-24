import {css} from '@emotion/react'

const postIndexList = css `
    font-family:var(--font-hard);
    
    width: 50vw;
    margin-top: 80px;
    list-style: none;
    display: block;
    list-style-type: decimal; 
     margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    white-space: normal;
    

`
const postIndexItem = css `
    list-style: none;
    position: relative;
    margin: 0;
    padding: 0;
    display: list-item;
    text-align: -webkit-match-parent;
    /* line-height: 1.6; */
    height:1.6emm;
   
  
    a{
        display: inline-flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    time{
        font-variation-settings: "wght" 300;
        white-space: nowrap;       
        margin-top: 6px;
        font-size: 16px;
    }
    h2{
        

        font-size: 16px;
        position: relative;
        padding-bottom: 15px;
        margin-left:3em;
        margin-top:0.4em;
        line-height: 1.6;
        /* overflow: hidden; */
        font-style: normal;
        font-weight: 500;
        letter-spacing: .1em;
        /* transform: translate3d(100%, 0px, 0px); */
    }
    :before{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        content: "";
        display: block;
        background-color: #ccc;
        /* transform: translate3d(100%, 0px, 0px); */
    }
`
const postIndexTitleBar=css`
    /* transform: translate3d(100%, 0px, 0px); */

    background-color: rgba(26,26,26,0.3);
    transform-origin: left top;
    position: absolute;
    left: 0.5em;
    bottom: 0;
    width: 100%;
    height: 1px;
    /* font-style: normal;
    font-weight: 500;
    letter-spacing: .02em; */
`



export {postIndexList, postIndexItem,postIndexTitleBar}