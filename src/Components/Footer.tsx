import React from 'react';
import styles from './Footer.module.css';
import facebookIcon from '../assets/images/fb.png';
import instagramIcon from '../assets/images/gram.png';
import twitterIcon from '../assets/images/twitt.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <h2 >Rent A Car</h2>
      </div>
      <div className={styles.contact}>
        <a href='/contact-us'>
        <h3>Contact US</h3></a>
      </div>
      <div className={styles.social}>
        <a href="https://www.facebook.com">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.twitter.com">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>
      <div>
        <p>&copy; 2024 Stine Rental Management System</p>
      </div>
    </footer>
  );
};

export default Footer;
