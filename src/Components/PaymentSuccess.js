import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './PaymentSuccessful.module.css'; // Import CSS module
var PaymentSuccess = function () {
    var navigate = useNavigate(); // Initialize useNavigate
    var handleReturnToBookings = function () {
        navigate('/bookings', { state: { message: 'Car booked successfully!' } }); // Pass success message as state
    };
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.message },
            React.createElement("h1", { className: styles.header }, "Payment Successful!"),
            React.createElement("p", { className: styles.text }, "Thank you for your payment. Your transaction has been completed successfully."),
            React.createElement("button", { className: styles.button, onClick: handleReturnToBookings }, "Return to Bookings"))));
};
export default PaymentSuccess;
