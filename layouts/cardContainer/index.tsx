// import Head from 'next/head'

// import styled from '@emotion/styled'
import {ReactNode} from 'react'

import {cardStyle} from './style'



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