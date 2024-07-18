import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers, deleteUser, updateUser } from '../actions/userAction';

// Define the state interface
interface UserState {
  users: any[]; 
  loading: boolean; 
  error: string | null;
  success:undefined;
}

// Initial state
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  success:undefined
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users'; 
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update users'; // Provide a default error message
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<{ userId: number }>) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload.userId);
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete user'; // Provide a default error message
      });
  },
});

export default userSlice.reducer;
