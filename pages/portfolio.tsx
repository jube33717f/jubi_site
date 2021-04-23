// import { css } from '@emotion/react'
import CardContainer from '@layouts/cardContainer'
import Works from '@components/works'
import WorksPhone from '@components/works_phone'
import {portfolio_bg,title} from 'styles/portfolio'

import GitHubIcon from '@material-ui/icons/GitHub';

import Page from '@layouts/page'
import PhoneNavigation from '@components/navigation'
import WebNavigation from '@components/navi_web'
const Portfolio = () =>(
    <Page>
        <PhoneNavigation />
        <WebNavigation/>
        <div css={portfolio_bg}>
            {/* <h1 css={title}>PORTFOLIO </h1>         */}
                <Works/>        
                
            <WorksPhone/>
        </div >
    </Page>   
   
)
export default Portfolio