import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserDashboard.module.css';
// Import images
import bmwImage from '../assets/images/bmw.png';
import audiImage from '../assets/images/audi8.png';
import toyotaImage from '../assets/images/Toyota.webp';
import nissanImage from '../assets/images/cadillac.webp';
import mercedesImage from '../assets/images/mercedes.jpg';
import teslaImage from '../assets/images/tesla.jpeg';
var cars = [
    { id: 1, name: 'BMW 5 Series', price: '$1000 Per Day', image: bmwImage },
    { id: 2, name: 'Audi Q8', price: '$3000 Per Day', image: audiImage },
    { id: 3, name: 'Toyota Camry', price: '$600 Per Day', image: toyotaImage },
    { id: 4, name: 'Cadillac Escalade', price: '$400 Per Day', image: nissanImage },
    { id: 5, name: 'Mercedes-Benz C-Class', price: '$2000 Per Day', image: mercedesImage },
    { id: 6, name: 'Tesla Model S', price: '$1500 Per Day', image: teslaImage },
];
var UserDashboard = function () {
    return (React.createElement("div", { className: styles.dashboard },
        React.createElement("h2", null, "Recently Listed Cars"),
        React.createElement("div", { className: styles.carsList }, cars.map(function (car) { return (React.createElement("div", { key: car.id, className: styles.carCard },
            React.createElement("img", { src: car.image, alt: car.name }),
            React.createElement("div", { className: styles.carInfo },
                React.createElement("h3", null, car.name),
                React.createElement("p", null, car.price),
                React.createElement(Link, { to: "/details/".concat(car.id), className: styles.detailsButton }, "View Details"),
                React.createElement(Link, { to: "/book", className: styles.bookButton }, "Book Car")))); }))));
};
export default UserDashboard;
