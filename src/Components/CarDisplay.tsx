// src/components/CarDisplay.tsx
import React from 'react';
import styles from './CarDisplay.module.css'; // Import the CSS module

// Import images
import car1 from '../assets/images/bmgrey.jpg';
import car2 from '../assets/images/bmw.png';
import car3 from '../assets/images/cadillac.webp';
import car4 from '../assets/images/grey.jpg';

const CarDisplay: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Available Cars</h2>
      <div className={styles.imageWrapper}>
        <div className={styles.imageItem}>
          <img src={car1} alt="Car 1" className={styles.image} />
          <div className={styles.textContainer}>
            <p className={styles.caption}>Audi</p>
            <p className={styles.additionalText}>Great condition, low mileage</p>
          </div>
        </div>
        <div className={styles.imageItem}>
          <img src={car2} alt="Car 2" className={styles.image} />
          <div className={styles.textContainer}>
            <p className={styles.caption}>BMW</p>
            <p className={styles.additionalText}>Luxury vehicle, fully loaded</p>
          </div>
        </div>
        <div className={styles.imageItem}>
          <img src={car3} alt="Car 3" className={styles.image} />
          <div className={styles.textContainer}>
            <p className={styles.caption}>Caddillac</p>
            <p className={styles.additionalText}>Economical and reliable</p>
          </div>
        </div>
        <div className={styles.imageItem}>
          <img src={car4} alt="Car 4" className={styles.image} />
          <div className={styles.textContainer}>
            <p className={styles.caption}>Cadillac</p>
            <p className={styles.additionalText}>Sporty and fast</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDisplay;
