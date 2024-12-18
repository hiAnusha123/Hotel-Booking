import { create } from 'zustand';

const useBookingStore = create((set) => ({
  selectedHotel: null,
  setSelectedHotel: (hotel) => set({ selectedHotel: hotel }),
}));

export default useBookingStore;

