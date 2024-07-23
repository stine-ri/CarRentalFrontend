import React from 'react';
import { useSelector } from 'react-redux';
import styles from './BookingHistory.module.css';
var BookingHistory = function () {
    var bookings = useSelector(function (state) { return state.booking.bookings; });
    console.log('Bookings:', bookings);
    var currentBookings = bookings.filter(function (booking) { return booking.booking_status === 'current'; });
    var historyBookings = bookings.filter(function (booking) { return booking.booking_status === 'history'; });
    return (React.createElement("div", { className: styles['booking-history-container'] },
        React.createElement("h2", { className: styles['booking-history-header'] }, "Current Bookings"),
        React.createElement("ul", { className: styles['booking-list'] }, currentBookings.length > 0 ? (currentBookings.map(function (booking) { return (React.createElement("li", { key: booking.id, className: styles['booking-item'] },
            React.createElement("div", { className: styles['booking-details'] },
                React.createElement("span", { className: styles['booking-id'] }, "Booking ID:"),
                " ",
                booking.id,
                ",",
                React.createElement("span", { className: styles['booking-id'] }, " Car ID:"),
                " ",
                booking.vehicle_id,
                ",",
                React.createElement("span", { className: styles['booking-id'] }, " Date:"),
                " ",
                booking.booking_date))); })) : (React.createElement("li", null, "No current bookings"))),
        React.createElement("h2", { className: styles['booking-history-header'] }, "Booking History"),
        React.createElement("ul", { className: styles['booking-list'] }, historyBookings.length > 0 ? (historyBookings.map(function (booking) { return (React.createElement("li", { key: booking.id, className: styles['booking-item'] },
            React.createElement("div", { className: styles['booking-details'] },
                React.createElement("span", { className: styles['booking-id'] }, "Booking ID:"),
                " ",
                booking.id,
                ",",
                React.createElement("span", { className: styles['booking-id'] }, " Car ID:"),
                " ",
                booking.vehicle_id,
                ",",
                React.createElement("span", { className: styles['booking-id'] }, " Date:"),
                " ",
                booking.booking_date))); })) : (React.createElement("li", null, "No booking history")))));
};
export default BookingHistory;
