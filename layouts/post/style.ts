import { css } from '@emotion/react'
import {sm1,sm2,sm3,sm4} from '../../shared/globals'
const postStyles = css`
  width: 100%;
  margin: 0 auto;
  max-width: var(--reading-width);
  line-height: 1.5;
  cursor:pointer;
  section{
    border-radius: 4px;
    margin: 10px;
    background-color:#fff;
    padding: 32px;
  }
  @media (max-width: 800px) {
    padding: 0 2.5ch;
  }
`

const postContainer = css`
  margin-top: 0;
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-accent);
    margin-top: 2.5ch;
    display:block;
    
  }
  h2{
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
  }

  hr {
    margin: 5ch 0;
  }
  img{
      max-width:500px;
      ${sm3}{
        max-width:300px;
        margin-left:0;
        padding-left:0;
        ${sm2}{
            max-width:250px;
        }
      }
  }

  ul,
  ol {
    list-style: square;
    color: var(--color-accent);

    > li + li {
      margin-top: 1ch;
    }
  }

  a {
    color: var(--color-text);
    text-decoration: underline dotted 2px var(--color-accent);
    transition: all 250ms ease-in-out;


    :hover,
    :focus {
      color: var(--color-acent);
      text-decoration: none;
    }
  }
  p,h5{
    font-family: var(--font-hard);
  }
  h5{
      font-size:19px;
  }

`
const avatar = css`

    img{
        display: block;
        border-radius: 50%;
        border: 1px solid #eee;
        min-width: 50px;
        min-height: 50px;
        width: 50px;
        height: 50px;
    }
`
const info = css`
    margin-left: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    span{
        font-size: 16px;
        font-weight: 500;
        margin-right: 8px;
    }
    time{
        color: #969696;
    }
`

const infoBox = css`
    display: flex;
    align-items: center;
`
export { postStyles, postContainer, avatar, info, infoBox }