import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css'; // Updated import
import welcomeImage from '../assets/images/bmw.png'; // Import the image

import { logoutUser } from '../redux/actions/authActions'; // Import logout action
import { useAppDispatch } from '../hooks/hooks';

const UserDashboardOverviewPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.dashboardOverview}>
      <div className={styles.content}>
        <div className={styles.linksSection}>
          <h1 className={styles.welcomeText}>Welcome to Stine Rentals</h1>
          <div className={styles.links}>
            <div className={styles.linkItem}>
              <Link to="/user">User Dashboard</Link>
            </div>
            <div className={styles.linkItem}>
              <Link to="/update-profile">Update Profile</Link>
            </div>
            <div className={styles.linkItem}>
              <Link to="/payment-form">Payment Form</Link>
            </div>
            <div className={styles.linkItem}>
              <Link to="/booking-history">Booking History</Link>
            </div>
            <div className={styles.linkItem}>
              <Link to="/book-vehicle">Book Vehicle</Link>
            </div>
            <div className={styles.linkItem}>
              <Link to="/bookings">Available Vehicles</Link>
            </div>
            <div className={styles.linkItem}>
              <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
            </div>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img src={welcomeImage} alt="Stine Rentals" className={styles.welcomeImage} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboardOverviewPage;
