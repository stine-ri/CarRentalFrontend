import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSupportRequests, updateSupportRequest, deleteSupportRequest } from '../actions/customerSupportAction';

// Define a type or interface for the support request data
interface SupportRequest {
  id: number;
  customerName: string;
  issue: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// Define the state interface
interface SupportState {
  loading: boolean;
  supportRequests: SupportRequest[];
  error: string | null;
  success: boolean;
}

// Initial state
const initialState: SupportState = {
  loading: false,
  supportRequests: [],
  error: null,
  success: false,
};

const customerSupportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Support Requests
      .addCase(fetchSupportRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSupportRequests.fulfilled, (state, action: PayloadAction<SupportRequest[]>) => {
        state.loading = false;
        state.supportRequests = action.payload;
        state.error = null;
      })
      .addCase(fetchSupportRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch support requests';
      })

      // Update Support Request
      .addCase(updateSupportRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSupportRequest.fulfilled, (state, action: PayloadAction<SupportRequest>) => {
        state.loading = false;
        state.supportRequests = state.supportRequests.map(request =>
          request.id === action.payload.id ? action.payload : request
        );
        state.error = null;
        state.success = true;
      })
      .addCase(updateSupportRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update support request';
      })

      // Delete Support Request
      .addCase(deleteSupportRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSupportRequest.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.supportRequests = state.supportRequests.filter(request => request.id !== action.payload);
        state.error = null;
        state.success = true;
      })
      .addCase(deleteSupportRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete support request';
      });
  },
});

export default customerSupportSlice.reducer;
