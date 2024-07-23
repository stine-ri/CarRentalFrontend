// userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers, updateUser, deleteUser } from '../actions/userAction';

export interface UserData {
  id: number;
  full_name: string;
  email: string;
  contact_phone: string;
  address: string;
  role: string;
  created_at: string;
  updated_at: string;
}

interface UserState {
  loading: boolean;
  users: UserData[];
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserData[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<UserData>) => {
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
