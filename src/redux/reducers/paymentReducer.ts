// slices/paymentSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createPaymentIntent } from '../actions/paymentAction';

interface PaymentState {
  loading: boolean;
  error: string | null;
  payment: any | null;
}

const initialState: PaymentState = {
  loading: false,
  error: null,
  payment: null,
};

const paymentSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentIntent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPaymentIntent.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.payment = action.payload;
        state.error = null;
      })
      .addCase(createPaymentIntent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to process payment';
      });
  },
});

export default paymentSlice.reducer;
