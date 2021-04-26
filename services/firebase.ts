/**
 * @file Firebase Setting
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import firebase from 'firebase';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FIREBASE DATA IMPORT START  **** ------------------------------------ */
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
/* <------------------------------------ **** FIREBASE DATA IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FIREBASE INITIAL START **** ------------------------------------ */
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
/* <------------------------------------ **** FIREBASE INITIAL END  **** ------------------------------------ */         


export default firebase