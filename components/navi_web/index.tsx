/**
 * @file Web navigation component
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import  React,{useState} from  'react'
import {siteNavi,siteNavi_bg,siteNavi_pages,siteNavi_links , naviBtn,naviBtn_area,naviBtn_inner,naviBtn_dot,closeBtn,closeBtn_area,closeBtn_inner} from './style'
import Link from 'next/link'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const WebNavigation =()=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [open,setOpen] = useState(false)
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    return (<>
            {/* <------------------------------------ **** <TOP SECTION1> START **** ------------------------------------ */}
            {/** navi open render */}
            <nav css={siteNavi(open)}>
                {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
                {/** navi background */}
                <div css={siteNavi_bg(open)}></div>
                {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
                {/* <------------------------------------ **** SECTION2 START **** ------------------------------------ */}
                {/** navi main part*/}
                <ul css={siteNavi_pages(open)}>
                    <li><Link href={`/`}>HOME</Link></li>
                    <li><Link href={`/portfolio`}>PORTFOLIO</Link></li>
                    <li><Link href={`/writing`}>Writing</Link></li>
                    <li><Link href={`/contact`}>Contact</Link></li>
                </ul>
                {/* <------------------------------------ **** SECTION2 END **** ------------------------------------ */}
                {/* <------------------------------------ **** SECTION3 START **** ------------------------------------ */}
                {/** bottom part: additional info*/}
                <ul css={siteNavi_links(open)}>
                    <li>
                        Contact
                        <span onClick={async ()=>{
                            try{
                                await navigator.clipboard.writeText('jubi33717f@gmail.com')          
                            }catch(err){
                                console.error('Could not copy text')
                            }
                        }}>Copy email</span>
                    </li>
                    <li>
                        Find me on
                        <a href='https://github.com/jubi33717f' target="_blank"><span>Github</span></a>
                    </li>
                </ul>
                {/* <------------------------------------ **** SECTION3 END **** ------------------------------------ */}
                {/* <------------------------------------ **** SECTION4 START **** ------------------------------------ */}
                {/** close button*/}
                <div css={closeBtn(open)} onClick={()=>{setOpen(false)}}>
                <div css={closeBtn_area}></div>
                <div css={closeBtn_inner}></div>
                {/* <------------------------------------ **** SECTION4 END **** ------------------------------------ */}
            </div>
            </nav>
            {/* <------------------------------------ **** <TOP SECTION1> END **** ------------------------------------ */}
            {/* <------------------------------------ **** <TOP SECTION2> START **** ------------------------------------ */}
            {/** navi close render */}
            <div css={naviBtn(open)} onClick={()=>{setOpen(true)}}>
                <div css={naviBtn_area}></div>
                <div css={naviBtn_inner}>
                    <div css={naviBtn_dot}></div>
                    <div css={naviBtn_dot}></div>
                    <div css={naviBtn_dot}></div>
                </div>
            </div>
            {/* <------------------------------------ **** <TOP SECTION2> END **** ------------------------------------ */}
            </>
    )
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default WebNavigation