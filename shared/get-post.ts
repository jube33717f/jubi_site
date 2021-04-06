import firebase from 'services/firebase'
import  'firebase/firestore'


export type ArticleType = {
    id: string,
    title: string,
    tag: string,
    article: string,
    date:string,

}

const getPosts= async()=> {

    const db = firebase.firestore();
    const snapshot = await db.collection('articles').get()
    
    let results:ArticleType[] = []
    snapshot.forEach((doc) => {
        
        results.push(Object.assign({
            id:doc.id,
            title:doc.data().title,
            article:doc.data().article,
            tag:doc.data().tag,
            date:doc.data().date
        }))

    });
    // const amount = results.length
    
    
    return results
}
const getPostsTotalNumber =async ()=>{

    const db = firebase.firestore();
    const snapshot = await db.collection('articles').get()

    const number = snapshot.size

    return number
}
const  getPostsByPage = async(page:number) =>{
    const db = firebase.firestore();
    const p = (page-1)*5
    const snapshot = await db.collection('articles')
                        .orderBy('date')
                        .startAfter(p)
                        .limit(5)
                        .get()
    
    let results:ArticleType[] = []
    snapshot.forEach((doc) => {
        
        results.push(Object.assign({
            id:doc.id,
            title:doc.data().title,
            article:doc.data().article,
            tag:doc.data().tag,
            date:doc.data().date
        }))
    });
    
    return results

}
const getPost = async(id:string)=>{
    const db = firebase.firestore();
    const snapshot = await db.collection('articles').where(firebase.firestore.FieldPath.documentId(),'==',id).get()
    let post:ArticleType ={
        id: '',
        title: '',
        tag: '',
        article: '',
        date:'',

    }
    snapshot.forEach((doc) =>{
        post = Object.assign({
            id:doc.id,
            title:doc.data().title,
            article:doc.data().article,
            tag:doc.data().tag,
            date:doc.data().date,
        })
        
    }

    )

    return post
    
}


export { getPosts ,getPost, getPostsByPage, getPostsTotalNumber}
