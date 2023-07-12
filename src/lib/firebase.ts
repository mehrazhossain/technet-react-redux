import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

/*  
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrFAHoRo8RGFZEPPMp8AJV2bcMdWWq2M0',
  authDomain: 'technet-85062.firebaseapp.com',
  projectId: 'technet-85062',
  storageBucket: 'technet-85062.appspot.com',
  messagingSenderId: '217380423981',
  appId: '1:217380423981:web:4c804abce8e8b7db22aba4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/
