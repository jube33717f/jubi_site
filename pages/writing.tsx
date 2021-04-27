/**
 * @file Writing Page
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import WritingList from '@components/writingList'
import Page from '@layouts/page'
import {writing_box} from 'styles/writing'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** WRITING PAGE START **** ------------------------------------ */
const Article = () =>{ 
    return (
        <Page>
        <div css={writing_box}>
            <h1 >WRITINGS </h1>
            <section>
                <WritingList />            
            </section>
        </div>
        </Page>
    )
}
/* <------------------------------------ **** WRITING PAGE END **** ------------------------------------ */
export default Article;
