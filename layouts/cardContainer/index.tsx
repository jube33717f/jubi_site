// import Head from 'next/head'

// import styled from '@emotion/styled'
import {ReactNode} from 'react'
import PhoneNavigation from '@components/navigation'
import {cardStyle,navStatus} from './style'



/*--All types & interfaces---**/


type ContainerProps = {
    color:string,
    about:string,
    children:ReactNode
}

const CardContainer = ({ color, about, children}: ContainerProps )=>(
    
   <div  css={cardStyle({color, about})}>
       <div css={navStatus}><PhoneNavigation /></div>
        
        {children}
    </div>
)
export default CardContainer;