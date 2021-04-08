import {css, keyframes} from '@emotion/react'
import {sm1,sm2,sm3,sm4,md,mdm,lg1,lgm,lg2} from '../../shared/globals'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
    ${sm4}{
        display:none;
    }
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
    ${sm4}{
        display:none;
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
const h1_title = css`
    color:#EB6E51;
    ${sm4}{
        text-align:center;
        /* margin-left:30%; */
        /* transform:translateX(-50%); */
        margin-top:1.7em;
        line-height:.8em;
        width:85%;
        
    }
    ${sm3}{
        margin-top:1em;
        font-size:1.3em;
    }

`
const handwriting=css`
    margin:auto;
    margin-left:-85%;
    margin-top:1em;
    font-variation-settings: "wght" 300;
    letter-spacing:.07em;
    width:90vw;
    font-family:var(--font-hard);
    font-size:.4em;
    /* transform:transitionX(-50%); */
`
const phone_box= css`
    position:relative;
    margin-left:50%;
    display:none;
    ${sm4}{
        display:block;
    }

`


const infoBox=css`
    position:relative;
    margin:auto;
    ${sm4}{
        display:none;
    }
`
const cardHeader  = css`
    height:6.5em;
    width: 90wv;
    margin:auto;
    margin-top:-1em;
    
    ${lgm}{
        height:9.5em;
        margin-top:0;
    }
    
`
const cardContent = css `
    margin:auto;
    display:block;
    height:16em;
    width:50vw;
    
    /* padding-left:.5em; */
    overflow:hidden;
    h1{
        text-align: center;
        font-size: 40px;
        
    }
    ${mdm}{
        /* top:5em; */
    }
    ${md}{
        
        left:10em;
        
        h1{
            font-size: 35px;
        }
    }
   
    ${lgm}{
        /* width:14em; */
        left:13em;
    }
    ${lg2}{
        /* width:calc(100%-13em); */
        left:16em;
  
    }
`
const text = css`
    font-size:.7em;
    font-weight:500;
    letter-spacing:0.1em;
    overflow:hidden;
    padding-left:1em;
    /* ${md}{
        font-size:.7em;
    } */
    ${lgm}{
        font-size:.8em;
    }
    /*${lg2}{
        font-size:1.2em;
    } */ 
`
const icons = css`
    /* width:calc(100% - 13em); */
    width:100%;
    line-height:1em;
    padding-left:2em;
    display:inline-block;
    font-size:large;
    overflow:hidden;
    position:relative;
    a{
        margin-right:.3em;
    }
    
`
const btn = css`
    color:#fff;
    position:absolute;
    right:3vw;;
`
export {btn, infoBox, phone_box,handwriting,h1_title, imgGrid,sarahEffect,box,cardStyle,cardHeader,cardContent,icons,cardFooter,text ,previousIcon,previous,next,nextIcon}