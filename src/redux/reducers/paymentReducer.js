// slices/paymentSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { createPaymentIntent } from '../actions/paymentAction';
var initialState = {
    loading: false,
    error: null,
    payment: null,
};
var paymentSlice = createSlice({
    name: 'payments',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(createPaymentIntent.pending, function (state) {
            state.loading = true;
        })
            .addCase(createPaymentIntent.fulfilled, function (state, action) {
            state.loading = false;
            state.payment = action.payload;
            state.error = null;
        })
            .addCase(createPaymentIntent.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to process payment';
        });
    },
});
export default paymentSlice.reducer;
