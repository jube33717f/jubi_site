
import {nav,nav_no_show,naviStyle,inner,close_row,cancel,navi_page,navi_contact} from './style'

import {useState} from 'react'


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
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PORTPOLIO</li>
            <li>WRITINGS</li>
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
                <span>Github</span>
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