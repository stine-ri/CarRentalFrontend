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
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { updateUserDetails } from '../redux/actions/ProfileAction';
import styles from './UpdateProfile.module.css';
var UserUpdateForm = function () {
    var dispatch = useAppDispatch();
    var user = useAppSelector(function (state) { return state.user; });
    var _a = useState({
        email: user.email,
        fullname: user.fullname,
        password: '',
        contact_phone: user.contact_phone,
        address: user.address,
    }), formData = _a[0], setFormData = _a[1];
    var _b = useState(''), successMessage = _b[0], setSuccessMessage = _b[1];
    var handleChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[name] = value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        dispatch(updateUserDetails({ userId: Number(user.id), userData: formData }))
            .unwrap()
            .then(function () {
            setSuccessMessage('Update was successful');
        })
            .catch(function (error) {
            setSuccessMessage("Update failed: ".concat(error.message));
        });
    };
    return (React.createElement("div", { className: styles.updateFormContainer },
        React.createElement("form", { onSubmit: handleSubmit, className: styles.updateForm },
            React.createElement("label", null,
                "Email:",
                React.createElement("input", { type: "email", name: "email", value: formData.email, onChange: handleChange })),
            React.createElement("label", null,
                "Full Name:",
                React.createElement("input", { type: "text", name: "fullname", value: formData.fullname, onChange: handleChange })),
            React.createElement("label", null,
                "Password:",
                React.createElement("input", { type: "password", name: "password", value: formData.password, onChange: handleChange })),
            React.createElement("label", null,
                "Contact Phone:",
                React.createElement("input", { type: "text", name: "contact_phone", value: formData.contact_phone, onChange: handleChange })),
            React.createElement("label", null,
                "Address:",
                React.createElement("input", { type: "text", name: "address", value: formData.address, onChange: handleChange })),
            React.createElement("button", { type: "submit" }, "Update")),
        successMessage && React.createElement("p", { className: styles.successMessage }, successMessage)));
};
export default UserUpdateForm;
