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
import React, { useState } from 'react';
import styles from './ContactUs.module.css';
var ContactUs = function () {
    var _a = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        message: '',
        newsletterEmail: ''
    }), formData = _a[0], setFormData = _a[1];
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        alert('Response received, thanks!');
    };
    var handleNewsletterSubmit = function (e) {
        e.preventDefault();
        alert('Response received, thanks!');
    };
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.formContainer },
            React.createElement("a", { href: "#", className: styles.goBack }, "\u2190 Go back"),
            React.createElement("h2", null, "Here to help"),
            React.createElement("form", { onSubmit: handleSubmit, className: styles.form },
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Full name*"),
                    React.createElement("input", { type: "text", name: "fullName", value: formData.fullName, onChange: handleChange, required: true })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Email address*"),
                    React.createElement("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, required: true })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Contact number"),
                    React.createElement("input", { type: "tel", name: "contactNumber", value: formData.contactNumber, onChange: handleChange })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Message*"),
                    React.createElement("textarea", { name: "message", value: formData.message, onChange: handleChange, required: true })),
                React.createElement("button", { type: "submit", className: styles.sendMessageButton }, "Send message \u2192"))),
        React.createElement("div", { className: styles.newsletterContainer },
            React.createElement("h2", null, "Join our newsletter"),
            React.createElement("p", null, "Add your details and you'll receive our quarterly email, including what's happening with the wild of new cars, affordable cars, and comfortable cars around stine Rental."),
            React.createElement("form", { onSubmit: handleNewsletterSubmit, className: styles.newsletterForm },
                React.createElement("label", null, "Email Address"),
                React.createElement("input", { type: "email", name: "newsletterEmail", value: formData.newsletterEmail, onChange: handleChange }),
                React.createElement("button", { type: "submit", className: styles.signUpButton }, "Sign up \u2192"))),
        React.createElement("div", { className: styles.contactInfo },
            React.createElement("div", null,
                React.createElement("h3", null, "For bookings, rates & reservations:"),
                React.createElement("a", { href: "/bookings" }, "Car Rental")),
            React.createElement("div", null,
                React.createElement("h3", null, "Alternatively contact us at:"),
                React.createElement("p", null, "Email: info@stinerental.com"),
                React.createElement("p", null, "Phone: +254 (0)710 791303"),
                React.createElement("p", null, "Stine Rental Ltd."),
                React.createElement("p", null, "P.O. Box 1950"),
                React.createElement("p", null, "Nakuru"),
                React.createElement("p", null, "Kenya")))));
};
export default ContactUs;
