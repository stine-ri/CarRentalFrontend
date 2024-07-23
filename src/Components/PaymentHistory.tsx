import React, { useState, useEffect } from 'react';
import styles from './PaymentHistory.module.css';

interface Payment {
  payment_id: number;
  booking_id: number;
  amount: string;
  payment_status: string;
  payment_date: string;
  payment_method: string;
  transaction_id: string;
  created_at: string;
  updated_at: string;
}

// Payment History Component
const PaymentHistory: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/payments');
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to fetch payment history.');
        }
        const data = await response.json();
        setPayments(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || 'Failed to fetch payment history.');
        } else {
          setError('Failed to fetch payment history.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.heading}>
          <span className={styles.icon}>📜</span> Payment History
        </h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <div className={styles.errorAlert}>{error}</div>
        ) : (
          <table className={styles.tableContainer}>
            <thead className={styles.tableHead}>
              <tr>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Method</th>
                <th>Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.payment_id} className={styles.tableRow}>
                  <td>${payment.amount}</td>
                  <td className={payment.payment_status === 'Successful' ? styles.tableCellStatusSuccessful : styles.tableCellStatusFailed}>
                    {payment.payment_status}
                  </td>
                  <td>{new Date(payment.payment_date).toLocaleDateString()}</td>
                  <td>{payment.payment_method}</td>
                  <td>{payment.transaction_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
