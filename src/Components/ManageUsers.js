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
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchUsers, updateUser, deleteUser } from '../redux/actions/userAction';
import UserTable from '../Components/UsersTable';
import styles from './ManageUsers.module.css';
var ManageUsers = function () {
    var dispatch = useAppDispatch();
    var _a = useAppSelector(function (state) { return state.users; }), users = _a.users, loading = _a.loading, error = _a.error;
    var _b = useState(null), editableUser = _b[0], setEditableUser = _b[1];
    var _c = useState({
        id: 0,
        full_name: '',
        email: '',
        contact_phone: '',
        address: '',
        role: '',
        created_at: '',
        updated_at: '',
    }), userData = _c[0], setUserData = _c[1];
    useEffect(function () {
        dispatch(fetchUsers());
    }, [dispatch]);
    var handleUpdateUserClick = function (user) {
        setEditableUser(user);
        setUserData(user);
    };
    var handleUserChange = function (e) {
        var _a;
        setUserData(__assign(__assign({}, userData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleUpdateUserSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!editableUser) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, dispatch(updateUser({ userId: userData.id, userData: userData }))];
                case 2:
                    _a.sent();
                    alert('User updated successfully!');
                    setEditableUser(null);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error('Failed to update user:', err_1.message);
                    alert('Failed to update user. Please try again.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, dispatch(deleteUser(userId))];
                case 1:
                    _a.sent();
                    alert('User deleted successfully!');
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.error('Failed to delete user:', err_2.message);
                    alert('Failed to delete user. Please try again.');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (loading) {
        return React.createElement("p", null, "Loading...");
    }
    if (error) {
        return React.createElement("p", { className: styles.error },
            "Error: ",
            error);
    }
    return (React.createElement("div", { className: styles.manageUsers },
        React.createElement("h2", null, "Manage Users"),
        editableUser ? (React.createElement("form", { onSubmit: handleUpdateUserSubmit, className: styles.updateForm },
            React.createElement("div", null,
                React.createElement("label", null,
                    "Full Name:",
                    React.createElement("input", { type: "text", name: "full_name", value: userData.full_name, onChange: handleUserChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Email:",
                    React.createElement("input", { type: "email", name: "email", value: userData.email, onChange: handleUserChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Contact Phone:",
                    React.createElement("input", { type: "text", name: "contact_phone", value: userData.contact_phone, onChange: handleUserChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Address:",
                    React.createElement("input", { type: "text", name: "address", value: userData.address, onChange: handleUserChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Role:",
                    React.createElement("input", { type: "text", name: "role", value: userData.role, onChange: handleUserChange }))),
            React.createElement("button", { type: "submit", className: styles.submitButton }, "Update User"),
            React.createElement("button", { type: "button", onClick: function () { return setEditableUser(null); }, className: styles.cancelButton }, "Cancel"))) : (React.createElement(UserTable, { userData: users, onUpdate: handleUpdateUserClick, onDelete: handleDeleteUser }))));
};
export default ManageUsers;
