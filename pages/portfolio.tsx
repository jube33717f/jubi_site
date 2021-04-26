import Works from '@components/works'
import WorksPhone from '@components/works_phone'
import {portfolio_bg} from 'styles/portfolio'
import Page from '@layouts/page'
const Portfolio = () =>(
    <Page>    
        <div css={portfolio_bg}>
            <Works/>                       
            <WorksPhone/>
        </div >
    </Page>   
   
)
export default Portfolio