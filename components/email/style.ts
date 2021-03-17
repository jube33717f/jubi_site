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
    ${sm4}{
        display:none;
    }
    


`


export {emailStyles}