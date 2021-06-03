// Your web app's Firebase configuration
import apiKeyFirebase from './api-key.js';

var firebaseConfig = {
    apiKey: apiKeyFirebase,
    authDomain: "authentication-js-9a432.firebaseapp.com",
    projectId: "authentication-js-9a432",
    storageBucket: "authentication-js-9a432.appspot.com",
    messagingSenderId: "97579991833",
    appId: "1:97579991833:web:6f0fc994cd3c311a1a7b88"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
