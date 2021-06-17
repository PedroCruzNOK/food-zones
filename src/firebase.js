import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDcqQnPyd4jZvMjk5WDPfgetVmlHxQK05A",
    authDomain: "misus-371d0.firebaseapp.com",
    projectId: "misus-371d0",
    storageBucket: "misus-371d0.appspot.com",
    messagingSenderId: "191304832536",
    appId: "1:191304832536:web:9d337d09e71b0fe0e7556d",
    measurementId: "G-YVETBZT6RD"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

firebase.getCurrentUser = () => {
    return new Promise ((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user =>{
            resolve(user)
        }, reject)
    })
}

export {auth, provider, firebase}
