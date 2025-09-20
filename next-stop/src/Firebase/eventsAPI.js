// eventsApi.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase"; // your Firebase setup

export const fetchEvents = async () => {
  try {
    const eventsCol = collection(db, "events");
    const snapshot = await getDocs(eventsCol);
    const eventsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return eventsList; // like API response
  } catch (error) {
    console.error("Error fetching events:", error);
    return []; // return empty array on error
  }
};
