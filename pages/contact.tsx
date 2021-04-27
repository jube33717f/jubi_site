/**
 * @file Contact Page
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import dynamic from 'next/dynamic';
import Image from 'next/image'
import React,{useState} from 'react'
import Page from '@layouts/page'
import Badge from '@components/badge'
import ContactForm from '@components/contact'

import Collections from '@material-ui/icons/Collections';
import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { info,info_photo,info_name,info_contact,map,btn,web_box,imgGrid,sarahEffect,box,cardStyle,cardFooter,icons,previousIcon,previous,next,nextIcon} from '@styles/contact'

const ReactTypingEffect = dynamic(()=>import('react-typing-effect'),{ssr:false})
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** CONTACT PAGE START **** ------------------------------------ */
const Info= () =>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [page,setPage] = useState(0)
    const [shown,setShown] = useState(false)
    const totalPage = 4
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const nextPage = ()=>{
        if(page === totalPage) setShown(false)
        setPage(page+1)
    }
    const previousPage = ()=>{
        if(page === 0) return
        setPage(page-1)
    }
   /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <>
        <Page>
            <div css={web_box}>
                {/* <------------------------------------ **** TOP SECTION 1 START **** ------------------------------------ */}
                {/** info box */}
                <div css={info}>
                    {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
                    {/** photo */}
                    <div css={info_photo}>
                        <Badge/>
                    </div>
                    {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
                    {/* <------------------------------------ **** SECTION2 START **** ------------------------------------ */}
                    {/** icons / hyper link */}
                    <div css={info_name}>
                        <h2>Frontend Developer - Sydney</h2>
                        <p css={icons}>
                            <a href='https://github.com/jubi33717f' target="_blank">  
                                <GitHubIcon  style={{color:'#CECECE',fontSize:'2rem'}}/>
                            </a>
                            <a href='https://drive.google.com/file/d/1VV1Kj0q7ZUXqF0oXGXd3hfwwt7RSbhWZ/view?usp=sharing' target="_blank" >
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
                        </p>
                    </div>
                    {/* <------------------------------------ **** SECTION2 END **** ------------------------------------ */}
                    {/* <------------------------------------ **** SECTION3 START **** ------------------------------------ */}
                    {/** contact form */}
                    <div css={info_contact}>
                        <ContactForm />
                    </div>
                    {/* <------------------------------------ **** SECTION3 END **** ------------------------------------ */}
                </div>
                {/* <------------------------------------ **** TOP SECTION 1 END **** ------------------------------------ */}
               
                
                {/* <MyMapComponent
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?&key=${process.env.GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                /> */}
                {/* <------------------------------------ **** TOP SECTION 2 START **** ------------------------------------ */}
                {/** map box or gallery */}
                {shown?<div css={box}>
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
                                       <h3>Familiar with...</h3>
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
                           <><div  css={next} onClick={nextPage}>NEXT  </div>
                           <div css={nextIcon} onClick={nextPage}> →</div></>
                         
                       </div>
                                   
                               
                    </div>
               </div>:<div css={map}>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0539966797605!2d151.2021876158088!3d-33.91400982883932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1beab2017bf%3A0x6f678061f64372c0!2s14j%20Mentmore%20Ave%2C%20Rosebery%20NSW%202018!5e0!3m2!1szh-CN!2sau!4v1619181790921!5m2!1szh-CN!2sau" width="100%" height="100%"   loading="lazy"></iframe></div>}  
                </div>
                {/* <------------------------------------ **** TOP SECTION 2 END **** ------------------------------------ */}
            </Page>
         </>
  )
}
/* <------------------------------------ **** CONTACT PAGE END **** ------------------------------------ */
export default Info