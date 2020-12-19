import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBbTCzxCBooiUPzowvVs6PBKeMvm6rEmEQ",
  authDomain: "netflix-d7db2.firebaseapp.com",
  projectId: "netflix-d7db2",
  storageBucket: "netflix-d7db2.appspot.com",
  messagingSenderId: "627498696519",
  appId: "1:627498696519:web:319d8741a4b46ba9875662",
  measurementId: "G-NGN8RJV3KP"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
