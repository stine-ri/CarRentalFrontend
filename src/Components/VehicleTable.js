import React from 'react';
import styles from './Vehicle.module.css'; // Import the CSS module for styling
var VehicleTable = function (_a) {
    var vehicles = _a.vehicles, onUpdate = _a.onUpdate, onDelete = _a.onDelete;
    return (React.createElement("table", { className: styles.vehicleTable },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "ID"),
                React.createElement("th", null, "Manufacturer"),
                React.createElement("th", null, "Model"),
                React.createElement("th", null, "Year"),
                React.createElement("th", null, "Fuel Type"),
                React.createElement("th", null, "Engine Capacity"),
                React.createElement("th", null, "Transmission"),
                React.createElement("th", null, "Seating Capacity"),
                React.createElement("th", null, "Color"),
                React.createElement("th", null, "Features"),
                React.createElement("th", null, "Actions"))),
        React.createElement("tbody", null, vehicles.map(function (vehicle) { return (React.createElement("tr", { key: vehicle.id },
            React.createElement("td", null, vehicle.id),
            React.createElement("td", null, vehicle.manufacturer),
            React.createElement("td", null, vehicle.model),
            React.createElement("td", null, vehicle.year),
            React.createElement("td", null, vehicle.fuel_type || 'N/A'),
            React.createElement("td", null, vehicle.engine_capacity || 'N/A'),
            React.createElement("td", null, vehicle.transmission),
            React.createElement("td", null, vehicle.seating_capacity || 'N/A'),
            React.createElement("td", null, vehicle.color),
            React.createElement("td", null, vehicle.features),
            React.createElement("td", null,
                React.createElement("button", { className: styles.actionButton, onClick: function () { return onUpdate(vehicle.id, { manufacturer: 'New Manufacturer', model: 'New Model' }); } }, "Update"),
                React.createElement("button", { className: styles.actionButton, onClick: function () { return onDelete(vehicle.id); } }, "Delete")))); }))));
};
export default VehicleTable;
