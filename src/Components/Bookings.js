import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import styles from './Bookings.module.css';
import cadillac from '../assets/images/cadillac.webp';
import bmw from '../assets/images/bmw.png';
import toyota from '../assets/images/Toyota.webp';
import audi from '../assets/images/audi8.png';
import wagon from '../assets/images/wagon.jpg';
import cad from '../assets/images/cad.jpg';
import tesla from '../assets/images/tesla.jpeg';
var Bookings = function () {
    var location = useLocation(); // Initialize useLocation
    var state = location.state;
    var successMessage = state === null || state === void 0 ? void 0 : state.message; // Retrieve success message from state
    var _a = useState(successMessage), visibleMessage = _a[0], setVisibleMessage = _a[1];
    useEffect(function () {
        if (successMessage) {
            // Hide the message after 5 seconds
            var timer_1 = setTimeout(function () {
                setVisibleMessage(null);
            }, 5000); // 5000 ms = 5 seconds
            // Clear timer if the component unmounts before the timeout
            return function () { return clearTimeout(timer_1); };
        }
    }, [successMessage]);
    return (React.createElement("div", { className: styles.bookings },
        visibleMessage && (React.createElement("div", { className: styles.successMessage }, visibleMessage)),
        React.createElement("h2", null, "Available Vehicles"),
        React.createElement("div", { className: styles['vehicle-grid'] },
            React.createElement("div", { className: styles['vehicle-item'] },
                React.createElement("img", { src: bmw, alt: "BMW" }),
                React.createElement("div", { className: styles['vehicle-details'] },
                    React.createElement("p", null, "Model: BMW"),
                    React.createElement("p", null, "Year: 2020"),
                    React.createElement("p", null, "Price: $100/day"),
                    React.createElement("button", null,
                        React.createElement(Link, { to: "/book-vehicle" }, "Book Now")))),
            React.createElement("div", { className: styles['vehicle-item'] },
                React.createElement("img", { src: toyota, alt: "Toyota" }),
                React.createElement("div", { className: styles['vehicle-details'] },
                    React.createElement("p", null, "Model: Toyota"),
                    React.createElement("p", null, "Year: 2020"),
                    React.createElement("p", null, "Price: $300/day"),
                    React.createElement("button", null,
                        React.createElement(Link, { to: "/book-vehicle" }, "Book Now")))),
            React.createElement("div", { className: styles['vehicle-item'] },
                React.createElement("img", { src: audi, alt: "Audi" }),
                React.createElement("div", { className: styles['vehicle-details'] },
                    React.createElement("p", null, "Model: Audi"),
                    React.createElement("p", null, "Year: 2023"),
                    React.createElement("p", null, "Price: $100/day"),
                    React.createElement("button", null,
                        React.createElement(Link, { to: "/book-vehicle" }, "Book Now")))),
            React.createElement("div", { className: styles['vehicle-item'] },
                React.createElement("img", { src: cadillac, alt: "Cadillac Escallade" }),
                React.createElement("div", { className: styles['vehicle-details'] },
                    React.createElement("p", null, "Model: Cadillac Escallade"),
                    React.createElement("p", null, "Year: 2024"),
                    React.createElement("p", null, "Price: $1000/day"),
                    React.createElement("button", null,
                        React.createElement(Link, { to: "/book-vehicle" }, "Book Now")))),
            React.createElement("div", { className: styles['vehicle-item'] },
                React.createElement("img", { src: wagon, alt: "Mercedes G Wagon" }),
                React.createElement("div", { className: styles['vehicle-details'] },
                    React.createElement("p", null, "Model: Mercedes G Wagon"),
                    React.createElement("p", null, "Year: 2024"),
                    React.createElement("p", null, "Price: $1000/day"),
                    React.createElement("button", null,
                        React.createElement(Link, { to: "/book-vehicle" }, "Book Now")))),
            React.createElement("div", { className: styles['vehicle-item'] },
                React.createElement("img", { src: cad, alt: "Cadillac Escallade" }),
                React.createElement("div", { className: styles['vehicle-details'] },
                    React.createElement("p", null, "Model: Cadillac Escallade"),
                    React.createElement("p", null, "Year: 2024"),
                    React.createElement("p", null, "Price: $1000/day"),
                    React.createElement("button", null,
                        React.createElement(Link, { to: "/book-vehicle" }, "Book Now")))),
            React.createElement("div", { className: styles['vehicle-item'] },
                React.createElement("img", { src: bmw, alt: "BMW" }),
                React.createElement("div", { className: styles['vehicle-details'] },
                    React.createElement("p", null, "Model: BMW"),
                    React.createElement("p", null, "Year: 2024"),
                    React.createElement("p", null, "Price: $1000/day"),
                    React.createElement("button", null,
                        React.createElement(Link, { to: "/book-vehicle" }, "Book Now")))),
            React.createElement("div", { className: styles['vehicle-item'] },
                React.createElement("img", { src: tesla, alt: "Tesla" }),
                React.createElement("div", { className: styles['vehicle-details'] },
                    React.createElement("p", null, "Model: Tesla"),
                    React.createElement("p", null, "Year: 2021"),
                    React.createElement("p", null, "Price: $500/day"),
                    React.createElement("button", null,
                        React.createElement(Link, { to: "/book-vehicle" }, "Book Now")))))));
};
export default Bookings;
