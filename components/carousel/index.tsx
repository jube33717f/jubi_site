/**
 * @file Carousel component
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */

import Badge from '@components/badge'

import Image from 'next/image'

import { Carousel,Card  } from 'antd';
import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import {card,carouselStyle,meta} from './style'
const { Meta } = Card;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Carousel_cp=()=>(
    <Carousel effect="fade" css={carouselStyle}>
        <div>
            <Badge/>
        </div>
        <div>
             <Image 
                src='/me/tech.jpg'
                layout="fill"
                loading='lazy'
                quality={100}
            />
        </div>
        <div>
            <Image 
                src='/me/m1.jpg'
                layout="fill"
                object-fit='cover'
                loading='lazy'
                quality={100}
            />
        </div>
        <div>
            <Image 
                src='/me/m2.jpg'
                layout="fill"
                loading='lazy'
                quality={100}
            />
        </div>
        <div>
            <Image 
                src='/me/m4.jpg'
                layout="fill"
                loading='lazy'
                quality={100}
            />
        </div>
        <div>
            <Image 
                src='/me/m4.jpg'
                layout="fill"
                loading='lazy'
                quality={100}
            />
        </div>
  </Carousel>
)
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const CarouselCards = () =>(
    <Card
        hoverable
        css={card}
        cover={<Carousel_cp/>}
    >
        <Meta css={meta} title={
        <h5>Jubi Chen
            <span>
                <a href='https://github.com/jubi33717f'>
                    <GitHubIcon  style={{color:'#CECECE',fontSize:'2rem'}}/>
                </a>
                <a 
                href='https://drive.google.com/file/d/1VV1Kj0q7ZUXqF0oXGXd3hfwwt7RSbhWZ/view?usp=sharing'                    
                >
                    <AttachFileIcon style={{color:'#2B84FF',fontSize:'2rem'}}/>
                </a>
                <a href='https://www.linkedin.com/in/jubi-chen/'>
                    <LinkedInIcon style={{color:'#EC2F78',fontSize:'2rem'}}/>
                </a>
                
                <a href='https://jubi33717f@gmail.com'>
                    <EmailIcon style={{color:'#DB4438',fontSize:'2rem'}}/>
                </a>
            </span>
        </h5>
        } description={<p>jubi.vercel.app</p>} />
    </Card>
    
)
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default CarouselCards;