

import {css} from '@emotion/react'
import {sm1,sm2,sm3,sm4,md,lg1,lgm,lg2} from '../../shared/globals'
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
  ${md}{
    left:.5em;
    top:3em;
    width: 6em;
    height: 6em; 
    
  }
  ${lgm}{
    width: 9em;
    height: 9em;
    top:1.5em;
  }
  ${lg2}{
    width: var(--base-size);
    height: var(--base-size);
  }
  ${sm4}{
      margin-left:20%;
      padding:0;
      top:-1.5em;
      width:17em;
      height: 17em;
  }
  ${sm3}{
    width:14em;
    height: 14em;
  }
  ${sm1}{
      top:-4em;
      width:11em;
      height:11em;
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
    ${md}{
        width: 3em;
        height: 3em;
        line-height: 3em;
        font-size: 2rem;
        font-weight:10;
        transform: rotate(-180deg) translate( 0em ) rotate(180deg);
        &:hover{
            transform: rotate(-45deg) translate(0px) rotate(-315deg);
            background: rgba(var(--primary-color),.5);
            width: 6em;
            letter-spacing: 1rem;
            line-height: 6em;
            height: 6em;
            margin-top:  -3em;
            margin-left:   -3em;
            transition:var(--easing),
            letter-spacing 1.5s ease-out;
        
        } 
    }
    ${lgm}{
        width: 4.5em;
        height: 4.5em;
        line-height: 4.5em;
        font-size: 2rem;
        font-weight:200;
        transform: rotate(-180deg) translate( 0em ) rotate(180deg);
        &:hover{
            transform: rotate(-45deg) translate(0px) rotate(-315deg);
            background: rgba(var(--primary-color),.5);
            width: 9em;
            letter-spacing: 1rem;
            line-height: 9em;
            height: 9em;
            margin-top:  -4.5em;
            margin-left:   -4.5em;
            transition:var(--easing),
            letter-spacing 1.5s ease-out;
        
        }
   }
   ${lg2}{
        width: calc(var(--base-size) / 2);
        height: calc(var(--base-size) / 2);
        line-height: calc(var(--base-size) / 2);
        font-size: 2rem;
        font-weight:200;
        transform: rotate(-180deg) translate( 0em ) rotate(180deg);
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

   }
   ${sm4}{
       font-size:1.4em;
       line-height:6em;
       letter-spacing:.2em;
        
   }
   ${sm3}{
        width: 7em;
        height: 7em;
        line-height: 7em;
        font-size: 1rem;
        font-weight:200;
        transform: rotate(-180deg) translate( 0em ) rotate(180deg);
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
   }
   ${sm1}{
        width: 5.5em;
        height: 5.5em;
        line-height: 5.5em;
        font-size: .8rem;
        font-weight:200;
        transform: rotate(-180deg) translate( 0em ) rotate(180deg);
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
   }
`

export {  badge,text}