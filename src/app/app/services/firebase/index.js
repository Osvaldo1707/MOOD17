// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.MYAPP_API_KEY,
  authDomain: process.env.MYAPP_AUTH_DOMAIN,
  projectId: process.env.MYAPP_PROJECT_ID,
  storageBucket: process.env.MYAPP_STORAGE_BUCKET0,
  messagingSenderId: process.env.MYAPP_MESSAGING_SENDER_ID: ,
  appId: process.env.MYAPP_APP_ID,
  measurementId: process.env.MYAPP_MEASUREMENT_ID
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

