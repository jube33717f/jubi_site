
import {css, keyframes} from '@emotion/react'

import {sm4} from '../../shared/globals'
const portfolio_bg = css`
    
    background-color:#FDE2CA;
    overflow-y:hidden;
    margin-left:54px;
    position:relative;
    height: 100vh;
    width: 100vw;
    overflow:hidden;
    position:absolute;
    top:0;
    ${sm4}{
        margin-left:0;
        overflow:auto;
    }

`

export {portfolio_bg}