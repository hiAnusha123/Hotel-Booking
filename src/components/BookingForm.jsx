import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createBooking } from '../api/hotelApi';
import useBookingStore from '../state/bookingStore';

const BookingForm = () => {
  const { selectedHotel, setSelectedHotel } = useBookingStore();
  const [guestName, setGuestName] = useState('');
  const mutation = useMutation(createBooking, {
    onSuccess: () => {
      alert('Booking successful!');
      setSelectedHotel(null);
    },
  });

  if (!selectedHotel) return null;

  const handleBooking = () => {
    const bookingData = {
      hotelId: selectedHotel.id,
      guestName,
    };
    mutation.mutate(bookingData);
  };

  return (
    <div className="booking-form">
      <h2>Booking for {selectedHotel.name}</h2>
      <input
        type="text"
        placeholder="Guest Name"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
      />
      <button onClick={handleBooking} disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Booking...' : 'Confirm Booking'}
      </button>
      <button onClick={() => setSelectedHotel(null)}>Cancel</button>
    </div>
  );
};

export default BookingForm;
