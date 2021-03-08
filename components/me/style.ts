import {css, keyframes} from '@emotion/react'
const header = css`
    display: block;
    white-space: nowrap;
    padding-top:5%;
    padding-left:5%;
    width:100%;
    height:23rem;
   
`

const bgWrap=css`
    /* position: fixed; */
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 0;
` 
const nameAnimation = keyframes`
    from{
        opacity:0
    }
    100%{
        opacity:1
    }
    
`
const nameWrap=css`
    font-family:var(--font-hard);
    z-index: 2;
    position:absolute;
    /* position: fixed; */
    left: 6.6666666667vw;
    top: 45%;
    transform: translateY(-50%);
    background-color: #fff;
    white-space: nowrap;
    /* width:20em;
    height:3em; */
    padding-left:2em;
    line-height:3em;
    padding-right:1.5em;
    font-variation-settings:"wght" 60;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    letter-spacing:0.45em;
    animation:${nameAnimation} 1s;
    
    
    &:hover{
        transform: scale(2) translateX(30%) translateY(-20%);
        background-color:transparent;
        
    }
    

`

const icon=css`
    font-size:0.6em;
   
`






export {header,bgWrap,nameWrap,icon}