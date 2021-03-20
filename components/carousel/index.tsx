import { Carousel,Card  } from 'antd';
import Badge from '@components/badge'
import {card,carouselStyle,meta} from './style'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare,faPaperclip} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare , faLinkedinIn,} from '@fortawesome/free-brands-svg-icons'


import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
const { Meta } = Card;

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
const CarouselCards = ({active,clickHandler}:{active:string[],clickHandler:({index}:{index:number})=>void}) =>(
    <Card
        hoverable
        css={card}
        // style={card_width}
        cover={<Carousel_cp/>}
    >
        <Meta css={meta} title={
        <h5>Jubi Chen
            <span>
            <a href='https://github.com/jubi33717f'>
                            {/* <FontAwesomeIcon style={{color:'#CECECE'}}icon={faGithubSquare}/> */}
                            {/* <GithubFilled /> */}
                            <GitHubIcon  style={{color:'#CECECE',fontSize:'2rem'}}/>
                        </a>
                        <a onClick={(e)=>{
                            clickHandler({index:2})
                        }}>
                            {/* <FontAwesomeIcon style={{color:'#2B84FF'}}icon={faPaperclip}/> */}
                            <AttachFileIcon style={{color:'#2B84FF',fontSize:'2rem'}}/>
                        </a>
                        <a href='https://www.linkedin.com/in/jubi-chen/'>
                            {/* <FontAwesomeIcon style={{color:'#EC2F78'}}icon={faLinkedinIn}/> */}
                            <LinkedInIcon style={{color:'#EC2F78',fontSize:'2rem'}}/>
                        </a>
                        
                        <a href='https://jubi33717f@gmail.com'>
                            {/* <FontAwesomeIcon style={{color:'#DB4438'}} icon={faEnvelopeSquare}/> */}
                            <EmailIcon style={{color:'#DB4438',fontSize:'2rem'}}/>
                        </a>
            </span>
        </h5>
        } description={<p>jubi.vercel.app</p>} />
    </Card>
    
)
export default CarouselCards;