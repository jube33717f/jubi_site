import {sm1,sm2,sm3,sm4,md,lg1,lgm,lg2,lg3} from '../../shared/globals'
import {css} from '@emotion/react'


const cardStyle = ({color,about}:{color:string,about:string}) =>{
    const width= about=='active'&&'100%'||'5rem'
    const s_width= about=='active'?'100%':'0'
    // const hover_width = about=='active'&&'100%'||'6em'
    return css`
        position:relative;
        background-color:${color};
        transition:width 0.7s ease-out;
        overflow:none;
        
        width:${width};
        max-width:calc(100%-15rem);
        min-width:5rem; 
        ${sm4}{
            min-width:0;
            max-width:100%;
            width:${s_width};
        }
        
    `
}


const navStatus = css`
    display:none;
    position:absolute;
    ${sm4}{
        display:block;
        position:absolute;
        
    }
`
export {cardStyle,navStatus} 