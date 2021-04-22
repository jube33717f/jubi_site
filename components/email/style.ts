import {css} from '@emotion/react'
import {sm1,sm2,sm3,sm4} from '../../shared/globals'
const emailStyles = css `
    border-radius:50%;
    height:9.5rem;
    width:9.5rem;
    background-color:#1D9076;
    position:absolute;
    display: inline-flex;
    left:calc(100% - 4.75rem);
    margin-top:calc(100vh - 15rem);
    text-align:center;
    padding-left:2.2rem;
    line-height:9.5rem;
    z-index:1000;
    font-size:2rem;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    box-sizing: border-box;
    ${sm4}{
        display:none;
    }
    


`


export {emailStyles}