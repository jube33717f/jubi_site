/**
 * @file SEO Environment Setting 
 * @date 2021-04-01
 * @author Jubi
 * @lastModify Jubi 2021-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Head from 'next/head'
import { metadata as siteMeta } from 'config'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE/TYPE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export type SEOProps = {
  title?: string
  description?: string
  isBlogPost?: boolean
  keywords?: string[]
}
/* <------------------------------------ **** INTERFACE/TYPE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SEO = ({ title, description, keywords= siteMeta.keywords , isBlogPost = false }: SEOProps) => {
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const pageTitle = title
    ? `${title} :: ${siteMeta.siteName}`
    : siteMeta.siteName
  const pageDescription = description ? description : siteMeta.description 
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="info:card" content="app" />
      <meta property="info:site" content={siteMeta.author.githubUrl} />
      <meta property="info:title" content={pageTitle} />
      <meta property="info:description" content={pageDescription} />
      {keywords&&<meta name={`keywords`} content={keywords.join(`, `)} />}
    </Head>
  )
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

export default SEO