

import Image from 'next/image'
import {scroll,intro1,intro2,showcase,cases,displayImg,displayIntro,displayImg2,displayIntro2} from './style'


const images = ['filmFinder.jpg','airtasker.jpg','unihelp.jpg','weatherapp.jpg','seddit.jpg','hrManagement.jpg']
const imagesText = ['Film Finder','Airtasker','Unihelp chatbot','Weather App','Seddit App','Hr Management']
const date = [' 2020.10',' 2020.5',' 2020.7',' 2020.2',' 2019.12',' 2020.8']
const Works = ()=>{
    
    return (
        <div css = {scroll}>
            <div css = {showcase}>
                {images.map((item,index)=>{
                    const path = `/works/${item}`
                    if(index%2===0){
                        return (<div css={cases}>
                            <div css={displayImg}>
                                <Image 
                                    src={path}
                                    layout="fill"
                                    loading='lazy'
                                    quality={100}
                                />
                            </div>
                            <div css={displayIntro}>
                                <div css={intro1}>
                                    <p>0{index+1}</p>
                                </div>
                                <div css={intro2}> 
                                    <p>{imagesText[index]}<span>{date[index]}</span></p>
                                    
                                </div>
                            </div>
                        </div>)
                    }
                    else{
                        return (<div css={cases}>
                            <div css={displayImg2}>
                                <Image 
                                    src={path}
                                    layout="fill"
                                    loading='lazy'
                                    quality={100}
                                />
                            </div>
                            <div css={displayIntro2}>
                                <div css={intro1}>
                                    <p>0{index+1}</p>
                                </div>
                                <div css={intro2}> 
                                    <p>{imagesText[index]}<span>{date[index]}</span></p>
                                </div>
                            </div>
                        </div>)
                    }
                })}
               
                
               
            </div>
            </div>
    )
}
export default Works;