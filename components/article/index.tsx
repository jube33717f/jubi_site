
import { css } from '@emotion/react'
import CardContainer from '@layouts/cardContainer'
import {postIndexList, postIndexItem,postIndexTitleBar} from './style'


const Article = ({active,clickHandler}:{active:string[],clickHandler:(e: React.MouseEvent<HTMLElement>,{index}:{index:number})=>void}) =>{
    
    return (
        <CardContainer color='#D3CCCB' about={active[3]}>
            {active[3]=='active'&&<h1 style={{color:'#FAED45'}}>WRITINGS </h1>||<h4 
            onClick={(e)=>{
                clickHandler(e,{index:3})
            }}
            style={{color:'black'}}>W</h4> }
            {active[3]=='active'&&<section>
                <ol css={postIndexList}>
                   <li css={postIndexItem}>
                       <a><time>2020</time><h2> CSR  vs  SSR  vs SSG <div css={postIndexTitleBar} ></div></h2></a>
                    
                    </li> 
                   <li css={postIndexItem}>
                       <a>
                           <time>2020</time>
                           <h2> Agile Methodology
                            <div css={postIndexTitleBar} ></div>
                           </h2>
                        </a>
                       
                   </li> 
                   
                   <li css={postIndexItem}>
                        <a>
                            <time>2020</time>
                            <h2> ES6 New features
                                <div css={postIndexTitleBar} ></div>
                                
                            </h2>
                        </a>
                        
                   </li> 
                   <li css={postIndexItem}>
                        <a>
                            <time>2020</time>
                            <h2>ES6 New features
                                <div css={postIndexTitleBar} ></div>
                            </h2>
                        </a>
                        
                   </li> 
                   <li css={postIndexItem}>
                        <a>
                            <time>2020</time>
                            <h2>ES6 New features
                                <div css={postIndexTitleBar} ></div>
                            </h2>
                        </a>
                        
                   </li> 
                </ol>
            </section>}
        </CardContainer>
    )
}
export default Article;