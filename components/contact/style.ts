
import {css} from '@emotion/react'
import {sm4} from '../../shared/globals'
const contact_form = css`
    font-family:var(--font-art);
    width: 25vw;
    &.MuiTextField-root{
        margin: 8px;
        width: '25ch';
        margin-bottom:10em;
    }
    div{
        margin-bottom:.2em;
    }
    .contact_form__submit{
        background-color:#000;
        border-radius:.4em;
        width:80px;
        outline:none;
    }
    section{
        display:flex;
        p{
            line-height:1em;
            padding-left:20%;
            padding-top:1em;
            color:#000;
        }
    }
    ${sm4}{
        width: 80vw;
    }
`


export　{contact_form}