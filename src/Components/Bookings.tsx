import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import styles from './Bookings.module.css'; 
import cadillac from '../assets/images/cadillac.webp';
import car from '../assets/images/lac.jpeg';
import bmw from '../assets/images/bmw.png';
import toyota from '../assets/images/Toyota.webp';
import audi from '../assets/images/audi8.png';
import wagon from '../assets/images/wagon.jpg';
import cad from '../assets/images/cad.jpg';
import tesla from '../assets/images/tesla.jpeg';

const Bookings: React.FC = () => {
  const location = useLocation(); // Initialize useLocation
  const { state } = location;
  const successMessage = state?.message; // Retrieve success message from state
  const [visibleMessage, setVisibleMessage] = useState<string | null>(successMessage);

  useEffect(() => {
    if (successMessage) {
      // Hide the message after 5 seconds
      const timer = setTimeout(() => {
        setVisibleMessage(null);
      }, 5000); // 5000 ms = 5 seconds

      // Clear timer if the component unmounts before the timeout
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className={styles.bookings}>
      {visibleMessage && (
        <div className={styles.successMessage}>{visibleMessage}</div>
      )}
      <h2>Available Vehicles</h2>
      <div className={styles['vehicle-grid']}>
        <div className={styles['vehicle-item']}>
          <img src={bmw} alt="BMW" />
          <div className={styles['vehicle-details']}>
            <p>Model: BMW</p>
            <p>Year: 2020</p>
            <p>Price: $100/day</p>
            <button>
              <Link to="/book-vehicle">Book Now</Link>
            </button>
          </div>
        </div>
        <div className={styles['vehicle-item']}>
          <img src={toyota} alt="Toyota" />
          <div className={styles['vehicle-details']}>
            <p>Model: Toyota</p>
            <p>Year: 2020</p>
            <p>Price: $300/day</p>
            <button>
              <Link to="/book-vehicle">Book Now</Link>
            </button>
          </div>
        </div>
        <div className={styles['vehicle-item']}>
          <img src={audi} alt="Audi" />
          <div className={styles['vehicle-details']}>
            <p>Model: Audi</p>
            <p>Year: 2023</p>
            <p>Price: $100/day</p>
            <button>
              <Link to="/book-vehicle">Book Now</Link>
            </button>
          </div>
        </div>
        <div className={styles['vehicle-item']}>
          <img src={cadillac} alt="Cadillac Escallade" />
          <div className={styles['vehicle-details']}>
            <p>Model: Cadillac Escallade</p>
            <p>Year: 2024</p>
            <p>Price: $1000/day</p>
            <button>
              <Link to="/book-vehicle">Book Now</Link>
            </button>
          </div>
        </div>
        <div className={styles['vehicle-item']}>
          <img src={wagon} alt="Mercedes G Wagon" />
          <div className={styles['vehicle-details']}>
            <p>Model: Mercedes G Wagon</p>
            <p>Year: 2024</p>
            <p>Price: $1000/day</p>
            <button>
              <Link to="/book-vehicle">Book Now</Link>
            </button>
          </div>
        </div>
        <div className={styles['vehicle-item']}>
          <img src={cad} alt="Cadillac Escallade" />
          <div className={styles['vehicle-details']}>
            <p>Model: Cadillac Escallade</p>
            <p>Year: 2024</p>
            <p>Price: $1000/day</p>
            <button>
              <Link to="/book-vehicle">Book Now</Link>
            </button>
          </div>
        </div>
        <div className={styles['vehicle-item']}>
          <img src={bmw} alt="BMW" />
          <div className={styles['vehicle-details']}>
            <p>Model: BMW</p>
            <p>Year: 2024</p>
            <p>Price: $1000/day</p>
            <button>
              <Link to="/book-vehicle">Book Now</Link>
            </button>
          </div>
        </div>
        <div className={styles['vehicle-item']}>
          <img src={tesla} alt="Tesla" />
          <div className={styles['vehicle-details']}>
            <p>Model: Tesla</p>
            <p>Year: 2021</p>
            <p>Price: $500/day</p>
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
