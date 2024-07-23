import { createSlice } from '@reduxjs/toolkit';
import { updateUserDetails } from '../actions/ProfileAction';
var initialState = {
    id: '',
    email: '',
    fullname: '',
    contact_phone: '',
    address: '',
    error: null,
    success: false,
};
var userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            // Update User Details
            .addCase(updateUserDetails.pending, function (state) {
            state.success = false;
            state.error = null;
        })
            .addCase(updateUserDetails.fulfilled, function (state, action) {
            var _a = action.payload, email = _a.email, fullname = _a.fullname, contact_phone = _a.contact_phone, address = _a.address;
            state.email = email;
            state.fullname = fullname;
            state.contact_phone = contact_phone;
            state.address = address;
            state.success = true;
            state.error = null;
        })
            .addCase(updateUserDetails.rejected, function (state, action) {
            state.success = false;
            state.error = action.payload;
        });
    },
});
export default userSlice.reducer;
