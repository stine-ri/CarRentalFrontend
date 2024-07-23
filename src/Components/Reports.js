import React, { useState } from 'react';
import styles from './Reports.module.css';
import carImage from '../assets/images/cadillac.webp'; // Import the car image
var Report = function () {
    // Placeholder data
    var _a = useState({
        totalRevenue: 25000,
        revenueByVehicleType: { SUV: 10000, Sedan: 8000, Truck: 7000 },
        paymentMethods: { CreditCard: 15000, PayPal: 7000, Mpesa: 3000 },
        topSellingProduct: 'Sedan',
        monthlyRevenue: {
            Jan: 2000,
            Feb: 1800,
            Mar: 2200,
            Apr: 2500,
            May: 2700,
            Jun: 3000,
            Jul: 3200,
            Aug: 3500,
            Sep: 3300,
            Oct: 3100,
            Nov: 2900,
            Dec: 3600,
        },
    }), financials = _a[0], setFinancials = _a[1];
    var handleAddReport = function () {
        // Logic to add a new report
        alert('Add new report functionality is not implemented yet.');
    };
    return (React.createElement("div", { className: styles.reportContainer },
        React.createElement("h2", null, "Reports"),
        React.createElement("div", { className: styles.reportCard },
            React.createElement("h3", null, "Total Revenue"),
            React.createElement("p", null,
                "$",
                financials.totalRevenue.toLocaleString())),
        React.createElement("div", { className: styles.reportCard },
            React.createElement("h3", null, "Revenue by Vehicle Type"),
            React.createElement("p", null,
                "SUV: $",
                financials.revenueByVehicleType.SUV.toLocaleString()),
            React.createElement("p", null,
                "Sedan: $",
                financials.revenueByVehicleType.Sedan.toLocaleString()),
            React.createElement("p", null,
                "Truck: $",
                financials.revenueByVehicleType.Truck.toLocaleString())),
        React.createElement("div", { className: styles.reportCard },
            React.createElement("h3", null, "Payment Methods"),
            React.createElement("p", null,
                "Credit Card: $",
                financials.paymentMethods.CreditCard.toLocaleString()),
            React.createElement("p", null,
                "PayPal: $",
                financials.paymentMethods.PayPal.toLocaleString()),
            React.createElement("p", null,
                "Mpesa: $",
                financials.paymentMethods.Mpesa.toLocaleString())),
        React.createElement("div", { className: styles.reportCard },
            React.createElement("h3", null, "Top Selling Product"),
            React.createElement("div", { className: styles.topSellingContainer },
                React.createElement("img", { src: carImage, alt: "Car", className: styles.carImage }),
                React.createElement("p", null, financials.topSellingProduct))),
        React.createElement("div", { className: styles.reportCard },
            React.createElement("h3", null, "Monthly Revenue"),
            Object.keys(financials.monthlyRevenue).map(function (month) { return (React.createElement("p", { key: month },
                month,
                ": $",
                financials.monthlyRevenue[month].toLocaleString())); })),
        React.createElement("button", { onClick: handleAddReport, className: styles.addButton }, "Add New Report")));
};
export default Report;
