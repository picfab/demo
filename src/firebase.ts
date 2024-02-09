// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue } from "firebase/database"


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.GATSBY_FB_apiKey,
  authDomain: process.env.GATSBY_FB_authDomain,
  projectId: process.env.GATSBY_FB_projectId,
  storageBucket: process.env.GATSBY_FB_storageBucket,
  messagingSenderId: process.env.GATSBY_FB_messagingSenderId,
  appId: process.env.GATSBY_FB_appId,
  measurementId: process.env.GATSBY_FB_measurementId,
  databaseURL: process.env.GATSBY_FB_databaseURL,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
