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
import styles from './ManageVehicles.module.css';
import { fetchVehicles, deleteVehicle, updateVehicle } from '../redux/actions/VehicleAction';
var ManageVehicles = function () {
    var dispatch = useDispatch();
    var _a = useSelector(function (state) { return state.vehicles; }) || {}, vehicles = _a.vehicles, loading = _a.loading, error = _a.error;
    var _b = useState(null), editableVehicle = _b[0], setEditableVehicle = _b[1];
    var _c = useState({
        manufacturer: '',
        model: '',
        year: '',
        fuel_type: '',
        engine_capacity: '',
        transmission: '',
        seating_capacity: '',
        color: '',
        features: '',
    }), vehicleData = _c[0], setVehicleData = _c[1];
    useEffect(function () {
        console.log('Dispatching fetchVehicles');
        dispatch(fetchVehicles()); // Call without arguments
        console.log('Dispatched fetchVehicles');
    }, [dispatch]);
    useEffect(function () {
        console.log('Vehicles:', vehicles);
    }, [vehicles]);
    var handleUpdateVehicleClick = function (vehicle) {
        setEditableVehicle(vehicle);
        setVehicleData({
            manufacturer: vehicle.manufacturer,
            model: vehicle.model,
            year: vehicle.year,
            fuel_type: vehicle.fuel_type,
            engine_capacity: vehicle.engine_capacity,
            transmission: vehicle.transmission,
            seating_capacity: vehicle.seating_capacity,
            color: vehicle.color,
            features: vehicle.features,
        });
    };
    var handleUpdateVehicleChange = function (e) {
        var _a;
        setVehicleData(__assign(__assign({}, vehicleData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleUpdateVehicleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!editableVehicle) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, dispatch(updateVehicle({ vehicleId: editableVehicle.id, vehicleData: vehicleData }))];
                case 2:
                    _a.sent();
                    alert('Vehicle updated successfully!');
                    setEditableVehicle(null);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error('Failed to update vehicle:', err_1.message);
                    alert('Failed to update vehicle. Please try again.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteVehicle = function (vehicleId) { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, dispatch(deleteVehicle(vehicleId))];
                case 1:
                    _a.sent();
                    alert('Vehicle deleted successfully!');
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.error('Failed to delete vehicle:', err_2.message);
                    alert('Failed to delete vehicle. Please try again.');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    console.log('Vehicles:', vehicles); // Check vehicles state
    if (loading) {
        return React.createElement("p", null, "Loading...");
    }
    if (error) {
        return React.createElement("p", { className: styles['error-message'] },
            "Error: ",
            error);
    }
    return (React.createElement("div", { className: styles['manage-vehicles'] },
        React.createElement("h2", null, "Manage Vehicles"),
        editableVehicle ? (React.createElement("form", { onSubmit: handleUpdateVehicleSubmit, className: styles['update-form'] },
            React.createElement("div", null,
                React.createElement("label", null,
                    "Manufacturer:",
                    React.createElement("input", { type: "text", name: "manufacturer", value: vehicleData.manufacturer, onChange: handleUpdateVehicleChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Model:",
                    React.createElement("input", { type: "text", name: "model", value: vehicleData.model, onChange: handleUpdateVehicleChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Year:",
                    React.createElement("input", { type: "number", name: "year", value: vehicleData.year, onChange: handleUpdateVehicleChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Fuel Type:",
                    React.createElement("input", { type: "text", name: "fuel_type", value: vehicleData.fuel_type, onChange: handleUpdateVehicleChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Engine Capacity:",
                    React.createElement("input", { type: "text", name: "engine_capacity", value: vehicleData.engine_capacity, onChange: handleUpdateVehicleChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Transmission:",
                    React.createElement("input", { type: "text", name: "transmission", value: vehicleData.transmission, onChange: handleUpdateVehicleChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Seating Capacity:",
                    React.createElement("input", { type: "number", name: "seating_capacity", value: vehicleData.seating_capacity, onChange: handleUpdateVehicleChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Color:",
                    React.createElement("input", { type: "text", name: "color", value: vehicleData.color, onChange: handleUpdateVehicleChange }))),
            React.createElement("div", null,
                React.createElement("label", null,
                    "Features:",
                    React.createElement("input", { type: "text", name: "features", value: vehicleData.features, onChange: handleUpdateVehicleChange }))),
            React.createElement("button", { type: "submit", className: styles['submit-button'] }, "Update Vehicle"),
            React.createElement("button", { type: "button", onClick: function () { return setEditableVehicle(null); }, className: styles['cancel-button'] }, "Cancel"))) : (React.createElement(React.Fragment, null, vehicles && vehicles.length > 0 ? (React.createElement("ul", null, vehicles.map(function (vehicle) { return (React.createElement("li", { key: vehicle.id, className: styles['vehicle-item'] },
            vehicle.manufacturer,
            " ",
            vehicle.model,
            " (",
            vehicle.year,
            ")",
            React.createElement("button", { className: styles['update-button'], onClick: function () { return handleUpdateVehicleClick(vehicle); } }, "Update"),
            React.createElement("button", { className: styles['delete-button'], onClick: function () { return handleDeleteVehicle(vehicle.id); } }, "Delete"))); }))) : (React.createElement("p", null, "No vehicles found."))))));
};
export default ManageVehicles;
