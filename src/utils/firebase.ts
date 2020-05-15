// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import { langCode } from '../constants';

let firebaseConfig;

// add PRD & STG env
if (process.env.REACT_APP_ENV === 'prd') {
  firebaseConfig = {};
} else if (process.env.REACT_APP_ENV === 'stg') {
  firebaseConfig = {};
} else {
  // replace these values to your firebase project's one
  firebaseConfig = {
    apiKey: 'AIzaSyBbg2NNhLmY8YRSFmjibDoDM7O1EgheNEI',
    authDomain: 'contact-tracing-26716.firebaseapp.com',
    databaseURL: 'https://contact-tracing-26716.firebaseio.com',
    projectId: 'contact-tracing-26716',
    storageBucket: 'contact-tracing-26716.appspot.com',
    messagingSenderId: '776506470916',
    appId: '1:776506470916:web:247cbad6ea82c2010bfb51',
    measurementId: 'G-H7GJ1Y3F0D',
  };
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = firebase.auth();

auth.languageCode = langCode;

const db = firebase.firestore();

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: `${process.env.REACT_APP_HOST || 'http://localhost:3000/'}login`,
  // This must be true.
  handleCodeInApp: true,
};

export { firebase, auth, db, actionCodeSettings };
