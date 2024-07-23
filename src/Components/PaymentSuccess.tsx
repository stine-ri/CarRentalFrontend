import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './PaymentSuccessful.module.css'; // Import CSS module

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReturnToBookings = () => {
    navigate('/bookings', { state: { message: 'Car booked successfully!' } }); // Pass success message as state
  };

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1 className={styles.header}>Payment Successful!</h1>
        <p className={styles.text}>Thank you for your payment. Your transaction has been completed successfully.</p>
        <button className={styles.button} onClick={handleReturnToBookings}>
          Return to Bookings
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
