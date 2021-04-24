import {css, keyframes} from '@emotion/react'
import {sm4} from '../../shared/globals'
const siteNavi = css`
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    height: 100%;
    /* display:block; */
    /* display:none; */
    ${sm4}{
        position: absolute;
        display:none;
    }
    

`
const siteNavi_bg =  (open:boolean)=>{
    
    if(open){
        return css`
            transform:translate3d(100%,0,0);
            transform:translateZ(0);
            position: absolute;
            z-index: -1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-right: 1px solid #ccc;
            /* transform: translate3d(-100%,0,0); */
            transition-property: transform;
            transition-duration: .6s;
            transition-timing-function: cubic-bezier(.4,.1,.2,1);
            transition-delay: .2s;

        `
    }

    return css`
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-right: 1px solid #ccc;
        transform: translate3d(calc(-100% + 55px),0,0);
        transition-property: transform;
        transition-duration: .6s;
        transition-timing-function: cubic-bezier(.4,.1,.2,1);
        transition-delay: .2s;
        
    

    `
    
    
}

const siteNavi_pages = (open:boolean)=>{
    if(!open){
        return css`transform: translate3d(-20em,0,0);
        `
    }
        return css`
        padding:0 3.3333333333vw;
        transition-property: opacity,transform;
        transition-duration: .6s;
        transition-timing-function: cubic-bezier(.4,.1,.2,1);
        transition-delay: .2s;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        height: 50%;
        transition-property: opacity,transform;
        transition-duration: .6s;
        transition-timing-function: cubic-bezier(.4,.1,.2,1);
        transition-delay: .2s;
        /* transform: translate3d(-20em,0,0); */
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        li{
            
            color: #000;
            font-variation-settings: "wght" 400;
            font-size: 28px;
            transition-property: color,transform,font-variation-settings;
            transition-duration: .4s;
            transition-timing-function: cubic-bezier(.4,.1,.2,1);
            margin-bottom:1em;
            :hover{
                color: #ccc;
            }
        }
    `
    
}
    
const siteNavi_links = (open:boolean)=>{
    if(!open){
        return css`transform: translate3d(-20em,0,0);`
    }
    return css`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        height: 40%;
        padding:0 3.3333333333vw calc(5vh - 2px);
        margin-left: -.04em;
        
        font-variation-settings: "wght" 400;
        transition-property: transform;
        transition-duration: .6s;
        transition-timing-function: cubic-bezier(.4,.1,.2,1);
        transition-delay: .2s;
        /* transform: translate3d(-20em,0,0); */
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        li{
            font-size:15px;
            line-height:30px;
            cursor: pointer;
        }
    `
    

} 


const naviBtn = (open:boolean)=>{
    if(open){
        return css`display:none`

    }
        return css`
            left: 10px;
            top: calc(50% - 20px);
            border: none;
            background-color: initial;
            position: fixed;
            z-index: 100;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            transition-property: opacity;
            transition-duration: .4s;
            transition-timing-function: cubic-bezier(.4,.1,.2,1);
            transition-delay: .4s;
            ${sm4}{
                position: absolute;
                display:none;
            }

        `
    
}
const  naviBtn_area = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    ${sm4}{
        position: absolute;
        display:none;
    }
`
const naviBtn_inner = css`
    transform: translate3d(1.4822e-323px, 1.4822e-323px, 0px);
    position: absolute;
    left: calc(50% - 2px);
    top: calc(50% - 11px);
    width: 4px;
    height: 22px;
  
`
const naviBtn_dot = css`
    position: absolute;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #1a1a1a;
    &:nth-child(1){
        top: 0;
    }
    &:nth-child(2){
        top: 9px;
    }
    &:nth-child(3){
        top: 18px;
    }
`
const closeBtn = (open:boolean)=>{
    if(open){
        return css`
            opacity:1;
            z-index: 101;
            /* transform: translate3d(55px,0,0); */
            left: calc(100% - 3.33333vw);
            top: calc(3.33333vh - 3px);
            position: absolute;
            transition-property: opacity;
            transition-duration: .4s;
            transition-timing-function: cubic-bezier(.4,.1,.2,1);
            transition-delay: .6s;
        `
    }
    return css`opacity:0;
    transform: translate3d(-20em,0,0);`
}
const closeBtn_area=css`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    ${sm4}{
        position: absolute;
        display:none;
    }
`
const closeBtn_inner=css`
    transform: translate3d(1.4822e-323px, -1.4822e-323px, 0px);
    position: relative;
    width: 30px;
    height: 30px;
    
    &:before{
        width: 2px;
        height: 100%;
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) rotate(45deg);
        background-color: #1a1a1a;
    }
    &:after{
        width: 2px;
        height: 100%;
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) rotate(-45deg);
        background-color: #1a1a1a;
    }
`

export { siteNavi,siteNavi_bg,siteNavi_pages,siteNavi_links,naviBtn,naviBtn_area,naviBtn_inner,naviBtn_dot,closeBtn,closeBtn_area,closeBtn_inner} 