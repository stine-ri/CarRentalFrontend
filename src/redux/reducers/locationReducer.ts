// reducers/locationReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLocations, createLocation, updateLocation, deleteLocation } from '../actions/locationAction';

// Define the Location interface
interface Location {
  id?: number;
  name: string;
  address: string;
  contact_phone: string;
}

interface LocationState {
  loading: boolean;
  locations: Location[];
  error: string | null;
}

const initialState: LocationState = {
  loading: false,
  locations: [],
  error: null,
};

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLocations.fulfilled, (state, action: PayloadAction<Location[]>) => {
        state.loading = false;
        state.locations = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch locations';
      })
      .addCase(createLocation.fulfilled, (state, action: PayloadAction<Location>) => {
        state.locations.push(action.payload);
      })
      .addCase(updateLocation.fulfilled, (state, action: PayloadAction<Location>) => {
        const index = state.locations.findIndex(location => location.id === action.payload.id);
        if (index !== -1) {
          state.locations[index] = action.payload;
        }
      })
      .addCase(deleteLocation.fulfilled, (state, action: PayloadAction<number>) => {
        state.locations = state.locations.filter(location => location.id !== action.payload);
      });
  },
});

export default locationSlice.reducer;
