import React from 'react';
import styles from './UsersTable.module.css';
var UserTable = function (_a) {
    var userData = _a.userData, onUpdate = _a.onUpdate, onDelete = _a.onDelete;
    return (React.createElement("table", { className: styles.userTable },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "User ID"),
                React.createElement("th", null, "Full Name"),
                React.createElement("th", null, "Email"),
                React.createElement("th", null, "Contact Phone"),
                React.createElement("th", null, "Address"),
                React.createElement("th", null, "Role"),
                React.createElement("th", null, "Created At"),
                React.createElement("th", null, "Updated At"),
                React.createElement("th", null, "Actions"))),
        React.createElement("tbody", null, userData.map(function (user) { return (React.createElement("tr", { key: user.id },
            React.createElement("td", null, user.id),
            React.createElement("td", null, user.full_name),
            React.createElement("td", null, user.email),
            React.createElement("td", null, user.contact_phone),
            React.createElement("td", null, user.address),
            React.createElement("td", null, user.role),
            React.createElement("td", null, user.created_at),
            React.createElement("td", null, user.updated_at),
            React.createElement("td", null,
                React.createElement("button", { className: styles.updateButton, onClick: function () { return onUpdate(user); } }, "Update"),
                React.createElement("button", { className: styles.deleteButton, onClick: function () { return onDelete(user.id); } }, "Delete")))); }))));
};
export default UserTable;
