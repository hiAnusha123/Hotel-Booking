import axiosInstance from './axiosInstance';

export const fetchHotels = async () => {
  const response = await axiosInstance.get('/hotels');
  return response.data;
};

export const createBooking = async (bookingData) => {
  const response = await axiosInstance.post('/bookings', bookingData);
  return response.data;
};
