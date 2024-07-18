import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Bookings.module.css'; 
import cadillac from '../assets/images/cadillac.webp'
import car from '../assets/images/lac.jpeg'
const Bookings: React.FC = () => {
  return (
    <div className={styles.bookings}>
      <h2>Available Vehicles</h2>
      <div className={styles['vehicle-list']}>
        {/* Example vehicle item */}
        <div className={styles['vehicle-item']}>
          <img src={cadillac} alt="Vehicle" />
          <div className={styles['vehicle-details']}>
            <p>Model: ABC</p>
            <p>Year: 2020</p>
            <p>Price: $100/day</p>
            <button>
              <Link to="/book-vehicle">Book Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles['vehicle-list']}>
        {/* Example vehicle item */}
        <div className={styles['vehicle-item']}>
          <img src={car} alt="Vehicle" />
          <div className={styles['vehicle-details']}>
            <p>Model: Cadillac Escallade</p>
            <p>Year: 2024</p>
            <p>Price: $1000/day</p>
            <button>
              <Link to="/book-vehicle">Book Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
