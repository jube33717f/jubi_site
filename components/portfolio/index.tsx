// import { css } from '@emotion/react'
import CardContainer from '@layouts/cardContainer'
import Works from '@components/works'
import {footer} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Portfolio = ({active,clickHandler}:{active:string[],clickHandler:({index}:{index:number})=>void}) =>(

    <CardContainer color='#F2B27C' about={active[2]}>
        {active[2]=='active'&&<h1 style={{color:'#6D9EEB'}}>PORTFOLIO </h1>||<h4 
            onClick={()=>{
                clickHandler({index:2})
            }}
            style={{color:'black'}}>P</h4> }
        {active[2]=='active'&&<div>
            <Works/> 
            <div css={footer}>
                    
                   <p>You can view my works here.</p>
                   <p>Click or tap on each work to see it more detail.</p>
                    <a href='https://github.com/jubi33717f'><FontAwesomeIcon style={{fontSize:'1.3em'}}icon={faGithubSquare}/></a>
                    
            </div>
        </div>}
         
    </CardContainer>
)
export default Portfolio