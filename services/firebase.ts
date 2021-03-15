import firebase from 'firebase';
// import  'firebase/firestore'





    // try{
    const firebaseConfig = {
        apiKey: "AIzaSyAalND24-ay2ymFKJxJTM3YEAz5fvWgPf8",
        authDomain: "jubi-web.firebaseapp.com",
        databaseURL: "https://jubi-web-default-rtdb.firebaseio.com",
        projectId: "jubi-web",
        storageBucket: "jubi-web.appspot.com",
        messagingSenderId: "199299134683",
        appId: "1:199299134683:web:1bb2963561e4895bbb88fe",
        measurementId: "G-JFHE0JW41L"
    };
    // if(!firebase.apps.length){
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
            
        // }

        
    // }catch(error){
    //     if(/already exists/.test(error.message)){
    //         console.log(`Firebase  donesn't initialize successfully`)
    //     }
    // }

export default firebase