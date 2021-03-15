import {css, keyframes} from '@emotion/react'
import {sm1,sm2,sm3,sm4,md,lg1,lgm,lg2} from '../../shared/globals'
const header = css`
    display: block;
    white-space: nowrap;
    padding-top:5%;
    padding-left:5%;
    width:100%;
    height:23rem;
   
`

const bgWrap=css`
    
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0 auto;
    z-index: 0;
    text-align: center;
    figure{
        position: relative;
        margin:0;
        height: 100vh;
        width: 100vw;
        background-color:#F2E4DA;
        :hover{
            color: #fff;
	        -webkit-transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
	        transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
            opacity: 1;
	        -webkit-transform: translate3d(0,0,0);
	        transform: translate3d(0,0,0);
            figcaption:before,p{
                opacity: 1;
	            -webkit-transform: translate3d(0,0,0);
	            transform: translate3d(0,0,0);
            }
            h3{
                color: #fff;
                -webkit-transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
                transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
            }
            
            
        }
        ${md}{
            h3{
                font-size:1em;
            }
            p{
                font-size:.6em;
            }
            margin-left:-2em;
        }
        ${lg1}{
            p{
                font-size:.7em;
                margin-left:0;
            }
            
            
        }
        ${lgm}{
            p{
                font-size:.9em;
                margin-left:0;
            }
        }
        ${lg2}{
            p{
                font-size:1.2em;
                margin-left:0;
            }
        }
        img{
            opacity: 0.8;
            position:relative;
            min-height: 100%;
	        max-width: 100%;
        }
        figcaption{
            padding: 2em;
            color: #fff;
            text-transform: uppercase;
            font-size: 1.25em;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            h3{
                
                font-weight:100;
               
                span{
                    font-weight:800;
                }
            }
            :before :after{
                pointer-events: none;
            }
            :before,p{
                
                -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	            transition: opacity 0.35s, transform 0.35s;
                
            }
            :before{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: -webkit-linear-gradient(top, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
                background: linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
                content: '';
                opacity: 0;
                -webkit-transform: translate3d(0,50%,0);
                transform: translate3d(0,50%,0);
            }
        }
        h3{
            font-size:2.4em;
            letter-spacing:.1em;
            position: absolute;
            top: 40%;
            left: 0;
            width: 90%;
            color: #fff;
            -webkit-transition: -webkit-transform 0.35s, color 0.35s;
            transition: transform 0.35s, color 0.35s;
            -webkit-transform: translate3d(0,-50%,0);
            transform: translate3d(0,-50%,0);
        }
        p{      
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 2em;
            width: 88%;
            opacity: 0;
            -webkit-transform: translate3d(0,10px,0);
            font-family:var(--font-hard);
            word-spacing:1em;
        }
       

        
    }
    /* img{
        opacity:0.5;
    } */
` 


const icon=css`
    font-size:0.6em;
   
`






export {header,bgWrap,icon}