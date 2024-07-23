// CustomerTable.tsx
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
import styles from './TableComponent.module.css';
var CustomerTable = function (_a) {
    var columns = _a.columns, data = _a.data, onEdit = _a.onEdit, onDelete = _a.onDelete, onUpdate = _a.onUpdate;
    var _b = useState(null), editableRow = _b[0], setEditableRow = _b[1]; // State to track editable row
    var handleEditClick = function (id) {
        var editableData = data.find(function (row) { return row.id === id; });
        if (editableData) {
            setEditableRow(editableData);
            onEdit(id); // Notify parent component of edit action
        }
    };
    var handleSaveClick = function () {
        onUpdate(editableRow); // Update data via Redux action or function passed from parent
        setEditableRow(null); // Clear editable row state after update
    };
    var handleCancelClick = function () {
        setEditableRow(null); // Cancel edit mode
    };
    var handleInputChange = function (e) {
        var _a;
        setEditableRow(__assign(__assign({}, editableRow), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    return (React.createElement("table", { className: styles.table },
        React.createElement("thead", null,
            React.createElement("tr", null,
                columns.map(function (column, index) { return (React.createElement("th", { key: index }, column)); }),
                React.createElement("th", null, "Actions"))),
        React.createElement("tbody", null, data.map(function (row, index) { return (React.createElement("tr", { key: index },
            columns.map(function (column, colIndex) { return (React.createElement("td", { key: colIndex }, editableRow && editableRow.id === row.id ? (React.createElement("input", { type: "text", name: column, value: editableRow[column], onChange: handleInputChange })) : (row[column]))); }),
            React.createElement("td", null,
                editableRow && editableRow.id === row.id ? (React.createElement(React.Fragment, null,
                    React.createElement("button", { onClick: handleSaveClick, className: styles.button }, "Save"),
                    React.createElement("button", { onClick: handleCancelClick, className: styles.button }, "Cancel"))) : (React.createElement("button", { onClick: function () { return handleEditClick(row.id); }, className: styles.button }, "Edit")),
                React.createElement("button", { onClick: function () { return onDelete(row.id); }, className: styles.button }, "Delete")))); }))));
};
export default CustomerTable;
