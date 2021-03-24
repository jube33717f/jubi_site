import {
    GetStaticPaths,
    GetStaticPropsContext,
    InferGetStaticPropsType,
  } from 'next'
//   import type { FormattedPost, PostFile } from '@shared/types'
  import { ArticleType, getPost,getPosts } from '@shared/get-post'
  import PostLayout from '@layouts/post'
//   import { POSTS_DIR } from 'config'
  
  

  

  export default function Post({
    post,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    const content = post.article
  
    return <PostLayout title={post.title}>{content}</PostLayout>
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts()
  
    const paths = posts.map(({ id}) => ({
      params: {
        id,
      },
    }))
  
    return {
      paths,
      fallback: false,
    }
  }
  
  export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
    const { id } = params as { id: string }
    console.log(id)
    const result = await getPost(id)
    console.log(result)
  
    return {
      props: {
        post:result,
      },
    }
  }