import { ReactNode } from 'react'
import { Global } from '@emotion/react'
import { globalStyles } from '@shared/globals'
// import Header from '@components/header'
// import Navigation from '@components/navigation'
import SEO from '@components/seo'
// import Footer from '@components/footer'

import { postStyles, postContainer } from './style'

type PostProps = {
   title: string
  children: ReactNode
//   frontMatter: FrontMatter
}

type FrontMatter = {
    id: string
  
  }
const Post = ({  title,children }: PostProps) => (
  <>
    <SEO
      title={title}
      
      isBlogPost
    />
    <Global styles={globalStyles} />
    {/* <Header pageTitle={frontMatter.title} /> */}
   
    <main css={postStyles}>
      <article css={postContainer}>{children}</article>
    </main>
    {/* <Footer /> */}
  </>
)

export default Post