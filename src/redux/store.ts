import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import bookingReducer from './reducers/bookingReducer';
import vehicleReducer from './reducers/vehicleReducer';
import userReducer from './reducers/userReducer';
import customerSupportReducer from './reducers/customerSupportReducer';
import fleetManagementReducer from './reducers/fleetManagementReducer';
import profileReducer from './reducers/profileReducer';
import paymentReducer from './reducers/paymentReducer';
const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    vehicles: vehicleReducer,
    users: userReducer,
    customerSupport: customerSupportReducer,
    fleetManagement: fleetManagementReducer, 
    user: profileReducer,
    payment: paymentReducer,  
  },
});





export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
