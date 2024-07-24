import React, { useState, useEffect } from 'react';
import styles from './Reports.module.css';

interface Rental {
  rental_id: string;
  vehicle_id: string;
  customer_name: string;
  rental_date: string;
  return_date: string;
  status: string; // e.g., "Ongoing", "Completed"
}

const ReportComponent: React.FC = () => {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [summary, setSummary] = useState({
    totalRentals: 0,
    ongoingRentals: 0,
    completedRentals: 0,
  });

  useEffect(() => {
    // Mock data for rentals
    const mockRentals = [
      {
        rental_id: '1',
        vehicle_id: 'AB-1234',
        customer_name: 'John Doe',
        rental_date: '2024-07-01',
        return_date: '2024-07-10',
        status: 'Completed',
      },
      {
        rental_id: '2',
        vehicle_id: 'BC-5678',
        customer_name: 'Jane Smith',
        rental_date: '2024-07-05',
        return_date: '2024-07-15',
        status: 'Ongoing',
      },
      {
        rental_id: '3',
        vehicle_id: 'CD-9012',
        customer_name: 'Alice Johnson',
        rental_date: '2024-07-10',
        return_date: '2024-07-20',
        status: 'Ongoing',
      },
    ];

    setRentals(mockRentals);
    setSummary({
      totalRentals: mockRentals.length,
      ongoingRentals: mockRentals.filter((rental) => rental.status === 'Ongoing').length,
      completedRentals: mockRentals.filter((rental) => rental.status === 'Completed').length,
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Stine Rental Report</h2>
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <h3>Total Rentals</h3>
          <p>{summary.totalRentals}</p>
        </div>
        <div className={styles.summaryItem}>
          <h3>Ongoing Rentals</h3>
          <p>{summary.ongoingRentals}</p>
        </div>
        <div className={styles.summaryItem}>
          <h3>Completed Rentals</h3>
          <p>{summary.completedRentals}</p>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Rental ID</th>
            <th>Vehicle ID</th>
            <th>Customer Name</th>
            <th>Rental Date</th>
            <th>Return Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((rental) => (
            <tr key={rental.rental_id}>
              <td>{rental.rental_id}</td>
              <td>{rental.vehicle_id}</td>
              <td>{rental.customer_name}</td>
              <td>{rental.rental_date}</td>
              <td>{rental.return_date}</td>
              <td className={rental.status === 'Ongoing' ? styles.ongoing : styles.completed}>
                {rental.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportComponent;
