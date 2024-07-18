import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      return { user: data.user, token: data.token, role: data.role, message: data.msg };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);




// Login User
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: any, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        return { user: data.user, token: data.token, role: data.role };
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Logout User
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
});
