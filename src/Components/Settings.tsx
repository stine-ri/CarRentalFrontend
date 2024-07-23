import React, { useState } from 'react';
import styles from './Settings.module.css';

const Settings: React.FC = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });

  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  const [paymentMethods, setPaymentMethods] = useState({
    creditCard: true,
    paypal: false,
    mpesa: true,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationPreferences({ ...notificationPreferences, [e.target.name]: e.target.checked });
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethods({ ...paymentMethods, [e.target.name]: e.target.checked });
  };

  const handleSaveSettings = () => {
    // Implement save logic here
    alert('Settings saved successfully!');
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Settings</h2>
      
      <div className={styles.section}>
        <h3>Profile Settings</h3>
        <form>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </label>
          </div>
        </form>
      </div>

      <div className={styles.section}>
        <h3>Notification Preferences</h3>
        <label>
          <input
            type="checkbox"
            name="emailNotifications"
            checked={notificationPreferences.emailNotifications}
            onChange={handleNotificationChange}
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="pushNotifications"
            checked={notificationPreferences.pushNotifications}
            onChange={handleNotificationChange}
          />
          Push Notifications
        </label>
      </div>

      <div className={styles.section}>
        <h3>Payment Methods</h3>
        <label>
          <input
            type="checkbox"
            name="creditCard"
            checked={paymentMethods.creditCard}
            onChange={handlePaymentMethodChange}
          />
          Credit Card
        </label>
        <label>
          <input
            type="checkbox"
            name="paypal"
            checked={paymentMethods.paypal}
            onChange={handlePaymentMethodChange}
          />
          PayPal
        </label>
        <label>
          <input
            type="checkbox"
            name="mpesa"
            checked={paymentMethods.mpesa}
            onChange={handlePaymentMethodChange}
          />
          Mpesa
        </label>
      </div>

      <button onClick={handleSaveSettings} className={styles.saveButton}>
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
