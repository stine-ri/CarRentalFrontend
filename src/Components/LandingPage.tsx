import React from 'react';
import Navbar from './NavBar';
import Home from './Home';
import Testimonials from './Testimonials';
import CarDisplay from './CarDisplay';
import Footer from './Footer';
import styles from './LandingPage.module.css'; // Import the CSS module for styling

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <Home />
      <Testimonials />
      <CarDisplay />
      
    </div>
  );
};

export default LandingPage;
