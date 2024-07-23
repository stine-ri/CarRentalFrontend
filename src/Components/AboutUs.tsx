import React from 'react';
import styles from './AboutUs.module.css';
import aboutImage from '../assets/images/mercedes.jpg'; // Adjust the path accordingly

const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.imageWrapper}>
        <img src={aboutImage} alt="Stine Rental" className={styles.aboutImage} />
      </div>
      <div className={styles.textWrapper}>
        <h1>About <span className={styles.highlight}>Us</span></h1>
        <p>
          Welcome to Stine Rental, your go-to solution for renting high-quality vehicles with ease and convenience.
          We pride ourselves on providing excellent customer service and a wide selection of vehicles to meet your
          travel needs.
        </p>
        <p>
          Our fleet includes the latest models of both four-wheelers and two-wheelers, ensuring that you find the
          perfect vehicle for your journey. Whether you're planning a road trip, need a car for business travel,
          or just want to explore the city, Stine Rental has got you covered.
        </p>
        <p>
          Our mission is to make the rental process as smooth and hassle-free as possible, with competitive pricing
          and flexible rental terms. Book with us today and experience the difference!
        </p>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
    </div>
  );
};

export default AboutUs;
