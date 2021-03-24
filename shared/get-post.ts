import firebase from 'services/firebase'
import  'firebase/firestore'



export type ArticleType = {
    id: string,
    title: string,
    tag: string,
    article: string,

}

const getPosts= async()=> {

    const db = firebase.firestore();
    const snapshot = await db.collection('articles')
                        .limit(10)
                        .get()
    let results:ArticleType[] = []
    snapshot.forEach((doc) => {
        
        results.push(Object.assign({
            id:doc.id,
            title:doc.data().title,
            article:doc.data().article,
            tag:doc.data().tag,
           
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

    }
    snapshot.forEach((doc) =>{
        post = Object.assign({
            id:doc.id,
            title:doc.data().title,
            article:doc.data().article,
            tag:doc.data().tag,
           
        })
        
    }

    )

    return post
    
}
export { getPosts ,getPost}
