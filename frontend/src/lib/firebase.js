// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCfgp_rMtW49lhMZTlwIeO7nCxdAGKQAOY',
  authDomain: 'shopzen-c4252.firebaseapp.com',
  projectId: 'shopzen-c4252',
  storageBucket: 'shopzen-c4252.appspot.com',
  messagingSenderId: '565264634478',
  appId: '1:565264634478:web:843809ccb0d7e1f12e4c7f',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
