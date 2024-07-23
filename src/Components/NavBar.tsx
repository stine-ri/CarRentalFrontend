import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'; 

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-logo']}>
         <h1>Stine Rentals </h1>
      </div>
      <ul className={styles['navbar-links']}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/contact-us">ContactUs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
