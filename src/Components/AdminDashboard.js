import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminDashboard.module.css';
import { logoutUser } from '../redux/actions/authActions';
import { useAppDispatch } from '../hooks/hooks';
var AdminDashboard = function () {
    var dispatch = useAppDispatch();
    var handleLogout = function () {
        dispatch(logoutUser());
    };
    return (React.createElement("div", { className: styles['admin-dashboard'] },
        React.createElement("div", { className: styles['admin-nav-container'] },
            React.createElement("nav", { className: styles['admin-nav'] },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/admin/manage-vehicles", className: styles['admin-nav-link'] }, "Manage Vehicles")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/admin/manage-users", className: styles['admin-nav-link'] }, "Manage Users")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/admin/reports", className: styles['admin-nav-link'] }, "Reports")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/admin/customer-support", className: styles['admin-nav-link'] }, "Customer Support")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/admin/fleet-management", className: styles['admin-nav-link'] }, "Fleet Management")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/admin/settings", className: styles['admin-nav-link'] }, "Settings")),
                    React.createElement("li", null,
                        React.createElement("button", { onClick: handleLogout, className: styles['logout-button'] }, "Logout"))))),
        React.createElement("div", { className: styles['overview'] },
            React.createElement("h2", null, "Admin Dashboard Overview"),
            React.createElement("div", { className: styles['overview-content'] },
                React.createElement("div", { className: styles['overview-item'] },
                    React.createElement("h3", null, "Manage Vehicles"),
                    React.createElement("p", null, "View and manage the list of vehicles available in the system."),
                    React.createElement(Link, { to: "/admin/manage-vehicles", className: styles['button-link'] }, "Go to Manage Vehicles")),
                React.createElement("div", { className: styles['overview-item'] },
                    React.createElement("h3", null, "Manage Users"),
                    React.createElement("p", null, "View and manage user accounts and roles."),
                    React.createElement(Link, { to: "/admin/manage-users", className: styles['button-link'] }, "Go to Manage Users")),
                React.createElement("div", { className: styles['overview-item'] },
                    React.createElement("h3", null, "Reports"),
                    React.createElement("p", null, "Generate and view various reports related to bookings and transactions."),
                    React.createElement(Link, { to: "/admin/reports", className: styles['button-link'] }, "Go to Reports")),
                React.createElement("div", { className: styles['overview-item'] },
                    React.createElement("h3", null, "Customer Support"),
                    React.createElement("p", null, "Manage customer support tickets and inquiries."),
                    React.createElement(Link, { to: "/admin/customer-support", className: styles['button-link'] }, "Go to Customer Support")),
                React.createElement("div", { className: styles['overview-item'] },
                    React.createElement("h3", null, "Fleet Management"),
                    React.createElement("p", null, "Manage and oversee the fleet of vehicles."),
                    React.createElement(Link, { to: "/admin/fleet-management", className: styles['button-link'] }, "Go to Fleet Management")),
                React.createElement("div", { className: styles['overview-item'] },
                    React.createElement("h3", null, "Settings"),
                    React.createElement("p", null, "Configure system settings and preferences."),
                    React.createElement(Link, { to: "/admin/settings", className: styles['button-link'] }, "Go to Settings"))))));
};
export default AdminDashboard;
