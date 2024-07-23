import { createSlice } from '@reduxjs/toolkit';
import { fetchSupportRequests, updateSupportRequest, deleteSupportRequest } from '../actions/customerSupportAction';
// Initial state
var initialState = {
    loading: false,
    supportRequests: [],
    error: null,
    success: false,
};
var customerSupportSlice = createSlice({
    name: 'support',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            // Fetch Support Requests
            .addCase(fetchSupportRequests.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchSupportRequests.fulfilled, function (state, action) {
            state.loading = false;
            state.supportRequests = action.payload;
            state.error = null;
        })
            .addCase(fetchSupportRequests.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch support requests';
        })
            // Update Support Request
            .addCase(updateSupportRequest.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(updateSupportRequest.fulfilled, function (state, action) {
            state.loading = false;
            state.supportRequests = state.supportRequests.map(function (request) {
                return request.id === action.payload.id ? action.payload : request;
            });
            state.error = null;
            state.success = true;
        })
            .addCase(updateSupportRequest.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to update support request';
        })
            // Delete Support Request
            .addCase(deleteSupportRequest.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(deleteSupportRequest.fulfilled, function (state, action) {
            state.loading = false;
            state.supportRequests = state.supportRequests.filter(function (request) { return request.id !== action.payload; });
            state.error = null;
            state.success = true;
        })
            .addCase(deleteSupportRequest.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to delete support request';
        });
    },
});
export default customerSupportSlice.reducer;
