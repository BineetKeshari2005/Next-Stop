import React from 'react';
import { useTravelContext } from '../../../TravelContext/TravelContext';
import { travelData } from '../../../data/travelData';
import CityCard from '../CityCard';

function Visited() {
  const { visitedCities } = useTravelContext();

  // Flatten all city objects
  const allPlaces = travelData.flatMap((category) => category.places);
  const visitedPlaces = allPlaces.filter((place) =>
    visitedCities.includes(place.city)
  );

  return (
    <div className= "bg-[#fffaf0]">
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#800000]">Visited Cities</h1>
      {visitedPlaces.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visitedPlaces.map((place) => (
            <CityCard key={place.id} place={place} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">You haven’t marked any cities as visited yet.</p>
      )}
    </div>
    </div>
  );
}

export default Visited;
