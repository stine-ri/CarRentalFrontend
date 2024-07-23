// actions/paymentAction.ts
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createPaymentIntent = createAsyncThunk(
  'payments/createPaymentIntent',
  async (paymentDetails: {
    amount: number;
    currency: string;
    paymentMethod: string;
    returnUrl: string;
  }) => {
    try {
      const response = await fetch('https://api-vehiclebackend.onrender.com/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error((error as Error).message || 'Failed to create payment intent');
    }
  }
);
