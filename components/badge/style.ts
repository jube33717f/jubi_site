

import {css} from '@emotion/react'

const badge=css`
  display: block;
  position: relative;
  width: 30vh;
  height: 30vh;
  margin:auto;
  cursor: pointer;
  background: url(/photo.jpg) no-repeat 100% 50%;
  background-size: 120%;
  border-radius: 50%;
  transition: var(--easing);
  box-shadow: 0px .1rem .1rem rgba(0,0,0,.25);
  &:hover {
    box-shadow: 0px .5rem .1rem rgba(0,0,0,.25);
    background-position: 0% 50%;
  }

` 
const text = css`
    display: block;
    position: absolute;   
    width: 15vh;
    height: 15vh;
    line-height: 15vh;
    left: 50%; 
    top: 50%;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    background: #FAD688;
    transform: rotate(-180deg) translate( calc(- var(--base-size) / 2)) rotate(180deg);
    box-shadow: 0px .5rem 1rem rgba(0,0,0,.5);
    transition: var(--easing);    
    &:hover{
        transform: rotate(-45deg) translate(0px) rotate(-315deg);
        background: rgba(var(--primary-color),.5);
        width: 30vh;
        letter-spacing: 1rem;
        line-height: 30vh;
        height: 30vh;
        margin-top:  -15vh;
        margin-left:   -15vh;
        transition:var(--easing),
        letter-spacing 1.5s ease-out;
    }
`

export {  badge,text}