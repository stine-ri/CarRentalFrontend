// fleetReducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFleetData, updateFleetData, deleteFleetData } from '../actions/fleetManagementAction';

// Define the FleetData type
type FleetData = {
  fleet_id: number;
  vehicle_id: number;
  acquisition_date: string;
  depreciation_rate: number;
  current_value: number;
  maintenance_cost: number;
  status: string;
};

// Define the state interface
interface FleetState {
  loading: boolean;
  fleetData: FleetData[];
  error: string | null;
  success: boolean;
}

// Initial state
const initialState: FleetState = {
  loading: false,
  fleetData: [],
  error: null,
  success: false,
};

const fleetSlice = createSlice({
  name: 'fleet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Fleet Data
      .addCase(fetchFleetData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFleetData.fulfilled, (state, action: PayloadAction<FleetData[]>) => {
        state.loading = false;
        state.fleetData = action.payload;
        state.error = null;
      })
      .addCase(fetchFleetData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch fleet data';
      })

      // Update Fleet Data
      .addCase(updateFleetData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFleetData.fulfilled, (state, action: PayloadAction<FleetData>) => {
        state.loading = false;
        state.fleetData = state.fleetData.map(fleet =>
          fleet.fleet_id === action.payload.fleet_id ? action.payload : fleet
        );
        state.error = null;
        state.success = true;
      })
      .addCase(updateFleetData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update fleet data';
        state.success = false;
      })

      // Delete Fleet Data
      .addCase(deleteFleetData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFleetData.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.fleetData = state.fleetData.filter(fleet => fleet.fleet_id !== action.payload);
        state.error = null;
        state.success = true;
      })
      .addCase(deleteFleetData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete fleet data';
        state.success = false;
      });
  },
});

export default fleetSlice.reducer;
