/**
 * @file Portfolio List component  - for computer view
 * @date 2021-04-01
 * @author Jubi
 * @lastModify Jubi-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Image from 'next/image'
import {titleStyle,contentStyle, scroll, intro1, intro2, showcase, cases, displayImg, displayIntro, displayImg2, displayIntro2} from './style'
import { Popover } from 'antd';
import GitHubIcon from '@material-ui/icons/GitHub';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
const portfolios = [
    {
        title:'MY website',
        date:'2021.3',
        img:'jubi.jpg',
        link:'https://jubi-git-master-jubi33717f.vercel.app/',
        github:'https://github.com/jubi33717f/jubi_site',
        info:'My personal website',
        tech:'Fontend: Next.js, Typescript, Babel, React, Emotion CSS | Database: Firebase'

    },
    {
        title:'Film Finder',
        date:'2020.10',
        img:'filmFinder.jpg',
        link:'',
        github:'https://github.com/unsw-cse-capstone-project/capstone-project-comp9900-h18b-galahad',
        info:'Film score system based on TMDB api + personal recommendation based on our own machine learning system. Backend part did not deploy. You can still run it locally follow the github Readme introduction.',
        tech:'Fontend: React, Redux, Webpack, SCSS | Backend: Python-Flask | Database: Mongodb'

    },
    {
        title:'Airtasker',
        date:'2020.5',
        img:'airtasker.jpg',
        link:'https://ataker.now.sh',
        github:'https://bitbucket.org/soniahou/xyz.frontend',
        info:'Community marketplace for people to outsource task, find local services or complete flexible jobs to earn money.',
        tech:'Fontend: React, Redux, Google Map api, SCSS | Backend: Node-Koa | Database: Mongodb'
    },
    {
        title:'Unihelp chatbot',
        date:'2020.7',
        img:'unihelp.jpg',
        link:'https://unihelp-9323team3.vercel.app/',
        github:'https://github.com/9323Team/frontend',
        info:'University helping system. Backend did not deploy. You can still run it locally follow the github Readme introduction.',
        tech:'Fontend: React, Redux, SCSS Backend: Python-Flask | Database: Dynamodb'
    },
    {
        title:'Weather App',
        date:'2021.6',
        img:'weatherapp.jpg',
        link:'https://vigorous-darwin-40f203.netlify.app/',
        github:'https://github.com/jubi33717f/weather_widget',
        info:'Forecast 7 days weather condition..',
        tech:'Fontend: React, Redux, SCSS'
    },
    {
        title:'Seddit App',
        date:'2019.12',
        img:'seddit.jpg',
        link:'',
        github:'https://github.com/jubi33717f/reddit',
        info:' =>Reddit ',
        tech:'Fontend: Pure Js, CSS3'
    },
    {
        title:'Hr Management',
        date:'2020.8',
        img:'hrManagement.jpg',
        link:'https://hr-management-eight.vercel.app',
        github:'https://github.com/jubi33717f/hrManagement',
        info:'HR management system, Admin system + Employee system. Test account could be found in github Readme file.',
        tech:'Fontend: React, Redux, SCSS Backend: Node-Koa | Database: Mongodb'
    }
]
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const content = (link:string,github:string,info:string,tech:string)=>(
    <div css = {contentStyle}>     
        <h5>
            <a href={github}>
                <GitHubIcon/>
            </a>
            <a href={link}>
                <InsertLinkIcon/>
            </a>
        </h5>
        <p>Info: {info}</p>
        <p>Tech: {tech}</p>
    </div>
)
const title = (title:string)=>(<><FlightTakeoffIcon  style={{color:'#6D9EEB'}} /><h4 css={titleStyle}>{title}</h4></>)

const Works = ()=>{
    
    return (
        <>
        {/* <------------------------------------ **** LAYER FIRST START **** ------------------------------------ */}
        {/** scroll */}
        <div css = {scroll}> 
            {/* <------------------------------------ **** LAYER SECOND START **** ------------------------------------ */}
            {/** works */}  
            <div css = {showcase}>
                {portfolios.map((item,index)=>{
                    const path = `/works/${item.img}`
                    {/* <------------------------------------ **** LAYER THREE START **** ------------------------------------ */}
                    {/** every single work */} 
                    if(index%2===0){
                        return (<div css={cases} key={index}>
                            {/* <------------------------------------ **** SECTION ONE START **** ------------------------------------ */}
                            {/** image top & introduction bottom */}
                                <div css={displayImg}>
                                    <Popover style={{fontFamily:'Manrope!important'}} content={content(`${item.link}`,`${item.github}`,`${item.info}`,`${item.tech}`)} placement="bottom" title={title(`${item.title}`)} trigger="hover">
                                        <Image 
                                            src={path}
                                            layout="fill"
                                            loading='lazy'
                                            quality={100}
                                        />
                                    </Popover>
                                </div>
                            
                            <div css={displayIntro}>
                                <div css={intro1}>
                                    <p>0{index+1}</p>
                                </div>
                                <div css={intro2}> 
                                    <p>{item.title}<span>{item.date}</span></p>
                                    
                                </div>
                            </div>
                            {/* <------------------------------------ **** SECTION ONE END **** ------------------------------------ */}
                        </div>)
                    }
                    else{
                        return (<div css={cases} key={index}>
                            {/* <------------------------------------ **** SECTION TWO START **** ------------------------------------ */}
                            {/** introduction top & image bottom */}
                            <div css={displayImg2}>
                                <Popover css = {contentStyle} content={content(`${item.link}`,`${item.github}`,`${item.info}`,`${item.tech}`)} placement="top" title={title(`${item.title}`)} trigger="hover">
                                    <Image 
                                        src={path}
                                        layout="fill"
                                        loading='lazy'
                                        quality={100}
                                    />
                                </Popover>
                            </div>
                            <div css={displayIntro2}>
                                <div css={intro1}>
                                    <p>0{index+1}</p>
                                </div>
                                <div css={intro2}> 
                                    <p>{item.title}<span>{item.date}</span></p>
                                </div>
                            </div>
                            {/* <------------------------------------ **** SECTION TWO END **** ------------------------------------ */}
                        </div>)
                    }
                    {/* <------------------------------------ **** LAYER THREE START **** ------------------------------------ */}
                })}
            </div>
            {/* <------------------------------------ **** LAYER SECOND END **** ------------------------------------ */}
        </div>
        {/* <------------------------------------ **** LAYER ONE END **** ------------------------------------ */}
    </>
    )
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Works;
