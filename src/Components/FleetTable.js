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
import styles from './FleetTable.module.css'; // Import CSS module
var FleetTable = function (_a) {
    var fleetData = _a.fleetData, onUpdate = _a.onUpdate, onDelete = _a.onDelete;
    var _b = useState(null), editableRecord = _b[0], setEditableRecord = _b[1];
    var _c = useState(null), formValues = _c[0], setFormValues = _c[1];
    var handleEdit = function (record) {
        setEditableRecord(record);
        setFormValues(__assign({}, record));
    };
    var handleFormChange = function (e) {
        var _a;
        if (formValues) {
            setFormValues(__assign(__assign({}, formValues), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        }
    };
    var handleUpdate = function () {
        if (formValues) {
            onUpdate(formValues);
            setEditableRecord(null);
            setFormValues(null);
        }
    };
    var handleCancelEdit = function () {
        setEditableRecord(null);
        setFormValues(null);
    };
    return (React.createElement("table", { className: styles.table },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "Fleet ID"),
                React.createElement("th", null, "Vehicle ID"),
                React.createElement("th", null, "Acquisition Date"),
                React.createElement("th", null, "Depreciation Rate"),
                React.createElement("th", null, "Current Value"),
                React.createElement("th", null, "Maintenance Cost"),
                React.createElement("th", null, "Status"),
                React.createElement("th", null, "Actions"))),
        React.createElement("tbody", null, fleetData.map(function (record) { return (React.createElement("tr", { key: record.fleet_id },
            React.createElement("td", null, record.fleet_id),
            React.createElement("td", null, record.vehicle_id),
            React.createElement("td", null, record.acquisition_date),
            React.createElement("td", null, record.depreciation_rate),
            React.createElement("td", null, record.current_value),
            React.createElement("td", null, record.maintenance_cost),
            React.createElement("td", null, record.status),
            React.createElement("td", null, editableRecord && editableRecord.fleet_id === record.fleet_id ? (React.createElement(React.Fragment, null,
                React.createElement("input", { type: "number", name: "vehicle_id", value: (formValues === null || formValues === void 0 ? void 0 : formValues.vehicle_id) || '', onChange: handleFormChange }),
                React.createElement("input", { type: "date", name: "acquisition_date", value: (formValues === null || formValues === void 0 ? void 0 : formValues.acquisition_date) || '', onChange: handleFormChange }),
                React.createElement("input", { type: "number", name: "depreciation_rate", value: (formValues === null || formValues === void 0 ? void 0 : formValues.depreciation_rate) || '', onChange: handleFormChange }),
                React.createElement("input", { type: "number", name: "current_value", value: (formValues === null || formValues === void 0 ? void 0 : formValues.current_value) || '', onChange: handleFormChange }),
                React.createElement("input", { type: "number", name: "maintenance_cost", value: (formValues === null || formValues === void 0 ? void 0 : formValues.maintenance_cost) || '', onChange: handleFormChange }),
                React.createElement("input", { type: "text", name: "status", value: (formValues === null || formValues === void 0 ? void 0 : formValues.status) || '', onChange: handleFormChange }),
                React.createElement("button", { onClick: handleUpdate, className: styles.button }, "Update"),
                React.createElement("button", { onClick: handleCancelEdit, className: styles.button }, "Cancel"))) : (React.createElement(React.Fragment, null,
                React.createElement("button", { onClick: function () { return handleEdit(record); }, className: styles.button }, "Edit"),
                React.createElement("button", { onClick: function () { return onDelete(record.fleet_id); }, className: styles.button }, "Delete")))))); }))));
};
export default FleetTable;
