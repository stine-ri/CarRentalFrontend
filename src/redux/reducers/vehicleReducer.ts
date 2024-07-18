import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchVehicles, bookVehicle, updateVehicle, deleteVehicle } from '../actions/VehicleAction';

// Define a type or interface for the vehicle data
interface Vehicle {
  id: number;
  manufacturer: string;
  model: string;
  year: number;
  fuel_type: string | null;
  engine_capacity: number | null;
  transmission: string;
  seating_capacity: number | null;
  color: string;
  features: string;
}

// Define the state interface
interface VehicleState {
  loading: boolean;
  vehicles: Vehicle[];
  error: string | null;
  success: boolean;
}

// Initial state
const initialState: VehicleState = {
  loading: false,
  vehicles: [],
  error: null,
  success: false,
};

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Vehicles
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action: PayloadAction<Vehicle[]>) => {
        state.loading = false;
        state.vehicles = action.payload;
        state.error = null;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch vehicles';
      })

      // Book Vehicle
      .addCase(bookVehicle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookVehicle.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true; // Set success to true after booking successfully
      })
      .addCase(bookVehicle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to book vehicle';
      })

      // Update Vehicle
      .addCase(updateVehicle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateVehicle.fulfilled, (state, action: PayloadAction<Vehicle>) => {
        state.loading = false;
        state.vehicles = state.vehicles.map(vehicle =>
          vehicle.id === action.payload.id ? action.payload : vehicle
        );
        state.error = null;
        state.success = true; // Set success to true after updating successfully
      })
      .addCase(updateVehicle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update vehicle';
      })

      // Delete Vehicle
      .addCase(deleteVehicle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVehicle.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.vehicles = state.vehicles.filter(vehicle => vehicle.id !== action.payload);
        state.error = null;
        state.success = true; // Set success to true after deleting successfully
      })
      .addCase(deleteVehicle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete vehicle';
      });
  },
});

export default vehicleSlice.reducer;
