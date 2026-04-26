import {initializeApp} from "firebase/app"
import {getFirestore,collection, setDoc,doc} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {Events} from "../data/Events.js"
import React, { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "mock-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "mock.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mock-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "mock.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app);

// async function uploadEvents(){
//   try {
//     for (let event of Events) {
//       await setDoc(doc(db, "events", event.id.toString()), event);
//     }
//     console.log(" Events uploaded successfully!");
//   } catch (e) {
//     console.error(" Error uploading events: ", e);
//   }
// }
// uploadEvents();