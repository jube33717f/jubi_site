import {css, keyframes} from '@emotion/react'
import {sm4} from '../../shared/globals'

const web_box= css`
    position: absolute;
    margin-left:55px;
    width:100vw;
    height:100vh;
    min-width: 1100px;
    z-index: 99;
    top:0;
    overflow:hidden;
    ${sm4}{
        overflow:auto;
        margin-left:0;
    }
    
`
const info = css`
    
    position: absolute;
    top: 8vh;
    left: 9vw;
    width: 50vw;
    height: 87vh;
    overflow:hidden;
    color: white;
    line-height: 1.9;
    ${sm4}{
        top: 8vh;
        width:100vw;
        height: 110vh;
    }

`
const info_photo = css`
    width: 30vw;
    ${sm4}{
        width:90vw;
    }
`
const info_name = css`
    width: 30vw;
    margin-bottom: 15px;
    border-bottom: solid 1px white;
    ${sm4}{
        width:80vw;
    }
`
const info_contact = css`
    width: 30vw;    
    margin-left:1vw;
    ${sm4}{
        width:100vw;
    }
`
const map = css`
    position: absolute;
    top: 8vh;
    left: 53vw;
    width: 38vw;
    height: 87vh;
    padding: 15px;
    background: white;
    ${sm4}{
        width:90vw;
        top:110vh;
        left:5vw;
    }

`
/*---image effect--**/
const imgGrid=css`
    padding:15px;
    width:100%;
    height:100%;
    top:0;
    position:absolute;
    left:0;
    overflow:hidden;
    figure{
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
                font-size:1.9em;
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
    position: absolute;
    top: 18vh;
    left: 44vw;
    width: 50vw;
    height: 65vh;
    padding: 1em;
    background: white;
    
    overflow:hidden;
    ${sm4}{
        display:none;
    }
`
const cardStyle = css`

    width:100%;
    height:100%;
    animation:${nameAnimation} 1s;
    z-index:1;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid rgba(0, 0, 0, 0.12);
    
    
    border-radius:0.2em;
 
    background:#60A58F;
    overflow:hidden;
    
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
    z-index:200;
    width:100%;
    display:block;
    height:4em;
    position:absolute;
    right:1.5em;
    /* bottom:0em; */
    bottom:.5em;
    
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


const icons = css`
    /* width:calc(100% - 13em); */
    width:100%;
    line-height:1em;
    padding-left:2em;
    display:inline-block;
    font-size:5px;
    overflow:hidden;
    position:relative;
    a{
        margin-right:1em;
        line-height:1em;
    }
    
`
const btn = css`
    color:#fff;
    position:absolute;
    right:1vw;;
`
export { info,info_photo,info_name,info_contact,map,btn,web_box,imgGrid,sarahEffect,box,cardStyle,cardFooter,icons,previousIcon,previous,next,nextIcon}