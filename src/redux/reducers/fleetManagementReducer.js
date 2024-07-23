// fleetReducer.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchFleetData, updateFleetData, deleteFleetData } from '../actions/fleetManagementAction';
// Initial state
var initialState = {
    loading: false,
    fleetData: [],
    error: null,
    success: false,
};
var fleetSlice = createSlice({
    name: 'fleet',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            // Fetch Fleet Data
            .addCase(fetchFleetData.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchFleetData.fulfilled, function (state, action) {
            state.loading = false;
            state.fleetData = action.payload;
            state.error = null;
        })
            .addCase(fetchFleetData.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch fleet data';
        })
            // Update Fleet Data
            .addCase(updateFleetData.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(updateFleetData.fulfilled, function (state, action) {
            state.loading = false;
            state.fleetData = state.fleetData.map(function (fleet) {
                return fleet.fleet_id === action.payload.fleet_id ? action.payload : fleet;
            });
            state.error = null;
            state.success = true;
        })
            .addCase(updateFleetData.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to update fleet data';
            state.success = false;
        })
            // Delete Fleet Data
            .addCase(deleteFleetData.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(deleteFleetData.fulfilled, function (state, action) {
            state.loading = false;
            state.fleetData = state.fleetData.filter(function (fleet) { return fleet.fleet_id !== action.payload; });
            state.error = null;
            state.success = true;
        })
            .addCase(deleteFleetData.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to delete fleet data';
            state.success = false;
        });
    },
});
export default fleetSlice.reducer;
