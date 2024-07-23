var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { bookVehicle } from '../redux/actions/bookingActions';
import styles from './BookVechicle.module.css';
import { useAppDispatch } from '../hooks/hooks';
var BookVehicle = function () {
    var _a = useState({
        name: '',
        email: '',
        vehicle_id: 1,
        user_id: 1,
        location_id: 1,
        location: '',
        booking_date: '',
        return_date: '',
        booking_status: 'not booked',
        total_amount: '',
        paymentMethod: '',
    }), bookingData = _a[0], setBookingData = _a[1];
    var _b = useState(null), successMessage = _b[0], setSuccessMessage = _b[1];
    var dispatch = useAppDispatch();
    var navigate = useNavigate(); // Initialize useNavigate
    var _c = useSelector(function (state) { return state.booking; }), loading = _c.loading, error = _c.error, booking = _c.booking;
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setBookingData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    // Dispatch the booking action and redirect to the payment form
                    return [4 /*yield*/, dispatch(bookVehicle(bookingData))];
                case 2:
                    // Dispatch the booking action and redirect to the payment form
                    _a.sent();
                    // Redirect to payment form, passing necessary data
                    navigate("/payment-form?booking_id=".concat(bookingData.vehicle_id));
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error('Booking failed:', err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: styles['book-vehicle-container'] },
        React.createElement("div", { className: styles['book-vehicle'] },
            React.createElement("h2", null, "Book Vehicle"),
            React.createElement("form", { onSubmit: handleSubmit, className: styles['form'] },
                React.createElement("div", { className: styles['form-group'] },
                    React.createElement("label", { className: styles['label'] }, "Name:"),
                    React.createElement("input", { type: "text", name: "name", value: bookingData.name, onChange: handleChange, className: styles['input'], required: true })),
                React.createElement("div", { className: styles['form-group'] },
                    React.createElement("label", { className: styles['label'] }, "Email:"),
                    React.createElement("input", { type: "email", name: "email", value: bookingData.email, onChange: handleChange, className: styles['input'], required: true })),
                React.createElement("div", { className: styles['form-group'] },
                    React.createElement("label", { className: styles['label'] }, "Booking Date:"),
                    React.createElement("input", { type: "date", name: "booking_date", value: bookingData.booking_date, onChange: handleChange, className: styles['input'], required: true })),
                React.createElement("div", { className: styles['form-group'] },
                    React.createElement("label", { className: styles['label'] }, "Return Date:"),
                    React.createElement("input", { type: "date", name: "return_date", value: bookingData.return_date, onChange: handleChange, className: styles['input'], required: true })),
                React.createElement("div", { className: styles['form-group'] },
                    React.createElement("label", { className: styles['label'] }, "Booking Status:"),
                    React.createElement("input", { type: "text", name: "booking_status", value: bookingData.booking_status, onChange: handleChange, className: styles['input'], required: true })),
                React.createElement("div", { className: styles['form-group'] },
                    React.createElement("label", { className: styles['label'] }, "Total Amount:"),
                    React.createElement("input", { type: "number", name: "total_amount", value: bookingData.total_amount, onChange: handleChange, className: styles['input'], required: true })),
                React.createElement("div", { className: styles['form-group'] },
                    React.createElement("label", { className: styles['label'] }, "Payment Method:"),
                    React.createElement("select", { name: "paymentMethod", value: bookingData.paymentMethod, onChange: handleChange, className: styles['select'], required: true },
                        React.createElement("option", { value: "" }, "Select Payment Method"),
                        React.createElement("option", { value: "card" }, "Card"),
                        React.createElement("option", { value: "credit" }, "Credit"),
                        React.createElement("option", { value: "mpesa" }, "M-Pesa"),
                        React.createElement("option", { value: "paypal" }, "PayPal"))),
                React.createElement("div", { className: styles['form-group'] },
                    React.createElement("label", { className: styles['label'] }, "Location:"),
                    React.createElement("input", { type: "text", name: "location", value: bookingData.location, onChange: handleChange, className: styles['input'], required: true })),
                React.createElement("button", { type: "submit", className: styles['button'] }, loading ? 'Booking...' : 'Book Car')),
            loading && React.createElement("p", null, "Loading..."),
            error && React.createElement("p", null, error),
            successMessage && React.createElement("p", { className: styles['success-message'] }, successMessage))));
};
export default BookVehicle;
