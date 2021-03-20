
import {css} from '@emotion/react'
import {sm1,sm2,sm3,sm4} from '../../shared/globals'
const carouselStyle = css`
    display:none;
    ${sm4}{
        display:block;
        position:absolute;
        
        width:410px;
        height:280px;
        line-height:270px;
        text-align: 'center';
        background:#364d79;
        li button{
            background:var(--primary-color)!important;
        }
        /* margin-left:5%; */

    }



`
const meta = css`
    h5{
        font-size:1.3em;
    }
    p{
        font-size:1.2em;
    }
`

export {carouselStyle,meta}