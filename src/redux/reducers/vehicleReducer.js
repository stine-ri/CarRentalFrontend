import { createSlice } from '@reduxjs/toolkit';
import { fetchVehicles, bookVehicle, updateVehicle, deleteVehicle } from '../actions/VehicleAction';
// Initial state
var initialState = {
    loading: false,
    vehicles: [],
    error: null,
    success: false,
};
var vehicleSlice = createSlice({
    name: 'vehicles',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            // Fetch Vehicles
            .addCase(fetchVehicles.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchVehicles.fulfilled, function (state, action) {
            state.loading = false;
            state.vehicles = action.payload;
            state.error = null;
        })
            .addCase(fetchVehicles.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch vehicles';
        })
            // Book Vehicle
            .addCase(bookVehicle.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(bookVehicle.fulfilled, function (state) {
            state.loading = false;
            state.error = null;
            state.success = true; // Set success to true after booking successfully
        })
            .addCase(bookVehicle.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to book vehicle';
        })
            // Update Vehicle
            .addCase(updateVehicle.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(updateVehicle.fulfilled, function (state, action) {
            state.loading = false;
            state.vehicles = state.vehicles.map(function (vehicle) {
                return vehicle.id === action.payload.id ? action.payload : vehicle;
            });
            state.error = null;
            state.success = true; // Set success to true after updating successfully
        })
            .addCase(updateVehicle.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to update vehicle';
        })
            // Delete Vehicle
            .addCase(deleteVehicle.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(deleteVehicle.fulfilled, function (state, action) {
            state.loading = false;
            state.vehicles = state.vehicles.filter(function (vehicle) { return vehicle.id !== action.payload; });
            state.error = null;
            state.success = true; // Set success to true after deleting successfully
        })
            .addCase(deleteVehicle.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to delete vehicle';
        });
    },
});
export default vehicleSlice.reducer;
