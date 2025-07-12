import {initializeApp} from "firebase/app"

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBW8FVKnPpXc2gmzYWe1tYwDJgUcE_SMtI",
  authDomain: "next-stop-f40ba.firebaseapp.com",
  projectId: "next-stop-f40ba",
  storageBucket: "next-stop-f40ba.firebasestorage.app",
  messagingSenderId: "545213369114",
  appId: "1:545213369114:web:eb00475073d5196b33baa3"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)