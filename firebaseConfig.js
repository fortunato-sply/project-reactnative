// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfsPgUGqCtsb2YXDONzINfcK1zbUj8ta4",
  authDomain: "my-reactnative-project-63fd1.firebaseapp.com",
  projectId: "my-reactnative-project-63fd1",
  storageBucket: "my-reactnative-project-63fd1.appspot.com",
  messagingSenderId: "706494482184",
  appId: "1:706494482184:web:494fb76f79449bc95f0ebd",
  measurementId: "G-CTFV9LH10Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;