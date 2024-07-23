import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import UserDashboard from './Components/UserDashboard';
import CarDetails from './Components/CarDetails';
import UpdateProfile from './Components/UpdateProfile';
import BookingHistory from './Components/BookingHistory';
import PaymentForm from './Components/PaymentForm';
import PaymentSuccess from './Components/PaymentSuccess';
import DashboardOverview from './Components/DashboardOverview';
import ContactUs from './Components/ContactUs';
import ManageBooks from './Components/ManageBooks';
import ManageLocations from 'Components/ManageLocations';
const App: React.FC = () => {
  
  return (
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
        <Route path="/admin/manage-vehicles" element={<ManageVehicles />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/customer-support" element={<CustomerSupport />} />
        <Route path="/admin/fleet-management" element={<FleetManagement />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/details/:id" element={<CarDetails />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/booking-history" element={<BookingHistory />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/user/payment-success" element={<PaymentSuccess />} />
        <Route path="/user-dashboard-overview" element={<DashboardOverview />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admin/manage-books" element={<ManageBooks />} />
        <Route path="/admin/manage-locations" element={<ManageLocations />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
