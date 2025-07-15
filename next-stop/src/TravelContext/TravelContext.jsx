import { createContext, useContext, useState, useEffect } from 'react';

const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [visitedCities, setVisitedCities] = useState([]);
  const [bucketListCities, setBucketListCities] = useState([]);
  const [bucketListEvents, setBucketListEvents] = useState([]);
  const [loaded, setLoaded] = useState(false); // ✅ NEW

  // Load from localStorage
  useEffect(() => {
    const storedVisited = JSON.parse(localStorage.getItem('visitedCities')) || [];
    const storedBucketCities = JSON.parse(localStorage.getItem('bucketListCities')) || [];
    const storedBucketEvents = JSON.parse(localStorage.getItem('bucketListEvents')) || [];

    setVisitedCities(storedVisited);
    setBucketListCities(storedBucketCities);
    setBucketListEvents(storedBucketEvents);
    setLoaded(true); // ✅ once loaded
  }, []);

  // Save to localStorage when loaded
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('visitedCities', JSON.stringify(visitedCities));
      localStorage.setItem('bucketListCities', JSON.stringify(bucketListCities));
      localStorage.setItem('bucketListEvents', JSON.stringify(bucketListEvents));
    }
  }, [visitedCities, bucketListCities, bucketListEvents, loaded]);

  const toggleVisitedCity = (city) => {
    setVisitedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
    setBucketListCities((prev) => prev.filter((c) => c !== city));
  };

  const toggleBucketListCity = (city) => {
    setBucketListCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
    setVisitedCities((prev) => prev.filter((c) => c !== city));
  };

  const toggleBucketListEvent = (eventId) => {
    setBucketListEvents((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

  return (
    <TravelContext.Provider
      value={{
        visitedCities,
        bucketListCities,
        bucketListEvents,
        toggleVisitedCity,
        toggleBucketListCity,
        toggleBucketListEvent,
        loaded, // ✅ expose loaded
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelContext = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravelContext must be used within a TravelProvider');
  }
  return context;
};
