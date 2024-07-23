import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
var Navbar = function () {
    return (React.createElement("nav", { className: styles.navbar },
        React.createElement("div", { className: styles['navbar-logo'] },
            React.createElement("h1", null, "Stine Rentals ")),
        React.createElement("ul", { className: styles['navbar-links'] },
            React.createElement("li", null,
                React.createElement(Link, { to: "/" }, "Home")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/login" }, "Login")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/register" }, "Register")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/admin" }, "Admin")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/user-dashboard-overview" }, "DashboardOverview")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/contact-us" }, "ContactUs")))));
};
export default Navbar;
