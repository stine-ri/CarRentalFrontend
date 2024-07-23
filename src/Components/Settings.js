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
import styles from './Settings.module.css';
var Settings = function () {
    var _a = useState({
        name: '',
        email: '',
    }), profile = _a[0], setProfile = _a[1];
    var _b = useState({
        emailNotifications: true,
        pushNotifications: false,
    }), notificationPreferences = _b[0], setNotificationPreferences = _b[1];
    var _c = useState({
        creditCard: true,
        paypal: false,
        mpesa: true,
    }), paymentMethods = _c[0], setPaymentMethods = _c[1];
    var handleProfileChange = function (e) {
        var _a;
        setProfile(__assign(__assign({}, profile), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleNotificationChange = function (e) {
        var _a;
        setNotificationPreferences(__assign(__assign({}, notificationPreferences), (_a = {}, _a[e.target.name] = e.target.checked, _a)));
    };
    var handlePaymentMethodChange = function (e) {
        var _a;
        setPaymentMethods(__assign(__assign({}, paymentMethods), (_a = {}, _a[e.target.name] = e.target.checked, _a)));
    };
    var handleSaveSettings = function () {
        // Implement save logic here
        alert('Settings saved successfully!');
    };
    return (React.createElement("div", { className: styles.settingsContainer },
        React.createElement("h2", null, "Settings"),
        React.createElement("div", { className: styles.section },
            React.createElement("h3", null, "Profile Settings"),
            React.createElement("form", null,
                React.createElement("div", null,
                    React.createElement("label", null,
                        "Name:",
                        React.createElement("input", { type: "text", name: "name", value: profile.name, onChange: handleProfileChange }))),
                React.createElement("div", null,
                    React.createElement("label", null,
                        "Email:",
                        React.createElement("input", { type: "email", name: "email", value: profile.email, onChange: handleProfileChange }))))),
        React.createElement("div", { className: styles.section },
            React.createElement("h3", null, "Notification Preferences"),
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", name: "emailNotifications", checked: notificationPreferences.emailNotifications, onChange: handleNotificationChange }),
                "Email Notifications"),
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", name: "pushNotifications", checked: notificationPreferences.pushNotifications, onChange: handleNotificationChange }),
                "Push Notifications")),
        React.createElement("div", { className: styles.section },
            React.createElement("h3", null, "Payment Methods"),
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", name: "creditCard", checked: paymentMethods.creditCard, onChange: handlePaymentMethodChange }),
                "Credit Card"),
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", name: "paypal", checked: paymentMethods.paypal, onChange: handlePaymentMethodChange }),
                "PayPal"),
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", name: "mpesa", checked: paymentMethods.mpesa, onChange: handlePaymentMethodChange }),
                "Mpesa")),
        React.createElement("button", { onClick: handleSaveSettings, className: styles.saveButton }, "Save Settings")));
};
export default Settings;
