import {sm1,sm2,sm3,sm4,md} from '../../shared/globals'
import {css} from '@emotion/react'


const cardStyle = ({color,about}:{color:string,about:string}) =>{
    const width= about=='active'&&'100%'||'4rem'
    const s_width= about=='active'?'100%':'0'
    const h_width = about=='active'?'100%':'4.5em'

    // const hover_width = about=='active'&&'100%'||'6em'
    return css`
        position:relative;
        background-color:${color};
        transition:width 0.7s ease-out;
       
        margin:0;
        padding:0;
        width:${width};
        max-width:calc(100%-12rem);
        min-width:4rem;
        box-shadow:-5px ​3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%); 
        ${sm4}{
            min-width:0;
            max-width:100%;
            width:${s_width};
        }
        
        &:hover{
            width:${h_width};
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