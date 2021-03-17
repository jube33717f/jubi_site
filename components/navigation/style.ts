import { css } from "@emotion/react";


const naviStyle = css`
    /* position:fixed; */
    position:absolute;
    z-index:1000;
    width:1.5em;
    height:1.5em;
    border-radius:50%;
    text-align:center;
    left: 3.3333333333vw;
    top: 3.3333333333vh;
    border: 1px solid #ccc;
    background-color: #f9fafb;
    font-size:1em;
    
`

const inner = css`
    position: absolute;
    left: calc(50% - 2px);
    top: calc(50% - 11px);
    width: 4px;
    height: 22px;
    pointer-events: none;
    div{
        position: absolute;
        left: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #1a1a1a;
        
    }
    div:nth-of-type(1){
        top:0
    }
    div:nth-of-type(2){
        top:9px
    }
    div:nth-of-type(3){
        top:18px
    }
`
export {naviStyle,inner}