

import { searchPosts, getPostsByPage, getPostsTotalNumber , ArticleType} from '@shared/get-post'
import { Input } from '@material-ui/core';
import {contentBox, postIndexList, postIndexItem,postIndexTitleBar,pagination,category} from './style'
import Link from 'next/link'
import {useState,useEffect} from 'react'
import { Pagination } from 'antd';
import { emphasize, withStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Paper from '@material-ui/core/Paper';
const StyledBreadcrumb = withStyles((theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip) as typeof Chip;
const WritingList= (
//     { posts,amount
// }:InferGetStaticPropsType<typeof getStaticProps>
) => {
    const [tag,setTag] = useState('')
    const [search,setSearch] =useState('')
    const [total,setTotal] = useState(1)
    const [lists,setLists] = useState<ArticleType[]>()

    const initialSetting = async()=>{
        const amount = await getPostsTotalNumber ()
        setTotal(amount)
        const posts = await getPostsByPage(1)
        setLists(posts)
        
    }
    const refreshByTag= async ()=>{
        const amount = await getPostsTotalNumber (tag)
        setTotal(amount)
        const posts = await getPostsByPage(1,tag)
        setLists(posts)
    }
    const searchByTitle = async ()=>{
        const posts = await searchPosts(search.trim())
        setLists(posts)
    }
    useEffect(()=>{
        
        if(tag===''){
            initialSetting()
        }else{
            
            refreshByTag()
        }
        
    },[tag,total])
  
    
    return <div css={contentBox}> 
        <section>
            <ul css={postIndexList} >{lists&&lists.map(item=>(
                <li key={item.id} css={postIndexItem}>
                    <Link href={`/${item.id}`} >
                        <a onClick={()=>{console.log(`/${item.id}`)}}
                        >
                            <time>{item.date}</time>
                            <h2> {item.title} 
                                <div css={postIndexTitleBar} ></div>
                            </h2>
                        </a>
                    </Link>      
                </li> 
            ))}</ul>
            <div css={pagination}>              
                <Pagination simple 
                    defaultCurrent={1} 
                    defaultPageSize={5} 
                    total={total} 
                    onChange={async (page: number)=>{
                        if(tag==''){
                            const posts = await getPostsByPage(page)
                            setLists(posts)
                        }else{
                            const posts = await getPostsByPage(page,tag)
                            setLists(posts)
                        }
                        
                    }}
                />
            </div>
        </section>
        <section css={category}>
            <Paper 
                style={{'padding':'.3em'}}
                elevation={3}>
                    <section>
                            Tags
                        <Breadcrumbs aria-label="breadcrumb">
                        <StyledBreadcrumb
                            label="ALL"
                            onClick={()=>{
                                setTag('')
                                initialSetting()
                            }}
                        />
                        <StyledBreadcrumb 
                            label="Web" 
                            onClick={()=>{setTag('Web')}}
                        />
                        <StyledBreadcrumb
                            label="Reading notes"
                            onClick={()=>{setTag('Reading')}} 
                        />
                        <StyledBreadcrumb
                            label="Life style"
                            onClick={()=>{
                                setTag('lifestyle')
                            }}
                        />
                        </Breadcrumbs>
                    </section>
                    <section>
                        <Input
                        value={search}
                        onChange={(e)=>{
                            setSearch(e.target.value)
                        }}
                        onKeyDown={(e)=>{            
                            if(e.key==="Enter"){
                                searchByTitle()
                            }
                        }}
                        />
                    </section>
                
                
            </Paper>
        </section>
    </div>
}

  


  




export default WritingList;