import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Bookings from './Components/Bookings';
import BookVehicle from './Components/Bookvehicle';
import AdminDashboard from './Components/AdminDashboard';
import ManageVehicles from './Components/ManageVehicles';
import ManageUsers from './Components/ManageUsers';
import Reports from './Components/Reports';
import CustomerSupport from './Components/CustomerSupport';
import FleetManagement from './Components/FleetManagement';
import Settings from './Components/Settings';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/book" element={<BookVehicle />} />
            <Route path="/book-vehicle" element={<BookVehicle />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/logout" element={<AdminDashboard />} />
            <Route path="/admin/manage-vehicles" element={<ManageVehicles />} />
            <Route path="/admin/manage-users" element={<ManageUsers />} />
            <Route path="/admin/manage-users" element={<ManageUsers />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/customer-support" element={<CustomerSupport />} />
            <Route path="/admin/fleet-management" element={<FleetManagement />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Routes>
          <Footer />
        </div>
      
    </Provider>
  );
};

export default App;
