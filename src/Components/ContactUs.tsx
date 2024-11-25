import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Response received, thanks!');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <a href="#" className={styles.goBack}>&larr; Go back</a>
          <h2>Here to help</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Full name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Email address*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Contact number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Message*</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.sendMessageButton}>Send message →</button>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <div>
            <h3>For bookings, rates & reservations:</h3>
            <a href="/bookings">Car Rental</a>
          </div>
          <div>
            <h3>Alternatively contact us at:</h3>
            <p>Email: info@stinerental.com</p>
            <p>Phone: +254 (0)710 791303</p>
            <p>Stine Rental Ltd.</p>
            <p>P.O. Box 1950</p>
            <p>Nakuru</p>
            <p>Kenya</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
