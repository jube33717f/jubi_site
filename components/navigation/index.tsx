
import {naviStyle,inner} from './style'

import {useState} from 'react'


const PhoneNavigation = () =>{
    const [shown, setShown] = useState(false)
    return <>
    {shown?<div></div>:
    <div css={naviStyle}>
        <div css={inner}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>}</>
}
export default PhoneNavigation;