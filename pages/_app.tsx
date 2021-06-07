/**
 * @file initial file
 * @date 2021-04-01
 * @author Jubi
 * @lastModify Jubi 2021-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import {AppProps} from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '@shared/globals'
import 'antd/dist/antd.css';
global.XMLHttpRequest = require('xhr2');
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
function MyApp({ Component, pageProps }:AppProps) {
     
    return(
    <>  
        <Global styles={globalStyles} />
        <Component {...pageProps} />      
   </>)
 
}

export default MyApp
