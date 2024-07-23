import { createAsyncThunk } from '@reduxjs/toolkit';

// Fetch Support Requests
export const fetchSupportRequests = createAsyncThunk('support/fetchSupportRequests', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }

    const response = await fetch('http://localhost:3000/api/CustomerSupportTickets', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const jsonResponse = await response.json();
      console.error('Fetch Support Requests Error:', jsonResponse.message);
      throw new Error(jsonResponse.message || 'Network response was not ok');
    }

    const jsonResponse = await response.json();
    console.log('Parsed JSON Response:', jsonResponse); // Log parsed JSON response
    return jsonResponse; // Return the entire JSON response
  } catch (error) {
    console.error('Fetch Support Requests Error:', (error as Error).message);
    throw new Error('Failed to fetch support requests');
  }
});

// Update Support Request
export const updateSupportRequest = createAsyncThunk(
  'support/updateSupportRequest',
  async ({ requestId, supportData }: { requestId: number; supportData: any }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/CustomerSupportTickets/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(supportData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update support request');
      }
      return data.supportRequest; // Assuming response includes updated support request data
    } catch (error) {
      throw new Error((error as Error).message || 'Failed to update support request');
    }
  }
);

// Delete Support Request
export const deleteSupportRequest = createAsyncThunk(
  'support/deleteSupportRequest',
  async (requestId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/CustomerSupportTickets/${requestId}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete support request');
      }
      return requestId;
    } catch (error) {
      throw new Error((error as Error).message || 'Failed to delete support request');
    }
  }
);
