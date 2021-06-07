/**
 * @file Writing List component - for phone view
 * @date 2021-04-01
 * @author Jubi
 * @lastModify Jubi 2021-06-06
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { searchPosts, getPostsByPage, getPostsTotalNumber , ArticleType} from '@shared/get-post'

import Link from 'next/link'
import {useState,useEffect} from 'react'

import { Pagination } from 'antd';
import { emphasize, withStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Paper from '@material-ui/core/Paper';
import { Input } from '@material-ui/core';

import {contentBox, postIndexList, postIndexItem,postIndexTitleBar,pagination,category} from './style'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */


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
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const WritingList= () => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    const [tag,setTag] = useState('')
    const [search,setSearch] =useState('')
    const [total,setTotal] = useState(1)
    const [lists,setLists] = useState<ArticleType[]>()
    useEffect(()=>{
        
        if(tag===''){
            initialSetting()
        }else{
            
            refreshByTag()
        }
        
    },[tag,total])
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
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
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <div css={contentBox}> 
        {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
        {/** writing list */}
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
        {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        {/* <------------------------------------ **** SECTION2 START **** ------------------------------------ */}
        {/** search part */}
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
        {/* <------------------------------------ **** SECTION2 END **** ------------------------------------ */}
    </div>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default WritingList;