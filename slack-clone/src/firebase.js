import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCuHiYdzhiEetKZOvD0OKgJlNw9XTIiKLE',
  authDomain: 'slack-clone-ab09d.firebaseapp.com',
  projectId: 'slack-clone-ab09d',
  storageBucket: 'slack-clone-ab09d.appspot.com',
  messagingSenderId: '603498603622',
  appId: '1:603498603622:web:12016d5bacdd3892ecf9a7',
};
const zbi = firebase.initializeApp(firebaseConfig);
const db = zbi.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db };
