// import { css } from '@emotion/react'
import CardContainer from '@layouts/cardContainer'
import {bgWrap,icon} from './style'
import Email from '@components/email'
import Image from 'next/image'
import {AiFillGithub} from 'react-icons/ai'


// const ReactTypingEffect = typeof window !== `undefined` ? require("react-typing-effect").default : null

const Me = ({active,clickHandler}:{active:string[],clickHandler:({index}:{index:number})=>void}) =>{
    
 
   
   
    return<>
    {/* <h4 style={{color:'#6D9EEB'}}>jubi chen</h4> */}
    <CardContainer color='#F2E4DA' about={active[0]}>
    <Email/>
    {active[0]=='active'?( <div style={{position:'relative',overflow: 'hidden',}}>
        {/* <h3 css={nameWrap}>
            <a>Jubi <span>Chen</span> </a>
            <a href='https://github.com/jubi33717f' css={icon}><AiFillGithub/></a>
        </h3> */}
        <div css={bgWrap}>
            <figure>
                <Image 
                    src='/bg4.jpg'
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    />
                <figcaption>
                    <div>
                        <h3>JUBI <span>CHEN</span></h3>
                        <p>INTERESTING   ENTHUSIASTIC FREE INNOCENT</p>
                    </div>
                </figcaption>
            </figure>
            


        </div>
        
        
        
    </div>
    ):<h4 
        onClick={(e)=>{
            clickHandler({index:0})
        }}
        >J</h4> }
        
    
        
        

            
    </CardContainer>
    </>
}

export default Me;