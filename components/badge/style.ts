

import {css} from '@emotion/react'
// @import url(https://fonts.googleapis.com/css?family=Raleway:300);




// body {

// }

const badge=css`
  margin-left:5%auto;
  margin-top:5%auto;
  display: block;
  position: relative;
  width: var(--base-size);
  height: var(--base-size);

  cursor: pointer;
  background: url(/photo.jpg) no-repeat 100% 50%;
  /* https://source.unsplash.com/random/1000x1000 */
  background-size: 120%;
  border-radius: 50%;
  transition: var(--easing);
  box-shadow: 0px .5rem 1rem rgba(0,0,0,.75);
  &:hover {
    box-shadow: 0px .5rem 2rem rgba(0,0,0,.75);
    background-position: 0% 50%;

  }
` 
const text = css`
    display: block;
    position: absolute;

    width: calc(var(--base-size) / 2);
    height: calc(var(--base-size) / 2);
    line-height: calc(var(--base-size) / 2);
    left: 50%; 
    top: 50%;
    /* margin-top:  - calc( var(--base-size) / 4);
    margin-left: - calc( var(--base-size) / 4); */
    font-size: 2rem;
	font-family: Raleway, sans-serif;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    background: var(--primary-color);
    transform: rotate(-180deg) translate( calc(- var(--base-size) / 2)) rotate(180deg);
    box-shadow: 0px .5rem 1rem rgba(0,0,0,.5);
    transition: var(--easing);    
        &:hover{
            transform: rotate(-45deg) translate(0px) rotate(-315deg);
            background: rgba(var(--primary-color),.5);
            width: var(--base-size);
            letter-spacing: 1rem;
            line-height: var(--base-size);
            height: var(--base-size);
            margin-top:  calc( var(--base-reverse-size) / 2);
            margin-left:   calc( var(--base-reverse-size) / 2);
            transition:var(--easing),
            letter-spacing 1.5s ease-out;
        
        }
`

export {  badge,text}