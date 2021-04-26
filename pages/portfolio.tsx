/**
 * @file Portfolio Page
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import Works from '@components/works'
import WorksPhone from '@components/works_phone'
import {portfolio_bg} from 'styles/portfolio'
import Page from '@layouts/page'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
 /* <------------------------------------ **** PORTFOLIO PAGE START **** ------------------------------------ */
const Portfolio = () =>(
    <Page>    
        <div css={portfolio_bg}>
            <Works/>                       
            <WorksPhone/>
        </div >
    </Page>   
   
)
/* <------------------------------------ **** PORTFOLIO PAGE END **** ------------------------------------ */
export default Portfolio