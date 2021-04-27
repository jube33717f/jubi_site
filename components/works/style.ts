import {css} from '@emotion/react'
import {sm4,md,lg1,lgm,lg2,lg3} from '../../shared/globals'


const scroll=css`
    overflow-y:hidden;
    overflow-x: auto;
    overflow: -moz-scrollbars-none;
    ::-webkit-scrollbar { width: 0 !important }
    -ms-overflow-style: none; 
    ${sm4}{
        display:none;
    }
`
const showcase=css`
    position:relative;
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;   
    height:100vh;
    width:560vh;
`
const cases = css`  
    position:relative;
    background-color:rgba(0,0,0,0.1);
    height:100vh;
    width:80vh;  
`
const displayImg = css`
    font-family:var(--font-hard);
    position:absolute;
    border:rgba(0,0,0,0.05) solid 10px;
    img{
        opacity: 0.9;
        cursor:pointer;
    } 
    height:50vh;
    width:80vh;
`

const displayIntro=css`
    position:absolute;
    top:50vh;
    height:50vh;
    width:80vh;  
`
const displayImg2 = css`
    position:absolute; 
    border:rgba(0,0,0,0.05) solid 10px;
    img{
        opacity: 0.9;
    }
    top:50vh;
    height:50vh;
    width:80vh;
    
`

const displayIntro2=css`
    position:absolute;
    height:50vh;
    width:80vh;
    
`
const intro1 = css`
    position: absolute;
    left: 10px;
    top: 10px;
    bottom: auto;
    color: rgb(233, 16, 58);
    font-size:3em;
    letter-spacing: 1px;
    
`
const intro2 = css`
    position: absolute;
    width: 80vh;
    height: 50vh;
    left: 20vh;
    margin-top:-35vh;
    color:#EEDED9;   
    p{
        font-size: 38px;
        position: relative;
        top: 50%;
        display: inline-block;
        span{
            display: block;
            color: rgb(233, 16, 58);
        }
    }
    
    transform: rotate(270deg) translate(-20%, 0%);
    
   
`
const contentStyle = css`
    font-family:var(--font-hard);
   h5{
        font-size: 2em;
        color:#2C2F40;
       svg{
           margin-left:.2em;
           margin-right:1em;
       }
   }
   ${sm4}{
       width:270px;
   }
   ${md}{
        width:270px;
        
        h5{
            font-size: 1.3em;
        }
        p{
            font-size:.8em;
        }
    }
    ${lg1}{
        width:380px;
        
    }
    ${lgm}{
        width:430px;
        h5{
            font-size: 1.5em;
        }
        p{
            font-size:1em;
        }
    }
    ${lg3}{
        width:500px;
        
    }
`
const titleStyle = css`
    color:#6D9EEB;
    margin-top:.05em;
    /* margin-bottom:.1em; */
    /* padding-bottom:0; */
    font-family:var(--font-hard);
    line-height:1em;
    font-size:2em;
    letter-spacing:.1em;
    text-transform: uppercase;
    text-align:left;
    ${md}{
        font-size:1.4em;

    }
    ${lg1}{
        font-size:1.5em;
    }
    ${lg2}{
        font-size:2em;
        
    }
`
export {titleStyle,contentStyle, scroll, intro1, intro2, showcase, cases, displayImg, displayIntro, displayImg2, displayIntro2} 
