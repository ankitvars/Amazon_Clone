// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQMg6o9c--ZimfG5vlcJVXlEarXylMuEQ',
  authDomain: 'challenge-a059f.firebaseapp.com',
  projectId: 'challenge-a059f',
  storageBucket: 'challenge-a059f.appspot.com',
  messagingSenderId: '53993189660',
  appId: '1:53993189660:web:d8f1661802bbda88d94ad9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
