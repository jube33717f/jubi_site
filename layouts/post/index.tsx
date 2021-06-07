/**
 * @file Article Wrapper
 * @date 2021-04-01
 * @author Jubi
 * @lastModify Jubi 2021-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { ReactNode } from 'react'

import SEO from '@components/seo'
import Cursor from '@components/cursor'
import { postStyles, postContainer } from './style'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE/Type START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
type PostProps = {
  title: string
  children: ReactNode
}
/* <------------------------------------ **** INTERFACE/TYPE END **** ------------------------------------ */


/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PostLayout = ({  title,children }: PostProps) => (
  <>
  {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
  {/** HEAD part / SEO setting */}
    <SEO
      title={title}    
      isBlogPost
    />
   
   {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
    {/* <------------------------------------ **** SECTION2 START **** ------------------------------------ */}
    {/** cursor */}
    <Cursor/>
    {/* <------------------------------------ **** SECTION2 END **** ------------------------------------ */}
    {/* <------------------------------------ **** SECTION3 START **** ------------------------------------ */}
    {/** main part */}
    <main css={postStyles}>
      <section>
        <article css={postContainer}>{children}</article>
      </section>
    </main>
  </>
)
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default PostLayout
