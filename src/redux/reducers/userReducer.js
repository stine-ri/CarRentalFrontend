// userReducer.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUser, deleteUser } from '../actions/userAction';
var initialState = {
    loading: false,
    users: [],
    error: null,
};
var userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchUsers.pending, function (state) {
            state.loading = true;
        })
            .addCase(fetchUsers.fulfilled, function (state, action) {
            state.loading = false;
            state.users = action.payload;
        })
            .addCase(fetchUsers.rejected, function (state, action) {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch users';
        })
            .addCase(updateUser.fulfilled, function (state, action) {
            var index = state.users.findIndex(function (user) { return user.id === action.payload.id; });
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        })
            .addCase(deleteUser.fulfilled, function (state, action) {
            state.users = state.users.filter(function (user) { return user.id !== action.payload; });
        });
    },
});
export default userSlice.reducer;
