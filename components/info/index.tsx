
import CardContainer from '@layouts/cardContainer'
import dynamic from 'next/dynamic';
import {footer,imgGrid,sarahEffect,box,cardStyle,cardHeader,cardContent,cardFooter,icons,text,previousIcon,previous,next,nextIcon} from './style'
import Badge from '@components/badge'
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare,faPaperclip} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare , faLinkedinIn,} from '@fortawesome/free-brands-svg-icons'
import {useState} from 'react'
import Image from 'next/image'

{/*  */}
const ReactTypingEffect = dynamic(()=>import('react-typing-effect'),{ssr:false})
const Info= ({active,clickHandler}:{active:string[],clickHandler:({index}:{index:number})=>void}) =>{
    const [page,setPage] = useState(0)
    const totalPage = 4
    const nextPage = ()=>{
        if(page === totalPage) return
        setPage(page+1)
    }
    const previousPage = ()=>{
        if(page === 0) return
        setPage(page-1)
    }
    
    return (<CardContainer color='#57A0C0' about={active[1]}>
        {active[1]=='active'&&<h1 style={{color:'#EB6E51'}}>INFO </h1>||<h4 
            onClick={()=>{
                clickHandler({index:1})
            }}
            >I</h4> }
            {active[1]=='active'&&<div css={box}>
            <Card css={cardStyle}>
                {page===0&&<>
                <div css={cardHeader}>
                    <Badge/>
                </div>
                <div css={cardContent}>
                    <div css={icons}>
                        <a href='https://github.com/jubi33717f'><FontAwesomeIcon style={{color:'#CECECE'}}icon={faGithubSquare}/></a>
                        <a onClick={(e)=>{
                            clickHandler({index:2})
                        }}><FontAwesomeIcon style={{color:'#2B84FF'}}icon={faPaperclip}/></a>
                        <a href='https://www.linkedin.com/in/jubi-chen/'><FontAwesomeIcon style={{color:'#EC2F78'}}icon={faLinkedinIn}/></a>
                        
                        <a href='https://jubi33717f@gmail.com'><FontAwesomeIcon style={{color:'#DB4438'}} icon={faEnvelopeSquare}/></a>
                        

                    </div>
                    <div css={text}>
                        
                            <ReactTypingEffect
                                staticText="Nice to meet you 💖"
                                text={["I am Jubi, a web developer based on Sydney."," Currently focus on front end and always happy to try new techs.","Feel free to leave me messages."]}
                                speed={100}
                                eraseSpeed={10}
                            />
                        
                    </div>
                </div>
                </>}
                {page===1&&<>
                    
                    <div css={imgGrid}>
                        <figure css={sarahEffect}>
                            <Image 
                                src='/me/tech.jpg'
                                layout="fill"
                                loading='lazy'
                                quality={100}
                            />
                            <figcaption>
                                <h3>I know these about frontend...</h3>
                            </figcaption>
                        </figure>
                        
                    </div>
                    <h3>I know these</h3>
                </>}
                {page===2&&<>
                    <div css={imgGrid}>
                        <figure css={sarahEffect}>
                            <Image 
                                src='/me/m1.jpg'
                                layout="fill"
                                loading='lazy'
                                quality={100}
                            />
                            <figcaption>
                                <h3>Tag + Cats lover</h3>
                            </figcaption>
                        </figure>
                        
                    </div>
                    
                </>}
                {page===3&&<>
                    <div css={imgGrid}>
                        <figure css={sarahEffect}>
                            <Image 
                                src='/me/m2.jpg'
                                layout="fill"
                                loading='lazy'
                                quality={100}
                            />
                            <figcaption>
                                <h3>Tag + Barista apprentice</h3>
                            </figcaption>
                        </figure>
                        
                    </div>
                    
                </>}
                {page===4&&<>
                    
                       <div css={imgGrid}>
                        <figure css={sarahEffect}>
                            <Image 
                                src='/me/m4.jpg'
                                layout="fill"
                                loading='lazy'
                                quality={100}
                            />
                            <figcaption>
                                <h3>Tag + Adventure</h3>
                            </figcaption>
                        </figure>
                        
                    </div>
                </>}
                {page===5&&<>
                    
                    <div css={imgGrid}>
                     <figure css={sarahEffect}>
                         <Image 
                             src='/me/m3.jpg'
                             layout="fill"
                             loading='lazy'
                             quality={100}
                         />
                         <figcaption>
                             <h3>With friends is best</h3>
                         </figcaption>
                     </figure>
                     
                 </div>
             </>}
                <div css={cardFooter}>
                    {page > 0 ? (<><div css={previousIcon} onClick={previousPage}>←</div>
                    <div css={previous} onClick={previousPage}>PREV</div></>):null}
                    {page < totalPage?(<><div  css={next} onClick={nextPage}>NEXT  </div>
                    <div css={nextIcon} onClick={nextPage}> →</div></>):null}
                </div>
                
                





                
            </Card>
            <div css={footer}>
                    
                   <p>You can view my works here.</p>
                   <p>Click or tap on each work to see it more detail.</p>
                    <a href='https://github.com/jubi33717f'><FontAwesomeIcon style={{fontSize:'1.3em'}}icon={faGithubSquare}/></a>
                    
            </div>
            </div>}
            
         
    </CardContainer>)
}
export default Info