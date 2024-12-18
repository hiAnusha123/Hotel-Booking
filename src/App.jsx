import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import HotelList from './components/HotelList';
import BookingForm from './components/BookingForm';
import './App.css'

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="app">
      <h1>Hotel Booking</h1>
      <HotelList />
      <BookingForm />
    </div>
  </QueryClientProvider>
);

export default App;
