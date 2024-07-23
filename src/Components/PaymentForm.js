var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './PaymentForm.module.css';
// Stripe public key
var stripePromise = loadStripe('pk_test_51PeKzACI9w20ysjOXZAl43sGJogF5ggj6bfiopJ7CjsHjTarQipzBEvUQr4XzaKC8ISy7d3LlgczHfP4iDtN7ZRP00FxJo3oLv');
// Payment Form Component
var PaymentForm = function () {
    var stripe = useStripe();
    var elements = useElements();
    var navigate = useNavigate(); // Initialize useNavigate
    var _a = useState(''), amount = _a[0], setAmount = _a[1];
    var _b = useState(null), errorMessage = _b[0], setErrorMessage = _b[1];
    var _c = useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = useState(false), isSuccess = _d[0], setIsSuccess = _d[1];
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var cardElement, _a, error, paymentMethod, paymentData, response, data, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    if (!stripe || !elements) {
                        return [2 /*return*/];
                    }
                    setIsLoading(true);
                    cardElement = elements.getElement(CardElement);
                    if (!cardElement) return [3 /*break*/, 10];
                    return [4 /*yield*/, stripe.createPaymentMethod({
                            type: 'card',
                            card: cardElement,
                        })];
                case 1:
                    _a = _b.sent(), error = _a.error, paymentMethod = _a.paymentMethod;
                    if (!error) return [3 /*break*/, 2];
                    setErrorMessage(error.message || 'Failed to create payment method.');
                    setIsLoading(false);
                    return [3 /*break*/, 10];
                case 2:
                    if (!paymentMethod) return [3 /*break*/, 10];
                    paymentData = {
                        booking_id: 32, // Updated booking_id
                        amount: parseFloat(amount),
                        payment_status: 'Payment', // Updated payment status
                        payment_date: '2024-06-01', // Updated payment date
                        payment_method: 'M-pesa', // Updated payment method
                        transaction_id: '1' // Updated transaction ID
                    };
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 8, 9, 10]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/Payments', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(paymentData),
                        })];
                case 4:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 5];
                    setIsSuccess(true);
                    setErrorMessage(null);
                    navigate('/user/payment-success'); // Use navigate for redirection
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, response.json()];
                case 6:
                    data = _b.sent();
                    setErrorMessage(data.message || 'Failed to process payment.');
                    _b.label = 7;
                case 7: return [3 /*break*/, 10];
                case 8:
                    err_1 = _b.sent();
                    if (err_1 instanceof Error) {
                        setErrorMessage(err_1.message || 'Failed to process payment.');
                    }
                    else {
                        setErrorMessage('Failed to process payment.');
                    }
                    return [3 /*break*/, 10];
                case 9:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: styles.card },
        React.createElement("h2", { className: styles.header },
            React.createElement("span", { className: styles.icon }, "\uD83D\uDCB3"),
            " Payment Form"),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("div", { className: styles.inputGroup },
                React.createElement("input", { type: "number", value: amount, onChange: function (e) { return setAmount(e.target.value); }, placeholder: "Amount", className: styles.input, required: true })),
            React.createElement("div", { className: styles.cardElement },
                React.createElement(CardElement, null)),
            React.createElement("button", { type: "submit", disabled: !stripe || isLoading, className: styles.button }, isLoading ? 'Processing...' : 'Pay'),
            errorMessage && React.createElement("div", { className: styles.error }, errorMessage),
            isSuccess && React.createElement("div", { className: styles.success }, "Payment successful!"))));
};
export default PaymentForm;
