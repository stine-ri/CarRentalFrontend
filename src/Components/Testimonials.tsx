import React from 'react';
import styles from './Testimonials.module.css';
import user1Image from '../assets/images/Toyota.webp'; // adjust the path according to your project structure

const Testimonial: React.FC = () => {
  return (
    <div className={styles.testimonialSection}>
      <h2>What our clients say</h2>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <img src={user1Image} alt="Client 1" className={styles.clientImage} />
          <p>
            "Stine Rentals made my car rental experience smooth and hassle-free. The car was in excellent condition and the customer service was top-notch."
          </p>
          <p className={styles.clientName}>- Jeffrey Brown</p>
        </div>
        <div className={styles.testimonial}>
          <img src={user1Image} alt="Client 2" className={styles.clientImage} />
          <p>
            "I highly recommend Stine Rentals. They have a wide variety of cars to choose from, and the booking process was quick and easy."
          </p>
          <p className={styles.clientName}>- Maria Chen</p>
        </div>
        <div className={styles.testimonial}>
            <img src={user1Image} alt="Client 3" className={styles.clientImage} />
          <p>The cadillac Escalade was the best, it was so comfortable!</p>
          <p className={styles.clientName}>- Sarah Johnson</p>
        </div>
        <div className={styles.testimonial}>
            <img src={user1Image} alt="Client 4" className={styles.clientImage} />
          <p>I absolutely love Stine Rentals. The service and car selection are top-notch.Highly recommend to everyone</p>
          <p className={styles.clientName}>- Jane Smith</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
