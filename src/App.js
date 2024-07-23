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
var App = function () {
    return (React.createElement("div", null,
        React.createElement(Navbar, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
            React.createElement(Route, { path: "/register", element: React.createElement(Register, null) }),
            React.createElement(Route, { path: "/bookings", element: React.createElement(Bookings, null) }),
            React.createElement(Route, { path: "/book", element: React.createElement(BookVehicle, null) }),
            React.createElement(Route, { path: "/book-vehicle", element: React.createElement(BookVehicle, null) }),
            React.createElement(Route, { path: "/admin", element: React.createElement(AdminDashboard, null) }),
            React.createElement(Route, { path: "/admin/manage-vehicles", element: React.createElement(ManageVehicles, null) }),
            React.createElement(Route, { path: "/admin/manage-users", element: React.createElement(ManageUsers, null) }),
            React.createElement(Route, { path: "/admin/reports", element: React.createElement(Reports, null) }),
            React.createElement(Route, { path: "/admin/customer-support", element: React.createElement(CustomerSupport, null) }),
            React.createElement(Route, { path: "/admin/fleet-management", element: React.createElement(FleetManagement, null) }),
            React.createElement(Route, { path: "/admin/settings", element: React.createElement(Settings, null) }),
            React.createElement(Route, { path: "/user", element: React.createElement(UserDashboard, null) }),
            React.createElement(Route, { path: "/details/:id", element: React.createElement(CarDetails, null) }),
            React.createElement(Route, { path: "/update-profile", element: React.createElement(UpdateProfile, null) }),
            React.createElement(Route, { path: "/booking-history", element: React.createElement(BookingHistory, null) }),
            React.createElement(Route, { path: "/payment", element: React.createElement(PaymentForm, null) }),
            React.createElement(Route, { path: "/payment-form", element: React.createElement(PaymentForm, null) }),
            React.createElement(Route, { path: "/home", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/payment-success", element: React.createElement(PaymentSuccess, null) }),
            React.createElement(Route, { path: "/user/payment-success", element: React.createElement(PaymentSuccess, null) }),
            React.createElement(Route, { path: "/user-dashboard-overview", element: React.createElement(DashboardOverview, null) }),
            React.createElement(Route, { path: "/contact-us", element: React.createElement(ContactUs, null) })),
        React.createElement(Footer, null)));
};
export default App;
