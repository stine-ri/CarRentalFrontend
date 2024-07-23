import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { bookVehicle } from '../redux/actions/bookingActions';
import styles from './BookVechicle.module.css';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../hooks/hooks';

const BookVehicle: React.FC = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    vehicle_id: 1,
    user_id: 1,
    location_id:1,
    location: '',  
    booking_date: '',
    return_date: '',
    booking_status: 'not booked',
    total_amount: '',
    paymentMethod: '',
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { loading, error, booking } = useSelector((state: RootState) => state.booking);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Dispatch the booking action and redirect to the payment form
      await dispatch(bookVehicle(bookingData));
      // Redirect to payment form, passing necessary data
      navigate(`/payment-form?booking_id=${bookingData.vehicle_id}`);
    } catch (err) {
      console.error('Booking failed:', err);
    }
  };

  return (
    <div className={styles['book-vehicle-container']}>
      <div className={styles['book-vehicle']}>
        <h2>Book Vehicle</h2>
        <form onSubmit={handleSubmit} className={styles['form']}>
          <div className={styles['form-group']}>
            <label className={styles['label']}>Name:</label>
            <input
              type="text"
              name="name"
              value={bookingData.name}
              onChange={handleChange}
              className={styles['input']}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label className={styles['label']}>Email:</label>
            <input
              type="email"
              name="email"
              value={bookingData.email}
              onChange={handleChange}
              className={styles['input']}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label className={styles['label']}>Booking Date:</label>
            <input
              type="date"
              name="booking_date"
              value={bookingData.booking_date}
              onChange={handleChange}
              className={styles['input']}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label className={styles['label']}>Return Date:</label>
            <input
              type="date"
              name="return_date"
              value={bookingData.return_date}
              onChange={handleChange}
              className={styles['input']}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label className={styles['label']}>Booking Status:</label>
            <input
              type="text"
              name="booking_status"
              value={bookingData.booking_status}
              onChange={handleChange}
              className={styles['input']}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label className={styles['label']}>Total Amount:</label>
            <input
              type="number"
              name="total_amount"
              value={bookingData.total_amount}
              onChange={handleChange}
              className={styles['input']}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label className={styles['label']}>Payment Method:</label>
            <select
              name="paymentMethod"
              value={bookingData.paymentMethod}
              onChange={handleChange}
              className={styles['select']}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="card">Card</option>
              <option value="credit">Credit</option>
              <option value="mpesa">M-Pesa</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className={styles['form-group']}>
            <label className={styles['label']}>Location:</label>
            <input
              type="text"
              name="location"
              value={bookingData.location}
              onChange={handleChange}
              className={styles['input']}
              required
            />
          </div>

          <button type="submit" className={styles['button']}>
            {loading ? 'Booking...' : 'Book Car'}
          </button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {successMessage && <p className={styles['success-message']}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default BookVehicle;
