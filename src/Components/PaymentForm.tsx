import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './PaymentForm.module.css'; 

// Stripe public key
const stripePromise = loadStripe('pk_test_51PeKzACI9w20ysjOXZAl43sGJogF5ggj6bfiopJ7CjsHjTarQipzBEvUQr4XzaKC8ISy7d3LlgczHfP4iDtN7ZRP00FxJo3oLv');

// Payment Form Component
const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // Initialize useNavigate
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setErrorMessage(error.message || 'Failed to create payment method.');
        setIsLoading(false);
      } else if (paymentMethod) {
        const paymentData = {
          booking_id: 4, // Updated booking_id
          amount: parseFloat(amount),
          payment_status: 'Payment', // Updated payment status
          payment_date: '2024-06-01', // Updated payment date
          payment_method: 'M-pesa', // Updated payment method
          transaction_id: '1' // Updated transaction ID
        };

        try {
          const response = await fetch('https://api-vehiclebackend.onrender.com/api/Payments', { // Updated endpoint
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
          });

          if (response.ok) {
            setIsSuccess(true);
            setErrorMessage(null);
            navigate('/user/payment-success'); // Use navigate for redirection
          } else {
            const data = await response.json();
            setErrorMessage(data.message || 'Failed to process payment.');
          }
        } catch (err) {
          if (err instanceof Error) {
            setErrorMessage(err.message || 'Failed to process payment.');
          } else {
            setErrorMessage('Failed to process payment.');
          }
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.header}>
        <span className={styles.icon}>💳</span> Payment Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.cardElement}>
          <CardElement />
        </div>
        <button
          type="submit"
          disabled={!stripe || isLoading}
          className={styles.button}
        >
          {isLoading ? 'Processing...' : 'Pay'}
        </button>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        {isSuccess && <div className={styles.success}>Payment successful!</div>}
      </form>
    </div>
  );
};

export default PaymentForm;
