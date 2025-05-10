// config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = { 
  apiKey : "AIzaSyCWENeI9hIpzYGjA-_8bxk06gls9QWrs_M" , 
  authDomain : "fir-auth-30c21.firebaseapp.com" , 
  projectId : "fir-auth-30c21" , 
  storageBucket : "fir-auth-30c21.firebasestorage.app" , 
  messagingSenderId : "638030754965" , 
  appId : "1:638030754965:web:fa0cfd3ed89a87aa97979c" , 
  measurementId : "G-15C71675XJ" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
