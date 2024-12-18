import React from 'react';
import { useQuery } from 'react-query';
import { fetchHotels } from '../api/hotelApi';
import HotelCard from './HotelCard';

const HotelList = () => {
  const { data: hotels, isLoading, error } = useQuery('hotels', fetchHotels);

  if (isLoading) return <p>Loading hotels...</p>;
  if (error) return <p>Error fetching hotels: {error.message}</p>;

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
