import firebase from 'firebase';




    // try{
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MS_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        token:process.env.FIREBASE_TOKEN,
    };
    export {firebaseConfig}
    // if(!firebase.apps.length){
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
            
        // }

        
    // }catch(error){
    //     if(/already exists/.test(error.message)){
    //         console.log(`Firebase  donesn't initialize successfully`)
    //     }
    // }

export default firebase