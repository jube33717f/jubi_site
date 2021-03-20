import { Carousel,Card  } from 'antd';
import Badge from '@components/badge'
import {carouselStyle,meta} from './style'
import Image from 'next/image'


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
const CarouselCards = () =>(
    <Card
        hoverable
    style={{ width: 410,marginLeft:'5%',marginTop:'5em' }}
    cover={<Carousel_cp/>}
  >
    <Meta css={meta} title={<h5>Jubi Chen</h5>} description={<p>jubi.vercel.app</p>} />
  </Card>
    
)
export default CarouselCards;