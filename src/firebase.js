import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDht3z43FfEo8kzmUrMp9CFMv-uxMdMEA0',
  authDomain: 'slack-clone-8ca9f.firebaseapp.com',
  projectId: 'slack-clone-8ca9f',
  storageBucket: 'slack-clone-8ca9f.appspot.com',
  messagingSenderId: '927412191399',
  appId: '1:927412191399:web:bb949b6bde73d982155b82',
  measurementId: 'G-N9K25X25Y1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
