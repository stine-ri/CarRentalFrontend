import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from './BookingHistory.module.css';

const BookingHistory: React.FC = () => {
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  
  console.log('Bookings:', bookings);

  const currentBookings = bookings.filter((booking) => booking.booking_status === 'current');
  const historyBookings = bookings.filter((booking) => booking.booking_status === 'history');

  return (
    <div className={styles['booking-history-container']}>
      <h2 className={styles['booking-history-header']}>Current Bookings</h2>
      <ul className={styles['booking-list']}>
        {currentBookings.length > 0 ? (
          currentBookings.map((booking) => (
            <li key={booking.id} className={styles['booking-item']}>
              <div className={styles['booking-details']}>
                <span className={styles['booking-id']}>Booking ID:</span> {booking.id}, 
                <span className={styles['booking-id']}> Car ID:</span> {booking.vehicle_id}, 
                <span className={styles['booking-id']}> Date:</span> {booking.booking_date}
              </div>
            </li>
          ))
        ) : (
          <li>No current bookings</li>
        )}
      </ul>

      <h2 className={styles['booking-history-header']}>Booking History</h2>
      <ul className={styles['booking-list']}>
        {historyBookings.length > 0 ? (
          historyBookings.map((booking) => (
            <li key={booking.id} className={styles['booking-item']}>
              <div className={styles['booking-details']}>
                <span className={styles['booking-id']}>Booking ID:</span> {booking.id}, 
                <span className={styles['booking-id']}> Car ID:</span> {booking.vehicle_id}, 
                <span className={styles['booking-id']}> Date:</span> {booking.booking_date}
              </div>
            </li>
          ))
        ) : (
          <li>No booking history</li>
        )}
      </ul>
    </div>
  );
};

export default BookingHistory;
