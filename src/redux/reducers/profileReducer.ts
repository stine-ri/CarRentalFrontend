import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateUserDetails } from '../actions/ProfileAction';

interface UserState {
  id: string;
  email: string;
  fullname: string;
  contact_phone: string;
  address: string;
  error: string | null;
  success: boolean;
}

const initialState: UserState = {
  id: '',
  email: '',
  fullname: '',
  contact_phone: '',
  address: '',
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Update User Details
      .addCase(updateUserDetails.pending, (state) => {
        state.success = false;
        state.error = null;
      })
      .addCase(updateUserDetails.fulfilled, (state, action: PayloadAction<UserState>) => {
        const { email, fullname, contact_phone, address } = action.payload;
        state.email = email;
        state.fullname = fullname;
        state.contact_phone = contact_phone;
        state.address = address;
        state.success = true;
        state.error = null;
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
