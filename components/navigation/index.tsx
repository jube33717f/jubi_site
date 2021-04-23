
import {nav,nav_no_show,naviStyle,inner,close_row,cancel,navi_page,navi_contact} from './style'

import {useState} from 'react'
import Link from 'next/link'

const PhoneNavigation = () =>{
    const [shown, setShown] = useState(false)
    return <>
    <nav
    css={shown?nav:nav_no_show}
    >
        <div 
        css={shown?close_row:nav_no_show}
        onClick={()=>{
            setShown(false)
        }}>
            <div css={cancel}></div>
        </div>
        <ul css={shown?navi_page:nav_no_show}>
            <Link href={``}><li>HOME</li></Link>
            <Link href={`/portfolio`}><li>PORTFOLIO</li></Link>
            <Link href={`/writing`}><li>Writing</li></Link>
            <Link href={`/contact`}><li>Contact</li></Link>
        </ul>
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
        
        
    </nav>
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
    </div>}</>
}
export default PhoneNavigation;