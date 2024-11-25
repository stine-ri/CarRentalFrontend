import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-logo']}>
        <h1>Stine Rentals</h1>
      </div>
      <button className={styles['hamburger-menu']} onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <ul className={`${styles['navbar-links']} ${isMenuOpen ? styles['open'] : ''}`}>
        <li><Link to="/register" onClick={closeMenu}>Register</Link></li>
        <li><Link to="/about-us" onClick={closeMenu}>About us</Link></li>
        <li><Link to="/contact-us" onClick={closeMenu}>Contact us</Link></li>
        <li><Link to="/login" className={styles['contact-button']} onClick={closeMenu}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
