// src/TravelContext/TravelContext.jsx
// Replace the entire file with this — syncs bucket list and visited to MongoDB

import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const TravelContext = createContext();

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const TravelProvider = ({ children }) => {
  const { token, isLoggedIn } = useAuth();
  const [visitedCities, setVisitedCities] = useState([]);
  const [bucketListCities, setBucketListCities] = useState([]);
  const [bucketListEvents, setBucketListEvents] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const authHeaders = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

  // Load from MongoDB when user logs in
  useEffect(() => {
    if (!isLoggedIn || !token) {
      setVisitedCities([]);
      setBucketListCities([]);
      setBucketListEvents([]);
      setLoaded(true);
      return;
    }
    const fetchLists = async () => {
      try {
        const res = await fetch(`${API}/user/lists`, { headers: authHeaders });
        const data = await res.json();
        setVisitedCities(data.visitedCities || []);
        setBucketListCities(data.bucketListCities || []);
        setBucketListEvents(data.bucketListEvents || []);
      } catch (err) {
        console.error('Failed to load lists:', err);
      } finally {
        setLoaded(true);
      }
    };
    fetchLists();
  }, [isLoggedIn, token]);

  const toggleBucketListCity = async (city) => {
    try {
      const res = await fetch(`${API}/user/bucketlist/city`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ city }),
      });
      const data = await res.json();
      setBucketListCities(data.bucketListCities);
      setVisitedCities(data.visitedCities);
    } catch (err) {
      console.error('Failed to toggle bucket list city:', err);
    }
  };

  const toggleVisitedCity = async (city) => {
    try {
      const res = await fetch(`${API}/user/visited/city`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ city }),
      });
      const data = await res.json();
      setVisitedCities(data.visitedCities);
      setBucketListCities(data.bucketListCities);
    } catch (err) {
      console.error('Failed to toggle visited city:', err);
    }
  };

  const toggleBucketListEvent = async (eventId) => {
    try {
      const res = await fetch(`${API}/user/bucketlist/event`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ eventId }),
      });
      const data = await res.json();
      setBucketListEvents(data.bucketListEvents);
    } catch (err) {
      console.error('Failed to toggle bucket list event:', err);
    }
  };

  return (
    <TravelContext.Provider value={{
      visitedCities, bucketListCities, bucketListEvents,
      toggleVisitedCity, toggleBucketListCity, toggleBucketListEvent, loaded,
    }}>
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelContext = () => {
  const ctx = useContext(TravelContext);
  if (!ctx) throw new Error('useTravelContext must be used within TravelProvider');
  return ctx;
};
