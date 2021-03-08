import Head from 'next/head'
import { metadata as siteMeta } from 'config'

export type SEOProps = {
  title?: string
  description?: string
  isBlogPost?: boolean
  keywords?: string[]
}

const SEO = ({ title, description, keywords= siteMeta.keywords , isBlogPost = false }: SEOProps) => {
  const pageTitle = title
    ? `${title} :: ${siteMeta.siteName}`
    : siteMeta.siteName
  const pageDescription = description ? description : siteMeta.description

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

export default SEO