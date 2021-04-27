
import {css} from '@emotion/react'
import {sm1,sm2,sm3,sm4} from '../../shared/globals'
const carouselStyle = css`
    display:none;
    ${sm4}{
        display:block;
        position:absolute;     
        width:400px;
        height:280px;
        line-height:280px;
        text-align: 'center';
        background:#364d79;
        li button{
            background:var(--primary-color)!important;
        }
        ${sm3}{
            width:350px;
            height:230px;
            line-height:230px;
        }
        ${sm1}{
            width:300px;
            height:190px;
            line-height:190px;
        }

    }



`
const meta = css`
    h5{
        font-size:2rem;
        span{         
            position:absolute;
            left:150px;   
            a{
                padding:.15em;
                word-spacing:5px
            }
            ${sm3}{
                top:250px;
                padding-top:10px;
            }
            ${sm2}{
                top:250px;
                padding-top:0px;
            }
            ${sm1}{  
                top:220px;
                font-size:1rem!important;
                
            }
        }
    }
    
`
const card = css`
    width:400px!important;
    margin-left:5%;
    margin-top:3em;
    transform:translateX(-53%);
    ${sm3}{
        width:350px!important;
    }
    ${sm1}{
        width:300px!important;
    }
`


export {card,carouselStyle,meta}