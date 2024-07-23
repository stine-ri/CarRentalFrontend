import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateUserDetails = createAsyncThunk(
  'user/updateUserDetails',
  async ({ userId, userData }: { userId: number; userData: any }, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData.message || 'Failed to update user details');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message || 'Failed to update user details');
    }
  }
);
