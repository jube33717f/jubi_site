import {css} from '@emotion/react'
import {sm1,sm2,sm3,sm4} from '../../shared/globals'
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
    ${sm4}{
        width: 90vw;
    }
    

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
        ${sm3}{
            font-size: 14px;
        }
        
    }
    h2{
        
        position: relative;
        line-height: 1.6;
        overflow: hidden;

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
        ${sm3}{
            font-size: 14px;
        }
        ${sm2}{
            margin-left:1em;
        }
        /* transform: translate3d(100%, 0px, 0px); */
        &::before{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            content: "";
            display: block;
            background-color: #BCB8BD;
            z-index:2;
        /* transform: translate3d(100%, 0px, 0px); */
        }
        &:hover{
            color: #1890ff;
            div{
                transform: translate3d(0%, 0px, 0px);
                transition: transform 2s ease-in-out;
            }
        }
    }
    
`
const postIndexTitleBar=css`
    /* transform: translate3d(100%, 0px, 0px); */   
    transform: translate3d(100%, 0px, 0px);
    background-color: #1a1a1a;
    transform-origin: left top;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;  
`

const pagination = css`
    position:absolute;
    bottom:1em;
`

export {postIndexList, postIndexItem,postIndexTitleBar,pagination}