import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import styles from './PaymentForm.module.css'; 

// Stripe public key
const stripePromise = loadStripe('pk_test_51PeKzACI9w20ysjOXZAl43sGJogF5ggj6bfiopJ7CjsHjTarQipzBEvUQr4XzaKC8ISy7d3LlgczHfP4iDtN7ZRP00FxJo3oLv');

// Payment Form Component
const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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
        // Ensure amount is a valid number
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
          setErrorMessage('Invalid amount.');
          setIsLoading(false);
          return;
        }

        // Use the current date as payment_date
        const paymentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD

        const paymentData = {
          booking_id: 4,
          amount: parsedAmount,
          payment_status: 'Payment',
          payment_date: paymentDate,
          payment_method: 'M-pesa',
          transaction_id: '1'
        };

        try {
          const response = await fetch('https://api-vehiclebackend.onrender.com/api/Payments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
          });

          if (response.ok) {
            setIsSuccess(true);
            setErrorMessage(null);
            navigate('/user/payment-success');
          } else {
            const data = await response.json();
            console.error('Response error:', data);
            setErrorMessage(data.message || 'Failed to process payment.');
          }
        } catch (err) {
          console.error('Fetch error:', err);
          setErrorMessage(err instanceof Error ? err.message : 'Failed to process payment.');
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
