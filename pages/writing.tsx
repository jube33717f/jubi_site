


import WritingList from '@components/writingList'
import Page from '@layouts/page'



const Article = () =>{

    
   
    return (
        <Page>
     
        <div style={{position:'absolute',top:'0',marginLeft:'55px',height:'100vh',width:'100vw'}}>
            <h1 >WRITINGS </h1>
            <section>
                <WritingList />
                          
            </section>
        </div>
        </Page>
    )
}
export default Article;
