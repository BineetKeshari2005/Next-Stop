import React from 'react';
import { useTravelContext } from '../../../TravelContext/TravelContext';
import { travelData } from '../ExploreData/travelData';
import { Events } from '../../../data/Events';
import CityCard from '../CityCard';
import EventCard from './EventCard';

function BucketListPage() {
  const { bucketListCities, bucketListEvents } = useTravelContext();

  const allPlaces = travelData.flatMap((category) => category.places);
  const bucketCities = allPlaces.filter((place) =>
    bucketListCities.includes(place.city)
  );
  const bucketEvents = Events.filter((event) =>
    bucketListEvents.includes(event.id)
  );

  return (
    <div className= "bg-[#fffaf0]">
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#800000]">My Bucket List</h1>

      <h2 className="text-2xl font-semibold mb-4 text-[#a0522d]">Cities</h2>
      {bucketCities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {bucketCities.map((place) => (
            <CityCard key={place.id} place={place} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mb-8">No cities in your bucket list yet.</p>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-[#a0522d]">Events</h2>
      {bucketEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bucketEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events in your bucket list yet.</p>
      )}
    </div>
    </div>
  );
}

export default BucketListPage;
