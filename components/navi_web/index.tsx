import  React,{useState} from  'react'
import {siteNavi,siteNavi_bg,siteNavi_pages,siteNavi_links , naviBtn,naviBtn_area,naviBtn_inner,naviBtn_dot,closeBtn,closeBtn_area,closeBtn_inner} from './style'
import Link from 'next/link'
const WebNavigation =()=>{
    const [open,setOpen] = useState(false)
    
    return (
        <>
            <nav css={siteNavi}>
                <div css={siteNavi_bg(open)}></div>
                <ul css={siteNavi_pages(open)}>
                    <li><Link href={`/`}>HOME</Link></li>
                    <li><Link href={`/portfolio`}>PORTFOLIO</Link></li>
                    <li><Link href={`/writing`}>Writing</Link></li>
                    <li><Link href={`/contact`}>Contact</Link></li>
                </ul>
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
                <div css={closeBtn(open)} onClick={()=>{setOpen(false)}}>
                <div css={closeBtn_area}></div>
                <div css={closeBtn_inner}></div>
            </div>
            </nav>
            
            <div css={naviBtn(open)} onClick={()=>{setOpen(true)}}>
                <div css={naviBtn_area}></div>
                <div css={naviBtn_inner}>
                    <div css={naviBtn_dot}></div>
                    <div css={naviBtn_dot}></div>
                    <div css={naviBtn_dot}></div>
                </div>
            </div>
        </>
    )
}
export default WebNavigation