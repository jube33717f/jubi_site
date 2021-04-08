
import CardContainer from '@layouts/cardContainer'
import dynamic from 'next/dynamic';
import {btn,phone_box,handwriting,h1_title,infoBox,imgGrid,sarahEffect,box,cardStyle,cardHeader,cardContent,cardFooter,icons,text,previousIcon,previous,next,nextIcon} from './style'
import Badge from '@components/badge'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {useState} from 'react'
import Image from 'next/image'
import CarouselCards from '@components/carousel'

import Collections from '@material-ui/icons/Collections';
import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
{/*  */}
const ReactTypingEffect = dynamic(()=>import('react-typing-effect'),{ssr:false})
const Info= ({active,clickHandler}:{active:string[],clickHandler:({index}:{index:number})=>void}) =>{
    const [page,setPage] = useState(0)
    const [shown,setShown] = useState(false)
    const totalPage = 4
    const nextPage = ()=>{
        if(page === totalPage) setShown(false)
        setPage(page+1)
    }
    const previousPage = ()=>{
        if(page === 0) return
        setPage(page-1)
    }
    
    return (<CardContainer color='#57A0C0' about={active[1]}>
        {active[1]=='active'&&<h1 css={h1_title}>BIO </h1>||<h4 
            onClick={()=>{
                clickHandler({index:1})
            }}
            >B</h4> }
            {active[1]=='active'&&!shown&&<div css={infoBox}>
                <div css={cardHeader}>
                    <Badge/>
                </div>
                <div css={cardContent}>
                    <h1>Jubi Chen</h1>
                    <div css={icons}>
                        <a 
                        href='https://github.com/jubi33717f'
                        target="_blank">
                         
                            <GitHubIcon  style={{color:'#CECECE',fontSize:'2rem'}}/>
                        </a>
                        <a 
                        href='https://drive.google.com/file/d/1VV1Kj0q7ZUXqF0oXGXd3hfwwt7RSbhWZ/view?usp=sharing'
                        target="_blank"                     
                        >
                           
                            <AttachFileIcon style={{color:'#2B84FF',fontSize:'2rem'}}/>
                        </a>
                        <a href='https://www.linkedin.com/in/jubi-chen/' target="_blank">
                            <LinkedInIcon style={{color:'#EC2F78',fontSize:'2rem'}}/>
                        </a>
                        
                        <a href='https://jubi33717f@gmail.com' target="_blank">
                            <EmailIcon style={{color:'#DB4438',fontSize:'2rem'}}/>
                        </a>
                        <span css={btn} onClick={()=>{setShown(true)}}>
                            <Collections/>
                        </span>

                    </div>
                    <div css={text}>
                        
                            <ReactTypingEffect
                                staticText="Born and raised in China. Graduated from New South Wales. Frontend developer in Sydney since 2020. 💖"
                                text={["Feel free to leave me messages."]}
                                speed={100}
                                eraseSpeed={10}
                            />
                        
                    </div>
                </div>
                </div>
                }
            
            
            {active[1]=='active'&&shown&&<div css={box}>
            <div css={cardStyle}>
                
                {page===0&&<>
                    
                    <div css={imgGrid}>
                        <figure css={sarahEffect}>
                            <Image 
                                src='/me/tech.jpg'
                                layout="fill"
                                loading='lazy'
                                quality={100}
                            />
                            <figcaption>
                                <h3>I am familiar with...</h3>
                            </figcaption>
                        </figure>
                        
                    </div>
                    <h3>I know these</h3>
                </>}
                {page===1&&<>
                    <div css={imgGrid}>
                        <figure css={sarahEffect}>
                            <Image 
                                src='/me/m1.jpg'
                                layout="fill"
                                object-fit='cover'
                                loading='lazy'
                                quality={100}
                            />
                            <figcaption>
                                <h3>Tag + Cats lover</h3>
                            </figcaption>
                        </figure>
                        
                    </div>
                    
                </>}
                {page===2&&<>
                    <div css={imgGrid}>
                        <figure css={sarahEffect}>
                            <Image 
                                src='/me/m2.jpg'
                                layout="fill"
                                loading='lazy'
                                quality={100}
                            />
                            <figcaption>
                                <h3>Tag + bla</h3>
                            </figcaption>
                        </figure>
                        
                    </div>
                    
                </>}
                {page===3&&<>
                    
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
                {page===4&&<>
                    
                    <div css={imgGrid}>
                     <figure css={sarahEffect}>
                         <Image 
                             src='/me/m3.jpg'
                             layout="fill"
                             loading='lazy'
                             quality={100}
                         />
                         <figcaption>
                             <h3>m</h3>
                         </figcaption>
                     </figure>
                     
                 </div>
             </>}
                <div css={cardFooter}>
                    {page > 0 ? (<><div css={previousIcon} onClick={previousPage}>←</div>
                    <div css={previous} onClick={previousPage}>PREV</div></>):null}
                    {/* {page < totalPage?( */}
                    <><div  css={next} onClick={nextPage}>NEXT  </div>
                    <div css={nextIcon} onClick={nextPage}> →</div></>
                    {/* ):null} */}
                </div>
                               
            </div>
            {/* <div css={footer}>
                    
                   <p>You can view my works here.</p>
                   <p>Click or tap on each work to see it more detail.</p>
                    <a href='https://github.com/jubi33717f'><FontAwesomeIcon style={{fontSize:'10px'}}icon={faGithubSquare}/></a>
                    
            </div> */}
            </div>}


            {/* ===== phone view here ===== */}
            {active[1]=='active'&&<div css={phone_box}>
            <CarouselCards active={active} clickHandler={clickHandler}/>
            
                <div css={handwriting}>           
                    <ReactTypingEffect
                        staticText="Born and raised in China. Graduated from New South Wales. Frontend developer in Sydney since 2020. 💖"
                        text={["Feel free to leave me messages."]}
                        speed={100}
                        eraseSpeed={10}
                    />
                        
                </div>         
            </div>}
         
    </CardContainer>)
}
export default Info