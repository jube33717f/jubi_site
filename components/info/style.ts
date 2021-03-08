import {css, keyframes} from '@emotion/react'
// const Contrast = require('contrast-js');

const nameAnimation = keyframes`
    from{
        opacity:0
    }
    100%{
        opacity:1
    }
    
`
const box=css`
    height:100vh;
    position: relative;
    width:100%;
    overflow:hidden;
`
const cardStyle = css`
    width:34em;
    top:50%;
    left:50%;
    
    position:absolute;
    animation:${nameAnimation} 1s;
    transform:translate3d(-17em,-14em,0);
    z-index:1;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid rgba(0, 0, 0, 0.12);
    
    height:20em;
    border-radius:0.2em;
    padding:2em;
    background:#60A58F;
    /* margin-top:10%; */
    overflow:hidden;
    /* justify-content:center; */

`
const cardHeader  = css`
    width:13em;
    height:16em;
    display:block;
    position:absolute;
    overflow:hidden;
   
`
const cardContent = css `
    /* background-image:url('/bg2.jpg'); */
    background-position: right bottom;
    background-repeat: no-repeat;
    width:calc(100%-13em);
    padding-top:2em;
    padding-right:2em;
    display:block;
    height:16em;
    position:absolute;
    left:16em;
    right:0;
    overflow:hidden;

`
const imgContent = css `

    width:100%;
    height:100%;
    top:0;
    display:flex;
    position:absolute;
    left:0;
    overflow:hidden;
    border:#D9EAD3 solid 1em;
    img{
        position:absolute; 
        z-index:1;
    }
    :hover{
        position:fixed;
        transform:scale(1.2);
        margin-top:0;
        margin-left:0
    }
    
`
const imgTag = css`
    position:absolute;
    background-color:rgba(217,234,211,0.7);
    
    height:2em;
    width:10em;
    text-align:center;
    z-index:3;
    font-variation-settings:"wght" 60; 
    font-family:var(--font-hard);
    margin-left:2%;
    /* transform:translateX(-50%);; */
    line-height:2em;
    margin-top:-0.4em;
    color:#EB6E51;
`
const text = css`
    font-size:1.4em;
    font-weight:600;
    color:#663499;
    letter-spacing:0.1em;
    margin-top:0.5em;
    overflow:hidden;
    
    
`
const icons = css`
    /* width:calc(100% - 13em); */
    height:1em;
    display:inline-block;
    font-size:2em;
    overflow:hidden;

    svg{
       
        padding-right:0.4em;
    }

`
const arrowAttention = keyframes`
    from{
        opacity:0;
        transform:translate3d(-1.5em,0,0)
    }
    50%{
        opacity:1;

    }
`
const arrowAttention2 = keyframes`
    from{
        opacity:0;
        transform:translate3d(1.5em,0,0)
    }
    50%{
        opacity:1;

    }
`
const cardFooter = css `
    z-index:2;
    width:100%;
    display:block;
    height:4em;
    position:absolute;
    right:1.5em;
    margin-top:16em;
    
`
const previousIcon=css`
    left:3em;
    position:absolute;
    font-variation-settings:"wght" 200;
    font-size:0.8em;
    font-family:var(--font-hard);
    animation:${arrowAttention2} 2.4s infinite;  
    text-shadow: #D9EAD3 1px 0 10px;
`
const previous=css`
    position:absolute;
    left:5em;
    font-family:var(--font-hard);  
    text-shadow: #D9EAD3 1px 0 10px;
   
`

const next=css`
   
    position:absolute;
    right:2em;
    float:right;
    font-family:var(--font-hard);  
    text-shadow: #D9EAD3 1px 0 10px;
   
`
const nextIcon=css`
    
    right:0em;
    position:absolute;
    font-variation-settings:"wght" 200;
    font-size:0.8em;
    font-family:var(--font-hard);
    animation:${arrowAttention} 2.4s infinite;  
`

export { box,imgTag,imgContent,cardStyle,cardHeader,cardContent,icons,cardFooter,text ,previousIcon,previous,next,nextIcon}