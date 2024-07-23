import React from 'react';
import PaymentForm from './PaymentForm';
import PaymentHistory from './PaymentHistory';
import styles from './PaymentPage.module.css';

const PaymentPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <PaymentForm />
          </div>
          <div className={styles.gridItem}>
            <PaymentHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
