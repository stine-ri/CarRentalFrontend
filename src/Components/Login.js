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
import { loginUser } from '../redux/actions/authActions';
import styles from './Login.module.css';
import { useAppDispatch } from '../hooks/hooks';
import { useNavigate, Link } from 'react-router-dom';
var Login = function () {
    var _a = useState({ email: '', password: '' }), credentials = _a[0], setCredentials = _a[1];
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    var _b = useSelector(function (state) { return state.auth; }), loading = _b.loading, error = _b.error;
    var handleChange = function (e) {
        var _a;
        setCredentials(__assign(__assign({}, credentials), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var resultAction, role;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, dispatch(loginUser(credentials))];
                case 1:
                    resultAction = _a.sent();
                    if (loginUser.fulfilled.match(resultAction)) {
                        role = localStorage.getItem('userRole');
                        console.log('Role after login:', role); // Debug role
                        if (role === 'admin') {
                            navigate('/admin'); // Redirect to admin dashboard
                        }
                        else {
                            navigate('/user-dashboard-overview'); // Redirect to user home
                        }
                    }
                    else {
                        console.error('Login failed:', resultAction.payload);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: styles.loginContainer },
        React.createElement("div", { className: styles.loginBox },
            React.createElement("h2", null, "Login Form"),
            React.createElement("form", { onSubmit: handleSubmit, className: styles.form },
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Email:"),
                    React.createElement("input", { type: "email", name: "email", value: credentials.email, onChange: handleChange, required: true })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Password:"),
                    React.createElement("input", { type: "password", name: "password", value: credentials.password, onChange: handleChange, required: true })),
                React.createElement("div", { className: styles.rememberGroup },
                    React.createElement("input", { type: "checkbox" }),
                    React.createElement("label", null, "Remember")),
                React.createElement("button", { type: "submit", className: styles.button }, "Login")),
            React.createElement("p", { className: styles.registerLink },
                "Don't have an account? ",
                React.createElement(Link, { to: "/register" }, "Register")),
            loading && React.createElement("p", null, "Loading..."),
            error && React.createElement("p", null, error))));
};
export default Login;
