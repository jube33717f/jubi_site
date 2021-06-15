/**
 * @file Portfolio List component - for phone view
 * @date 2021-04-01
 * @author Jubi
 * @lastModify Jubi 2021-06-16
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Image from 'next/image'
import {title_h1,scroll,box,cases,img_display,description,intro1,intro2} from './style'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

const portfolios = [
    {
        title:'Stock info',
        date:'2021.6',
        img:'stockInfo2.jpg',
        link:'https://stock-info-client.vercel.app',
        github:'https://github.com/jubi33717f/Stock_Info',
        info:'Search and Subscribe Stocks Info',
        tech:'Frontend: React, Typescript, SASS | Database: GraphQL'
    },
    {
        title:'Weather App',
        date:'2021.6',
        img:'weatherapp2.jpg',
        link:'vigorous-darwin-40f203.netlify.app/',
        github:'https://github.com/jubi33717f/weather_widget',
        info:'Forecast 7 days weather condition..',
        tech:'Fontend: React, Redux, SCSS'
    },
    {
        title:'Photo Match',
        date:'2021.6',
        img:'photoMatch2.jpg',
        link:'https://photo-match.vercel.app/',
        github:'https://github.com/jubi33717f/photo-match',
        info:'photo match',
        tech:'react'
    },
    {
        title:'MY website',
        date:'2021.3',
        img:'jubi2.jpg',
        link:'https://jubi-git-master-jubi33717f.vercel.app/',
        github:'https://github.com/jubi33717f/jubi_site',
        info:'My personal website',
        tech:'Fontend: Next.js, Typescript, Babel, React, Emotion CSS | Database: Firebase'

    },
    {
        title:'Film Finder',
        date:'2020.10',
        img:'filmFinder2.jpg',
        link:null,
        github:'https://github.com/unsw-cse-capstone-project/capstone-project-comp9900-h18b-galahad',
        info:'Film score system based on TMDB api + personal recommendation based on our own machine learning system. Backend part did not deploy. You can still run it locally follow the github Readme introduction.',
        tech:'Fontend: React, Redux, Webpack, SCSS | Backend: Python-Flask | Database: Mongodb'

    },
    {
        title:'Hr Management',
        date:'2020.8',
        img:'hrManagement2.jpg',
        link:'https://hr-management-eight.vercel.app',
        github:'https://github.com/jubi33717f/hrManagement',
        info:'HR management system, Admin system + Employee system. Test account could be found in github Readme file.',
        tech:'Fontend: React, Redux, SCSS Backend: Node-Koa | Database: Mongodb'
    },
    {
        title:'Unihelp chatbot',
        date:'2020.7',
        img:'unihelp2.jpg',
        link:'https://unihelp-9323team3.vercel.app/',
        github:'https://github.com/9323Team/frontend',
        info:'University helping system. Backend did not deploy. You can still run it locally follow the github Readme introduction.',
        tech:'Fontend: React, Redux, SCSS Backend: Python-Flask | Database: Dynamodb'
    },
    {

        title:'Airtasker',
        date:'2020.5',
        img:'airtasker2.jpg',
        link:'https://ataker.now.sh',
        github:'https://bitbucket.org/soniahou/xyz.frontend',
        info:'Community marketplace for people to outsource task, find local services or complete flexible jobs to earn money.',
        tech:'Fontend: React, Redux, Google Map api, SCSS | Backend: Node-Koa | Database: Mongodb'
    }, 
    {
        title:'Seddit App',
        date:'2019.12',
        img:'seddit2.jpg',
        link:null,
        github:'https://github.com/jubi33717f/weather',
        info:' =>Reddit ',
        tech:'Fontend: Pure Js, CSS3'
    },
]

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const WorksPhone = ()=>{
    
    return (
        <>
        {/* <------------------------------------ **** LAYER FIRST START **** ------------------------------------ */}
        {/** scroll */}
        <div css={scroll}>
            <h1 css={title_h1}>PORTFOLIO</h1>
            {/* <------------------------------------ **** LAYER SECOND START **** ------------------------------------ */}
            {/** works */}
            <div css={box}>
            {portfolios.map((item,index)=>{
                    const path = `/works/${item.img}`
                    {/* <------------------------------------ **** LAYER THREE START **** ------------------------------------ */}
                    {/** every single work */} 
                    if(index%2===0){
                        {/* <------------------------------------ **** SECTION ONE START **** ------------------------------------ */}
                        {/** image left & introduction right*/}
                        return (
                            <div css={cases} key={index}>
                                
                                <a href={item.github}>
                                    <div css={img_display} >
                                            <Image 
                                                src={path}
                                                layout="fill"
                                                loading='lazy'
                                                quality={100}
                                            />
                                    </div>
                                </a>
                                <div css={description} style={{ right: '0px'}}>

                                    <div css={intro1}>
                                        <p>0{index+1}</p>
                                        <span></span>
                                    </div>
                                    <div css={intro2}> 
                                        <p>{item.title}<span>{item.date}</span></p>
                                        
                                    </div>
                                </div>
                            </div>)
                        {/* <------------------------------------ **** SECTION ONE END **** ------------------------------------ */}
                    }else{
                        {/* <------------------------------------ **** SECTION TWO START **** ------------------------------------ */}
                        {/** introduction top & image bottom */}
                        return (
                            <div css={cases} key={index}>
                                    
                                <div css={description}>

                                    <div css={intro1}>
                                        <p>0{index+1}</p>
                                        
                                    </div>
                                    <div css={intro2} > 
                                        <p>{item.title}<span>{item.date}</span></p>
                                        
                                    </div>
                                </div>
                                <a href={item.github}>
                                    <div css={img_display} style={{ right: '0px'}}>
                                            <Image 
                                                src={path}
                                                layout="fill"
                                                loading='lazy'
                                                quality={100}
                                            />
                                    </div>
                                </a>
                            </div>)
                        {/* <------------------------------------ **** SECTION TWO END **** ------------------------------------ */}
                    }
                    {/* <------------------------------------ **** LAYER THREE END **** ------------------------------------ */}
                }
            )}
            </div>
            {/* <------------------------------------ **** LAYER SECOND END **** ------------------------------------ */}
        </div>
        {/* <------------------------------------ **** LAYER FIRST END **** ------------------------------------ */}
    </>)
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default WorksPhone;
