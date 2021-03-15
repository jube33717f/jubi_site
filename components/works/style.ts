import {css} from '@emotion/react'
import {sm1,sm2,sm3,sm4,md,lg1,lg2} from '../../shared/globals'


const scroll=css`
    overflow-x: auto;
    overflow: -moz-scrollbars-none;
    ::-webkit-scrollbar { width: 0 !important }
    -ms-overflow-style: none; 
    margin-top:-0.8em;
`
const showcase=css`
    
    position:relative;
    
    /* width:100%; */
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    height:520px;
    width:3122px;
    ${md}{
        height:400px;
        width:2401px;
    }
    ${lg1}{
        height:600px;
        width:3605px;
    }
    ${lg2}{
        height:700px;
        width:4200px;
    }

    /* border-image:url('/bg3.jpg') 10; */
    /* border-top:solid 40px #fff; */
    /* border-bottom:transparent  solid 40px; */
`
const cases = css`
    
    position:relative;
    background-color:rgba(0,0,0,0.1);
    height:520px;
    width:446px;
    ${md}{
        height:400px;
        width:343px;
    }
    ${lg1}{
        height:600px;
        width:515px;
    }
    ${lg2}{
        height:700px;
        width:600px;
    }
    
`
const displayImg = css`
    font-family:var(--font-hard);
    position:absolute;
    border:rgba(0,0,0,0.05) solid 10px;
    img{
        opacity: 0.9;
        cursor:pointer;
    }
    
    height:260px;
    width:446px;
    ${md}{
        height:200px;
        width:343px;
    }
    ${lg1}{
        height:300px;
        width:515px;
    }
    ${lg2}{
        height:350px;
        width:600px;
    }
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
    top:260px;
    height:260px;
    width:446px;
    ${md}{
        top:200px;
        height:200px;
        width:343px;
    }
    ${lg1}{
        top:300px;
        height:300px;
        width:515px;
    }
    ${lg2}{
        top:350px;
        height:350px;
        width:600px;
    }
    /* background-color:rgba(0,0,0,0.4) ; */
`
const displayImg2 = css`
    
    position:absolute; 
    border:rgba(0,0,0,0.05) solid 10px;
    img{
        opacity: 0.9;
    }
    top:260px;
    height:260px;
    width:446px;
    ${md}{
        top:200px;
        height:200px;
        width:343px;
    }
    ${lg1}{
        top:300px;
        height:300px;
        width:515px;
    }
    ${lg2}{
        top:350px;
        height:350px;
        width:600px;
    }
    
`

const displayIntro2=css`
    position:absolute;
    height:260px;
    width:446px;
    ${md}{
        
        height:200px;
        width:343px;
    }
    ${lg1}{
        height:300px;
        width:515px;
    }
    ${lg2}{
        height:350px;
        width:600px;
    }
    
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
    ${md}{
        font-size:1em;
    }

`
const intro2 = css`
    position: absolute;
    width: 206px;
    height: 217px;
    right: 90px;
    color:#fff;
    
    
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
    ${md}{
        /* font-size: 31px; */
        p{
            font-size: 25px;
            letter-spacing:2px;
            span{
                display:block;
            }
        }
        transform: rotate(270deg) translate(10%, 40%);
    }
    ${lg1}{
        transform: rotate(270deg) translate(-40%, 0%);
    }
    ${lg2}{
        transform: rotate(270deg) translate(-50%, 0%);
    }
`
const contentStyle = css`
    font-family:var(--font-hard);
    width:500px;
   h5{
       font-size:2em;
       color:#2C2F40;
       svg{
           margin-left:.2em;
           margin-right:1em;
       }
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
`
export {titleStyle,contentStyle,scroll,intro1,intro2,showcase,cases,displayImg,displayIntro,displayImg2,displayIntro2}