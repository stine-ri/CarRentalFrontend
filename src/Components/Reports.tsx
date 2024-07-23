import React, { useState } from 'react';
import styles from './Reports.module.css';
import carImage from '../assets/images/cadillac.webp'; // Import the car image

// Define types for the report data
interface Financials {
  totalRevenue: number;
  revenueByVehicleType: {
    SUV: number;
    Sedan: number;
    Truck: number;
  };
  paymentMethods: {
    CreditCard: number;
    PayPal: number;
    Mpesa: number;
  };
  topSellingProduct: string;
  monthlyRevenue: {
    Jan: number;
    Feb: number;
    Mar: number;
    Apr: number;
    May: number;
    Jun: number;
    Jul: number;
    Aug: number;
    Sep: number;
    Oct: number;
    Nov: number;
    Dec: number;
  };
}

const Report: React.FC = () => {
  // Placeholder data
  const [financials, setFinancials] = useState<Financials>({
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
  });

  const handleAddReport = () => {
    // Logic to add a new report
    alert('Add new report functionality is not implemented yet.');
  };

  return (
    <div className={styles.reportContainer}>
      <h2>Reports</h2>

      <div className={styles.reportCard}>
        <h3>Total Revenue</h3>
        <p>${financials.totalRevenue.toLocaleString()}</p>
      </div>

      <div className={styles.reportCard}>
        <h3>Revenue by Vehicle Type</h3>
        <p>SUV: ${financials.revenueByVehicleType.SUV.toLocaleString()}</p>
        <p>Sedan: ${financials.revenueByVehicleType.Sedan.toLocaleString()}</p>
        <p>Truck: ${financials.revenueByVehicleType.Truck.toLocaleString()}</p>
      </div>

      <div className={styles.reportCard}>
        <h3>Payment Methods</h3>
        <p>Credit Card: ${financials.paymentMethods.CreditCard.toLocaleString()}</p>
        <p>PayPal: ${financials.paymentMethods.PayPal.toLocaleString()}</p>
        <p>Mpesa: ${financials.paymentMethods.Mpesa.toLocaleString()}</p>
      </div>

      <div className={styles.reportCard}>
        <h3>Top Selling Product</h3>
        <div className={styles.topSellingContainer}>
          <img src={carImage} alt="Car" className={styles.carImage} />
          <p>{financials.topSellingProduct}</p>
        </div>
      </div>

      <div className={styles.reportCard}>
        <h3>Monthly Revenue</h3>
        {Object.keys(financials.monthlyRevenue).map((month) => (
          <p key={month}>{month}: ${financials.monthlyRevenue[month as keyof typeof financials.monthlyRevenue].toLocaleString()}</p>
        ))}
      </div>

      <button onClick={handleAddReport} className={styles.addButton}>Add New Report</button>
    </div>
  );
};

export default Report;
