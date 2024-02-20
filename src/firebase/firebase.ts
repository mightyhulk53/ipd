import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
//   appId: process.env.NEXT_PUBLIC_APP_ID
// };

// const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

// const auth = getAuth(app);
// const firestore = getFirestore(app);

// export { auth, firestore, app };
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "AIzaSyCiQe15tFUUgX1wmd83cr4NtulTMtAg39w",
  authDomain: "leetclone-ipd.firebaseapp.com",
  projectId: "leetclone-ipd",
  storageBucket: "leetclone-ipd.appspot.com",
  messagingSenderId: "750387440086",
  appId: "1:750387440086:web:e1e2e05df601710c68dc77"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };