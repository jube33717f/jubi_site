import {css, keyframes} from '@emotion/react'
import {sm1,sm2,sm3,sm4,md,lg1,lgm,lg2} from '../../shared/globals'
// const Contrast = require('contrast-js');



/*---image effect--**/
const imgGrid=css`
    width:100%;
    height:100%;
    top:0;
    position:absolute;
    left:0;
    overflow:hidden;
    figure{
        /* border:1em solid #60A58F; */
        position: relative;
	    float: left;
	    overflow: hidden;
	    margin: 0 0;
	    width: 100%;
        height:100%;
	    background: #3085a3;
	    text-align: center;
	    cursor: pointer;
        
        figcaption{
            padding: 2em;
            color: #fff;
            text-transform: uppercase;
            font-size: 1.25em;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            :before :after{
                pointer-events: none;
            }
            h3{
                font-family:var(--font-hard);
                letter-spacing: .1em;
                color:#fff;
                margin-top:1em;
                :after{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: #fff;
                    content: '';
                    -webkit-transition: -webkit-transform 0.35s;
                    transition: transform 0.35s;
                     -webkit-transform: translate3d(0,0,0);
	                transform: translate3d(0,0,0);
                }
            }
            ${md}{
                margin-top:4em;
                font-size:.9em;
            }
            ${lgm}{
                margin-top:1em;
                font-size: 1.1em;
            }
            ${lg2}{
                margin-top:1em;
                font-size: 1.25em;
            }
        }

    }
`
const sarahEffect=css`
    background: #42b078;
    img{
        max-width: none;
	    width: -webkit-calc(100% + 20px);
	    width: calc(100% + 20px);
        opacity: 0.4;
	    -webkit-transform: translate3d(0,0,0);
	    transform: translate3d(0,0,0);
        :hover{
            opacity:0.8;
            -webkit-transition: opacity 0.35s, -webkit-transform 0.35s; 
            transition: opacity 0.35s, transform 0.35s;
	        -webkit-transform: translate3d(-10px,0,0);
	        transform: translate3d(-10px,0,0);
            -webkit-backface-visibility: hidden;
	        backface-visibility: hidden;
        }
        
    }
    
    figcaption {
	    text-align: left;
        h3{
            opacity: 1;
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            
        }
    
    }
    :hover h3{
        padding: 1em 0;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        
    }
`

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
    width:32em;
    height:20em;
    top:50%;
    left:50%;
    
    position:absolute;
    animation:${nameAnimation} 1s;
    transform:translate3d(-16em,-14em,0);
    z-index:1;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid rgba(0, 0, 0, 0.12);
    
    
    border-radius:0.2em;
    padding:2em;
    background:#60A58F;
    overflow:hidden;
    ${md}{
        width:18em;
        left:82%;
        height:17em;
    }
    ${lgm}{
        width:25em;
        left:62%;
        height:19em;
    }
    ${lg2}{
        width:32em;
        height:20em;
        left:50%;
    }
    

`
const cardHeader  = css`
    width:13em;
    height:16em;
    display:block;
    position:absolute;
    overflow:hidden;
    padding-top:2em;
    
   
`
const cardContent = css `
    /* background-image:url('/bg2.jpg'); */
    background-position: right bottom;
    background-repeat: no-repeat;
    width:calc(100%-13em);
    padding-top:4em;
    padding-right:2em;
    display:block;
    height:16em;
    position:absolute;
    left:16em;
    right:0;
    overflow:hidden;
    ${md}{
        width:10em;
        left:10em;
        padding-top:5em;
    }
   
    ${lgm}{
        width:14em;
        left:13em;
        padding-top:3em;
    }
    ${lg2}{
        width:calc(100%-13em);
        left:16em;
        padding-top:4em;
    }
`

const footer=css`
    width:100%;
    text-align:center;
    margin-top:0em;
    color: #6D9EEB;
    font-family:var(--font-hard);
    font-size:.7em;
    font-variation-settings:"wght" 500;
    line-height:.9em;
    letter-spacing:.01em;
    p:nth-of-type(2){
        :after{
            height:1px;
            background-color: #6D9EEB;
            width:25em;
            margin:auto;
            content: "";
            display: block;
        }
    }
`
const text = css`
    font-size:1.2em;
    font-weight:600;
    color:#663499;
    letter-spacing:0.1em;
    margin-top:0.5em;
    overflow:hidden;
    ${md}{
        font-size:.7em;
    }
    ${lgm}{
        font-size:1em;
    }
    ${lg2}{
        font-size:1.2em;
    }
    
    
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
    ${md}{
        font-size:1.5em;
    }
    ${lgm}{
        font-size:1.8em;
    }
    ${lg2}{
        font-size:2em;
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
    /* bottom:0em; */
    top:18em;
    ${md}{
        top:19em;
        font-size:.8em;
    }
    ${lgm}{
        top:17em;
        font-size:1em;
    }
    ${lg2}{
        top:18em;
    }
`
const previousIcon=css`
    left:3em;
    position:absolute;
    font-variation-settings:"wght" 200;
    font-size:0.8em;
    font-family:var(--font-hard);
    animation:${arrowAttention2} 2.4s infinite; 
    
    /* text-shadow: #D9EAD3 1px 0 10px; */
`
const previous=css`
    position:absolute;
    left:5em;
    font-family:var(--font-hard);  
    /* text-shadow: #D9EAD3 1px 0 10px; */
   
`

const next=css`
   
    position:absolute;
    right:2em;
    float:right;
    font-family:var(--font-hard);  
    /* text-shadow: #D9EAD3 1px 0 10px; */
    
`
const nextIcon=css`
    
    right:0em;
    position:absolute;
    font-variation-settings:"wght" 200;
    font-size:0.8em;
    font-family:var(--font-hard);
    animation:${arrowAttention} 2.4s infinite;  
`

export {footer, imgGrid,sarahEffect,box,cardStyle,cardHeader,cardContent,icons,cardFooter,text ,previousIcon,previous,next,nextIcon}