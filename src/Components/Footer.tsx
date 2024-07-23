import React from 'react';
import styles from './Footer.module.css';
import facebookIcon from '../assets/images/instagram.webp';
import instagramIcon from '../assets/images/x.webp';
import twitterIcon from '../assets/images/fb.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
       <a href='/bookings'>
        <h2 className='company'>Rent A Car</h2></a>
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
    </footer>
  );
};

export default Footer;
