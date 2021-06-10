import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCxbPqoFkLzbRxrCSffOTE_5f-R4iViuA8",
  authDomain: "kelly-s-nail-salon.firebaseapp.com",
  projectId: "kelly-s-nail-salon",
  storageBucket: "kelly-s-nail-salon.appspot.com",
  messagingSenderId: "251211025550",
  appId: "1:251211025550:web:305d1c34ce7e99c4254ddf"
}


firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider();

function login() {
  firebase.auth().signInWithPopup(googleProvider);
}

function logout() {
  firebase.auth().signOut();
}

export {
  login,
  logout,
}