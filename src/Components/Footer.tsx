import React from 'react';
import styles from './Footer.module.css';
import facebookIcon from '../assets/images/facebook.png';
import instagramIcon from '../assets/images/instagram.png';
import twitterIcon from '../assets/images/twitter.png';
import googleIcon from '../assets/images/google.png';
import youtubeIcon from '../assets/images/tube.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerIcons}>
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
        <img src={googleIcon} alt="Google" />
        <img src={youtubeIcon} alt="YouTube" />
      </div>
      <div className={styles.footerLinks}>
    
        <a href="#">News</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </div>
      <div className={styles.footerCopyright}>
        Copyright ©2024,  Designed by Christine
      </div>
    </div>
  );
};

export default Footer;
