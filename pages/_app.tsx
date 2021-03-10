import {AppProps} from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '@shared/globals'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }:AppProps) {
    
    
    return(
    <>  
        <Global styles={globalStyles} />
        <Component {...pageProps} />
        
           
        
   </>)
 
}

export default MyApp