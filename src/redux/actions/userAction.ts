import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const token = localStorage.getItem('token');
  console.log('Token:', token);
  if (!token) {
    throw new Error('Token not found');
  }

  const response = await fetch('http://localhost:3000/api/users', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    console.error('Fetch Users Error:', response.status, response.statusText); 
    throw new Error('Network response was not ok');
  }

  return response.json();
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId: number) => {
  const token = localStorage.getItem('token');
  console.log('Token:', token);
  if (!token) {
    throw new Error('Token not found');
  }

  const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    console.error('Delete User Error:', response.status, response.statusText); 
    throw new Error('Network response was not ok');
  }

  return response.json();
});

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ userId, userData }: { userId: number; userData: any }) => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    if (!token) {
      throw new Error('Token not found');
    }

    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      console.error('Update User Error:', response.status, response.statusText); 
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Response Data:', data);
    return data;
  }
);

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};
