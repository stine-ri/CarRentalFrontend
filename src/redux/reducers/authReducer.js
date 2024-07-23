import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from '../actions/authActions';
var initialState = {
    token: localStorage.getItem('token'),
    role: localStorage.getItem('userRole'),
    user: null,
    loading: false,
    error: null,
};
var authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(registerUser.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(registerUser.fulfilled, function (state, action) {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.role = action.payload.role;
        })
            .addCase(registerUser.rejected, function (state, action) {
            state.loading = false;
            state.error = action.payload;
        })
            .addCase(loginUser.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(loginUser.fulfilled, function (state, action) {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.role = action.payload.role;
        })
            .addCase(loginUser.rejected, function (state, action) {
            state.loading = false;
            state.error = action.payload;
        })
            .addCase(logoutUser.fulfilled, function (state) {
            state.token = null;
            state.user = null;
            state.role = null;
        });
    },
});
export default authSlice.reducer;
