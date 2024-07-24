import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Ticket {
  user_id: number;
  subject: string;
  description: string;
  status: string;
}

export const fetchTickets = createAsyncThunk<Ticket[], void, { state: RootState }>(
  'tickets/fetchTickets',
  async (_, { getState }) => {
    const state = getState();
    const response = await fetch('https://api-vehiclebackend.onrender.com/api/CustomerSupportTickets', {
      headers: {
        Authorization: `Bearer ${state.auth.token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch tickets');
    }
    return response.json();
  }
);

export const createTicket = createAsyncThunk<Ticket, { subject: string; description: string; status: string }, { state: RootState }>(
  'tickets/createTicket',
  async (ticketData, { getState }) => {
    const state = getState();
    const response = await fetch('https://api-vehiclebackend.onrender.com/api/CustomerSupportTickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.auth.token}`,
      },
      body: JSON.stringify(ticketData),
    });
    if (!response.ok) {
      throw new Error('Failed to create ticket');
    }
    return response.json();
  }
);
