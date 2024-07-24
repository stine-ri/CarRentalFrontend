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
import VehicleComponent from './Components/VehicleComponent';
import UserDashboard from './Components/UserDashboard';
import CarDetails from './Components/CarDetails';
import UpdateProfile from './Components/UpdateProfile';
import BookingHistory from './Components/BookingHistory';
import PaymentForm from './Components/PaymentForm';
import PaymentSuccess from './Components/PaymentSuccess';
import DashboardOverview from './Components/DashboardOverview';
import ContactUs from './Components/ContactUs';
import ManageBooks from './Components/ManageBooks';
import ManageLocations from './Components/ManageLocations';
import AboutUs from './Components/AboutUs';
import TicketsPage from './Components/Tickets';
import LandingPage from './Components/LandingPage';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
        <Route path="/vehicles" element={<VehicleComponent />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/details/:id" element={<CarDetails />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/booking-history" element={<BookingHistory />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/user/payment-success" element={<PaymentSuccess />} />
        <Route path="/user-dashboard-overview" element={<DashboardOverview />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admin/manage-books" element={<ManageBooks />} />
        <Route path="/admin/manage-locations" element={<ManageLocations />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
