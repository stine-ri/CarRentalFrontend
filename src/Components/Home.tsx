import React from 'react';
import styles from './Home.module.css'; 
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/user-dashboard-overview');
  }
  return (
    <div className={styles.home}>
      <h1>Welcome to Stine Rental Management System</h1>
      <p>Your one-stop solution for renting vehicles.</p>
      <button onClick={handleGetStarted} className={styles.buttonHome}>Get Started</button>
    </div>
  );
};

export default Home;