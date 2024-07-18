import React, { useState } from 'react';
import { bookVehicle } from '../redux/actions/bookingActions';
import styles from './BookVechicle.module.css'; 
import { useAppDispatch } from '../hooks/hooks';

const BookVehicle: React.FC = () => {
  const [bookingData, setBookingData] = useState({ name: '', email: '', vehicle_id: 1, user_id:1, location_id:1, booking_date: '', return_date: '',booking_status:'not booked',total_amount:'' , paymentMethod: '',  loading:false,  error:undefined,  booking: undefined});
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(bookVehicle(bookingData));
  };

  return (
    <div className={styles['book-vehicle']}>
      <h2>Book Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles['label']}>Name:</label>
        <input type="text" name="name" value={bookingData.name} onChange={handleChange} className={styles['input']} required />

        <label className={styles['label']}>Email:</label>
        <input type="email" name="email" value={bookingData.email} onChange={handleChange} className={styles['input']} required />

        <label>
          Booking Date:
          <input
            type="string"
            name="booking_date"
            value={bookingData.booking_date}
            onChange={handleChange}
          />
        </label>
        <label>
          Return Date:
          <input
            type="string"
            name="return_date"
            value={bookingData.return_date}
            onChange={handleChange}
          />
        </label>
        <label>
          Booking Status:
          <input
            type="string"
            name="booking_status"
            value={bookingData.booking_status}
            onChange={handleChange}
          />
          <label>
          Total Amount:
          <input
            type = "number"
            name="total_amount"
            value={bookingData.total_amount}
            onChange={handleChange}
          />
        </label>
        </label>
        <label className={styles['label']}>Payment Method:</label>
        <select name="paymentMethod" value={bookingData.paymentMethod} onChange={handleChange} className={styles['select']} required>
          <option value="">Select Payment Method</option>
          <option value="card">Card</option>
          <option value="credit">Credit</option>
          <option value="mpesa">M-Pesa</option>
          <option value="paypal">PayPal</option>
        </select>

        {/* <label className={styles['label']}>Vehicle ID:</label>
        <input type="text" name="vehicleId" value={bookingData.vehicleId} onChange={handleChange} className={styles['input']} required /> */}
         
        <button type="submit" className={styles['button']}>Book</button>
      </form>
      {bookingData.loading && <p>Loading...</p>}
      {bookingData.error && <p>{bookingData.error}</p>}
      {bookingData.booking && <p>Booking successful!</p>}
    </div>
  );
};

export default BookVehicle;
