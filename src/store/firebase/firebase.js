import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAbZ-Pu53O_-GXitrdChDwwR7e0yJnWNWI",
    authDomain: "webtutorials-f1d19.firebaseapp.com",
    projectId: "webtutorials-f1d19",
    storageBucket: "webtutorials-f1d19.appspot.com",
    messagingSenderId: "138726959589",
    appId: "1:138726959589:web:42449836104d8c7f55e70c",
    measurementId: "G-20Q4VRC6N0",
};
export const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);

