import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css'; // Updated import
import welcomeImage from '../assets/images/bmw.png'; // Import the image
import { logoutUser } from '../redux/actions/authActions'; // Import logout action
import { useAppDispatch } from '../hooks/hooks';
var UserDashboardOverviewPage = function () {
    var dispatch = useAppDispatch();
    var handleLogout = function () {
        dispatch(logoutUser());
    };
    return (React.createElement("div", { className: styles.dashboardOverview },
        React.createElement("div", { className: styles.content },
            React.createElement("div", { className: styles.linksSection },
                React.createElement("h1", { className: styles.welcomeText }, "Welcome to Stine Rentals"),
                React.createElement("div", { className: styles.links },
                    React.createElement("div", { className: styles.linkItem },
                        React.createElement(Link, { to: "/user" }, "User Dashboard")),
                    React.createElement("div", { className: styles.linkItem },
                        React.createElement(Link, { to: "/update-profile" }, "Update Profile")),
                    React.createElement("div", { className: styles.linkItem },
                        React.createElement(Link, { to: "/payment-form" }, "Payment Form")),
                    React.createElement("div", { className: styles.linkItem },
                        React.createElement(Link, { to: "/booking-history" }, "Booking History")),
                    React.createElement("div", { className: styles.linkItem },
                        React.createElement(Link, { to: "/book-vehicle" }, "Book Vehicle")),
                    React.createElement("div", { className: styles.linkItem },
                        React.createElement(Link, { to: "/bookings" }, "Available Vehicles")),
                    React.createElement("div", { className: styles.linkItem },
                        React.createElement("button", { onClick: handleLogout, className: styles.logoutButton }, "Logout")))),
            React.createElement("div", { className: styles.imageSection },
                React.createElement("img", { src: welcomeImage, alt: "Stine Rentals", className: styles.welcomeImage })))));
};
export default UserDashboardOverviewPage;
