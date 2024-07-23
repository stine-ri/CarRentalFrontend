import { createAsyncThunk } from '@reduxjs/toolkit';

interface UserData {
  id: number;
  full_name: string;
  email: string;
  contact_phone: string;
  address: string;
  role: string;
  created_at: string;
  updated_at: string;
}

// Fetch Users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('http://localhost:3000/api/users');
  if (!response.ok) {
    const jsonResponse = await response.json();
    throw new Error(jsonResponse.message || 'Network response was not ok');
  }
  const jsonResponse: UserData[] = await response.json();
  return jsonResponse;
});

// Update User
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ userId, userData }: { userId: number; userData: Partial<UserData> }) => {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to update user');
    }

    return await response.json();
  }
);

// Delete User
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId: number) => {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to delete user');
    }

    return userId;
  }
);
