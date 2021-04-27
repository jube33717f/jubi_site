import { css } from "@emotion/react";
import {sm4} from '../../shared/globals'

const naviStyle = css`
    /* position:fixed; */
    position:absolute;
    z-index:1000;
    width:3em;
    height:3em;
    border-radius:50%;
    text-align:center;
    left: 3.3333333333vw;
    top: 3.3333333333vh;
    border: 1px solid #ccc;
    background-color: #f9fafb;
    font-size:1em;
    display:none;
    height:100vh;
    ${sm4}{
        display:block;
        position:absolute;
        width:3em;
        height:3em;
    }
    
`
const inner = css`
    position: absolute;
    left: calc(50% - 2px);
    top: calc(50% - 11px);
    width: 4px;
    height: 22px;
    pointer-events: none;
    div{
        position: absolute;
        left: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #1a1a1a;
        
    }
    div:nth-of-type(1){
        top:0
    }
    div:nth-of-type(2){
        top:9px
    }
    div:nth-of-type(3){
        top:18px
    }
`
const nav = css`
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    height: 100%;
    width:60%;

    background-color: #fff;
    border-right: 1px solid #ccc;

    transition-property: transform;
    transition-duration: .6s;
    transition-timing-function: cubic-bezier(.4,.1,.2,1);
    transform: translateZ(0);
    transition-delay: 0;
    
`

const nav_no_show=css`
    opacity:0;
    transform: translate3d(-100%,0,0);
    transition-property: transform;
    transition-duration: .6s;
    transition-timing-function: cubic-bezier(.4,.1,.2,1);
    transition-delay: .2s;
`
const close_row=css`
    z-index:2;
    position: absolute;
    left: calc(100% - 10vw);
    top: calc(3.33333vh - 3px);
`
const cancel = css`
    position: relative;
    width: 30px;
    height: 30px;
    pointer-events: none;
    :before{
        width: 100%;
        height: 2px;
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) rotate(-45deg);
        background-color: #1a1a1a;
    }
    :after{
        width: 100%;
        height: 2px;
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) rotate(45deg);
        background-color: #1a1a1a;
    }
`
const navi_page = css`
    
    z-index:0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 50%;
    padding: 0 6.6666666667vw;  
    transition-property: transform;
    transition-duration: .6s;
    transition-timing-function: cubic-bezier(.4,.1,.2,1);
    transition-delay: .2s;
    font-feature-settings: "palt","calt","liga";
    font-variation-settings: "wght" 250;
    color: #1a1a1a;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size:24px;
    li{
        z-index:2;
        margin-top: 2.5vh;        
        font-variation-settings: "wght" 250;//700
        letter-spacing:.08em;
        position: relative;  
        font-size: .9em;
        transition-property: color,transform,font-variation-settings;
        transition-duration: .4s;
        transition-timing-function: cubic-bezier(.4,.1,.2,1);
    }
`



const navi_contact=css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 50%;
    padding: 0 6.6666666667vw calc(5vh - 2px);
    transition-property: opacity,transform;
    transition-duration: .6s;
    transition-timing-function: cubic-bezier(.4,.1,.2,1);
    transition-delay: .2s;
    margin-top: 4vh;
    margin-left: -.04em;
    font-variation-settings: "wght" 400;
    font-size: 18px;
    li{
        margin-top: 0vh;
        margin-bottom:4vh;
    }

    span{
        line-height: 1.2;
        display: grid;
        grid-auto-flow: column;
        justify-content: flex-start;
        align-items: center;
        grid-gap: .5em;
        gap: .5em;
        margin-top: 1em;
        font-variation-settings: "wght" 300;
        font-size: 14px;
    }

`


export {nav,nav_no_show,naviStyle,inner,close_row,cancel,navi_page,navi_contact}