import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLocations, createLocation, updateLocation, deleteLocation } from '../actions/locationAction';

// Define the Location interface with location_id as required
interface Location {
  location_id: number; // Renamed and required
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
        state.error = action.error?.message || 'Failed to fetch locations';
      })
      .addCase(createLocation.fulfilled, (state, action: PayloadAction<Location>) => {
        state.locations.push(action.payload);
      })
      .addCase(updateLocation.fulfilled, (state, action: PayloadAction<Location>) => {
        state.locations = state.locations.map((loc) =>
          loc.location_id === action.payload.location_id ? action.payload : loc
        );
      })
      .addCase(deleteLocation.fulfilled, (state, action: PayloadAction<number>) => {
        state.locations = state.locations.filter((loc) => loc.location_id !== action.payload);
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action: { error: { message: string } }) => {
          state.error = action.error.message || 'An error occurred';
        }
      );
  },
});

export default locationSlice.reducer;
