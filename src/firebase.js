import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAdmr4-QwxzPeUSceM9HVYtv-zd557TIzc",
    authDomain: "facebook-clone-e2dcb.firebaseapp.com",
    databaseURL: "https://facebook-clone-e2dcb.firebaseio.com",
    projectId: "facebook-clone-e2dcb",
    storageBucket: "facebook-clone-e2dcb.appspot.com",
    messagingSenderId: "1077182107319",
    appId: "1:1077182107319:web:57358fe0ac28ef1709c732",
    measurementId: "G-THZ85C1ZFM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;