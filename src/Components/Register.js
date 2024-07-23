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
import { useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';
import styles from './Register.module.css';
import { useAppDispatch } from '../hooks/hooks';
var Register = function () {
    var _a = useState({
        full_name: '',
        email: '',
        password: '',
        contact_phone: '',
        address: '',
        role: 'user',
    }), formData = _a[0], setFormData = _a[1];
    var dispatch = useAppDispatch();
    var _b = useSelector(function (state) { return state.auth; }), loading = _b.loading, error = _b.error, token = _b.token;
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        dispatch(registerUser(formData));
    };
    return (React.createElement("div", { className: styles.registerContainer },
        React.createElement("div", { className: styles.registerBox },
            React.createElement("h2", null, "Register Form"),
            React.createElement("form", { onSubmit: handleSubmit, className: styles.form },
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Full Name:"),
                    React.createElement("input", { type: "text", name: "full_name", value: formData.full_name, onChange: handleChange, required: true })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Email:"),
                    React.createElement("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, required: true })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Password:"),
                    React.createElement("input", { type: "password", name: "password", value: formData.password, onChange: handleChange, required: true })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Contact Phone:"),
                    React.createElement("input", { type: "text", name: "contact_phone", value: formData.contact_phone, onChange: handleChange, required: true })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Address:"),
                    React.createElement("input", { type: "text", name: "address", value: formData.address, onChange: handleChange, required: true })),
                React.createElement("button", { type: "submit", className: styles.button }, "Register")),
            loading && React.createElement("p", null, "Loading..."),
            error && React.createElement("p", null, error),
            token && React.createElement("p", null, "Registration successful!"))));
};
export default Register;
