import { NextPage } from 'next'
import firebase from 'services/firebase'
// import firebase from 'firebase/app'
import { useState, useEffect } from 'react';
import  'firebase/firestore'

interface Article{
    id: string,
    title: string,
    tag: string,
    article: string,
}
const WritingList= ( ) => {
    // console.log(article)
    const [articles,setArticles] = useState<Article[]>([])
    useEffect( () =>{
        
        let firebaseLoad = async()=>{
            const db = firebase.firestore();
            const snapshot = await db.collection('articles')
                                .limit(10)
                                .get()
            let result:Article[] = []
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
                result.push(Object.assign({
                    id:doc.id,
                    title:doc.data().title,
                    article:doc.data().article,
                    tag:doc.data().tag,
                }))
            });
            setArticles(result)
        }
        
        firebaseLoad();
        
        
    },[]);


    return(<div>{articles.map(item=>(
        <ul>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.article}</li>
            <li>{item.tag}</li>
        </ul>
    ))}</div>)
}
  






export default WritingList;