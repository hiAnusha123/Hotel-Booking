import React from 'react';
import useBookingStore from '../state/bookingStore';

const HotelCard = ({ hotel }) => {
  const { setSelectedHotel } = useBookingStore();

  return (
    <div className="hotel-card">
      <img src={hotel.imageUrl} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <p>Location: {hotel.location}</p>
      <p>Rating: {hotel.rating}</p>
      <p>Price per night: ${hotel.pricePerNight}</p>
      <p>Available Rooms: {hotel.availableRooms}</p>
      <button onClick={() => setSelectedHotel(hotel)}>Book Now</button>
    </div>
  );
};

export default HotelCard;
