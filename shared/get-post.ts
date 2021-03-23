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
        console.log(doc.id, '=>', doc.data());
        results.push(Object.assign({
            id:doc.id,
            title:doc.data().title,
            article:doc.data().article,
            tag:doc.data().tag,
           
        }))
    });
    
    return results
}
export { getPosts }
