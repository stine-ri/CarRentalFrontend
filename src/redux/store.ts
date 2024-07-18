import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import bookingReducer from './reducers/bookingReducer';
import vehicleReducer from './reducers/vehicleReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    vehicles: vehicleReducer,
    users: userReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
