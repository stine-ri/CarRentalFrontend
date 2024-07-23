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
import { useDispatch, useSelector } from 'react-redux';
import { fetchFleetData, updateFleetData, deleteFleetData } from '../redux/actions//fleetManagementAction';
import FleetTable from './FleetTable'; // Ensure this path is correct
import styles from './FleetManagement.module.css';
var FleetManagement = function () {
    var dispatch = useDispatch();
    var _a = useSelector(function (state) { return state.fleetManagement; }) || {}, fleetData = _a.fleetData, loading = _a.loading, error = _a.error;
    var _b = useState(null), editableFleet = _b[0], setEditableFleet = _b[1];
    var _c = useState({
        vehicle_id: 0,
        acquisition_date: '',
        depreciation_rate: 0,
        current_value: 0,
        maintenance_cost: 0,
        status: '',
    }), fleetDetails = _c[0], setFleetDetails = _c[1];
    useEffect(function () {
        dispatch(fetchFleetData());
    }, [dispatch]);
    useEffect(function () {
        console.log('Fleet Data:', fleetData);
    }, [fleetData]);
    var handleUpdateFleetClick = function (fleet) {
        setEditableFleet(fleet);
        setFleetDetails({
            vehicle_id: fleet.vehicle_id,
            acquisition_date: fleet.acquisition_date,
            depreciation_rate: fleet.depreciation_rate,
            current_value: fleet.current_value,
            maintenance_cost: fleet.maintenance_cost,
            status: fleet.status,
        });
    };
    var handleFleetChange = function (e) {
        var _a;
        setFleetDetails(__assign(__assign({}, fleetDetails), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleFleetSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!editableFleet) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, dispatch(updateFleetData(__assign({ fleet_id: editableFleet.fleet_id }, fleetDetails)))];
                case 2:
                    _a.sent();
                    alert('Fleet data updated successfully!');
                    setEditableFleet(null);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error('Failed to update fleet data:', err_1.message);
                    alert('Failed to update fleet data. Please try again.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteFleet = function (fleet_id) { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, dispatch(deleteFleetData(fleet_id))];
                case 1:
                    _a.sent();
                    alert('Fleet data deleted successfully!');
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.error('Failed to delete fleet data:', err_2.message);
                    alert('Failed to delete fleet data. Please try again.');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (loading) {
        return React.createElement("p", null, "Loading...");
    }
    if (error) {
        return React.createElement("p", { className: styles['error-message'] },
            "Error: ",
            error);
    }
    return (React.createElement("div", { className: styles['fleet-management'] },
        React.createElement("h2", null, "Fleet Management"),
        editableFleet ? (React.createElement("form", { onSubmit: handleFleetSubmit, className: styles['update-form'] },
            React.createElement("div", null,
                React.createElement("label", null,
                    "Vehicle ID:",
                    React.createElement("input", { type: "number", name: "vehicle_id", value: fleetDetails.vehicle_id, onChange: handleFleetChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Acquisition Date:",
                    React.createElement("input", { type: "date", name: "acquisition_date", value: fleetDetails.acquisition_date, onChange: handleFleetChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Depreciation Rate:",
                    React.createElement("input", { type: "number", name: "depreciation_rate", value: fleetDetails.depreciation_rate, onChange: handleFleetChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Current Value:",
                    React.createElement("input", { type: "number", name: "current_value", value: fleetDetails.current_value, onChange: handleFleetChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Maintenance Cost:",
                    React.createElement("input", { type: "number", name: "maintenance_cost", value: fleetDetails.maintenance_cost, onChange: handleFleetChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Status:",
                    React.createElement("input", { type: "text", name: "status", value: fleetDetails.status, onChange: handleFleetChange }))),
            React.createElement("button", { type: "submit", className: styles['submit-button'] }, "Update Fleet"),
            React.createElement("button", { type: "button", onClick: function () { return setEditableFleet(null); }, className: styles['cancel-button'] }, "Cancel"))) : (React.createElement(FleetTable, { fleetData: fleetData, onUpdate: handleUpdateFleetClick, onDelete: handleDeleteFleet }))));
};
export default FleetManagement;
