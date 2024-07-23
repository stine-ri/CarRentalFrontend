import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
var Home = function () {
    var navigate = useNavigate();
    var handleGetStarted = function () {
        navigate('/user-dashboard-overview');
    };
    return (React.createElement("div", { className: styles.home },
        React.createElement("h1", null, "Welcome to Vehicle Rental Management System"),
        React.createElement("p", null, "Your one-stop solution for renting vehicles."),
        React.createElement("button", { onClick: handleGetStarted, className: styles.buttonHome }, "Get Started")));
};
export default Home;
