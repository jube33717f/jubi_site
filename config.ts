// import firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: "YOUR API KEY",
//   authDomain: "YOUR AUTH DOMAIN",
//   databaseURL: "YOUR DATABASE URL",
//   projectId: "YOUR PROJECT ID ",
//   storageBucket: "YOUR STORAGE BUCKET",
//   messagingSenderId: "YOUR SENDER ID ",
//   appId: "YOUR APP ID"
// };
// try {
//   firebase.initializeApp(firebaseConfig);
// } catch(err){
//   if (!/already exists/.test(err.message)) {
//     console.error('Firebase initialization error', err.stack)}
// }


const metadata = {
    siteName: 'Jubi-Chen: Frontend Developer',
    description: 'Jubi Chen\'s website',
    siteUrl: 'https://jubi-chen.com',
    rssEditor: 'rss@example.com',
    author: {
      name: 'Jubi Chen',
      linkedinUrl: 'https://www.linkedin.com/in/jubi-chen/',
      githubUrl: 'https://github.com/jubi33717f',
      email:'jubi33717f@gmail.com'
    },
    keywords: [
        'JavaScript',
        'Web development',
        'TypeScript',
        'Jamstack',
        'Performance',
    ],
  }
  
//   const POSTS_DIR = './posts'
// const fire = firebase;
export { metadata  }