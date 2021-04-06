import {css} from '@emotion/react'
import {sm1,sm2,sm3,sm4,md,lg1,lgm,lg2} from '../../shared/globals'
const cursor= css`
    width: 30px;
    height: 30px;
    border: 2px solid #D9EAD3;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 150ms ease;
    transition-property: background-color, opacity, transform, mix-blend-mode;
    z-index: 9999;
    mix-blend-mode: difference;
    ${sm4}{
        width:20px;
        height:20px;
    }
    
` 

const cursorHidden = css`
    opacity: 0;
`

const cursorLinkHovered = css`
    transform: translate(-50%, -50%) scale(1.7);
    background-color: #D9EAD3;
`
    


const cursorClicked = css`
    transform: translate(-50%, -50%) scale(0.8);
    background-color: #D9EAD3;
`


export {cursor, cursorHidden, cursorLinkHovered, cursorClicked}

    







