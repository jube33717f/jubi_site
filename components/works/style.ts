import {css, keyframes} from '@emotion/react'
const scroll=css`
    overflow-x: auto;
    overflow: -moz-scrollbars-none;
    ::-webkit-scrollbar { width: 0 !important }
    -ms-overflow-style: none; 
`
const showcase=css`
    position:relative;
    height:700px;
    /* width:100%; */
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    width:3600px;

    /* border-image:url('/bg3.jpg') 10; */
    /* border-top:solid 40px #fff; */
    /* border-bottom:transparent  solid 40px; */
`
const cases = css`
    height:700px;
    width:600px;
    position:relative;
    background-color:rgba(0,0,0,0.1);
    
`
const displayImg = css`
    position:absolute;
    height:350px;
    width:600px;
    border:rgba(0,0,0,0.05) solid 10px;
    /* :hover{
        transform:scale(2);
        top:175px;
        z-index:2000;
        border:none;
        left:0;
    } */
`

const displayIntro=css`
    position:absolute;
    height:350px;
    width:600px;
    top:350px;
    /* background-color:rgba(0,0,0,0.4) ; */
`
const displayImg2 = css`
    top:350px;
    position:absolute;
    height:350px;
    width:600px;
    border:rgba(0,0,0,0.05) solid 10px;
    /* :hover{
        transform:scale(2);
        top:175px;
        z-index:2000;
    } */
`

const displayIntro2=css`
    position:absolute;
    height:350px;
    width:600px;
    
    /* background-color:rgba(0,0,0,0.4) ; */
`
const intro1 = css`
    position: absolute;
    left: 40px;
    top: 10px;
    bottom: auto;
    color: rgb(233, 16, 58);
    font-size:1.5em;
    letter-spacing: 1px;

`
const intro2 = css`
    position: absolute;
    width: 206px;
    height: 217px;
    right: 90px;
    color:#fff;
    transform: rotate(270deg) translate(-50%, 0%);
    
    p{
        font-size: 38px;
        position: relative;
        top: 50%;
        display: inline-block;
        span{
            display: inline-block;
            color: rgb(233, 16, 58);
        }
    }
`
export {scroll,intro1,intro2,showcase,cases,displayImg,displayIntro,displayImg2,displayIntro2}