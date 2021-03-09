import Head from 'next/head'

// import styled from '@emotion/styled'
import {ReactNode} from 'react'
import {css} from '@emotion/react'

const cardStyle = ({color,about}:{color:string,about:string}) =>{
    const width= about=='active'&&'100%'||(about=='hover'&&'15%')||'5rem'
    return css`
        position:relative;
        background-color:${color};
        width:${width};
        max-width:calc(100%-15rem);
        transition:width 0.7s ease-out;
        overflow:none;
        min-width:5rem;
        /* overflow:hidden; */
        /* opacity: 0.8; */
        /* &:hover{
            width:${width}+5%;
        } */
        
    `}
// const Card = styled.div(
//     {    
//         minWidth: '0',
//         // display: 'flex',
//         position: 'relative',
        
        
//         paddingLeft:'1.3%' ,
//         height:'100vh'
//     },
//     props=>({
//         backgroundColor:props.color||'pink',
//         width:props.about=='active'&&'70%'||'10%',
//     })
// )


/*--All types & interfaces---**/


type ContainerProps = {

    color:string,
    about:string,
    children:ReactNode
}

const CardContainer = ({ color, about, children}: ContainerProps )=>(
    <div  css={cardStyle({color, about})}>
        {children}
    </div>
)
export default CardContainer;