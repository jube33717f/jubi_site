
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
        /* margin-left:5%; */

    }



`
const meta = css`
    h5{
        font-size:1.3em;
        span{
            padding:1em;
            position:absolute;
            right:0;
            top:280px;
            a{
                padding:.4em;
            }
            ${sm3}{
                top:230px
            }
            ${sm1}{
               
                top:190px;
                
            }
        }
    }
    p{
        font-size:1.2em;
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

// const card_width = {width:400}

export {card,carouselStyle,meta}