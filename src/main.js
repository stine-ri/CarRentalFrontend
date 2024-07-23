import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import store from './redux/store';
import App from './App';
// Log the environment variable to ensure it's loaded correctly
console.log('Stripe Public Key:', import.meta.env.VITE_STRIPE_PUBLIC_KEY);
// Load the Stripe public key from the environment variable
var stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(Provider, { store: store },
        React.createElement(BrowserRouter, null,
            React.createElement(Elements, { stripe: stripePromise },
                React.createElement(App, null))))));
