import { ReactNode } from 'react'
import Cursor from '@components/cursor'
import Head from 'next/head'
import SEO, { SEOProps } from '@components/seo'
// import Footer from '@components/footer'
import { wrapper } from './style'

type PageProps = {
  meta?: SEOProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => (
  <>
    
        <Head>
            <title>
                <SEO 
                    title="Jubi Chen" 
                />
            </title>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Manrope&display=swap" rel="stylesheet"/>
            {/* <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script> */}
        </Head>
    {/* <SEO {...meta} /> */}
    <Cursor/>
    <main css={wrapper}>
    
      {/* <Header /> */}
      {/* <Navigation /> */}
    {children}
      {/* <Footer /> */}
    </main>
  </>
)

export default Page