/**
 * @file Phone navigation component
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import {nav,nav_no_show,naviStyle,inner,close_row,cancel,navi_page,navi_contact} from './style'
import {useState} from 'react'
import Link from 'next/link'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PhoneNavigation = () =>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    const [shown, setShown] = useState(false)
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    return <>
    {/* <------------------------------------ **** <TOP SECTION1> START **** ------------------------------------ */}
    {/** navi open render */}
    <nav css={shown?nav:nav_no_show}>
        {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
        {/** close button */}
        <div 
            css={shown?close_row:nav_no_show}
            onClick={()=>{
                setShown(false)
        }}>
            <div css={cancel}></div>
        </div>
        {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        {/* <------------------------------------ **** SECTION2 START **** ------------------------------------ */}
        {/** navi main part*/}
        <ul css={shown?navi_page:nav_no_show}>
            <Link href={`/`}><li>HOME</li></Link>
            <Link href={`/portfolio`}><li>PORTFOLIO</li></Link>
            <Link href={`/writing`}><li>Writing</li></Link>
            <Link href={`/contact`}><li>Contact</li></Link>
        </ul>
        {/* <------------------------------------ **** SECTION2 END **** ------------------------------------ */}
        {/* <------------------------------------ **** SECTION3 START **** ------------------------------------ */}
        {/** bottom part: additional info*/}
        <ul css={shown?navi_contact:nav_no_show}>
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
        
    </nav>
    {/* <------------------------------------ **** <TOP SECTION1> END **** ------------------------------------ */}
    {/* <------------------------------------ **** <TOP SECTION2> START **** ------------------------------------ */}
    {/** navi close render */}
    {shown||<div 
        css={naviStyle}
        onClick={()=>{
            setShown(true)
        }}
    >
        <div css={inner}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>}
    {/* <------------------------------------ **** <TOP SECTION3> END **** ------------------------------------ */}
    </>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default PhoneNavigation;