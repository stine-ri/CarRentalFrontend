import React, { useState } from 'react';
import styles from './BookingHistory.module.css';

interface Booking {
  id: number;
  userId: number;
  userName: string;
  vehicleName: string;
  bookingDate: string;
  isCurrent: boolean;
  status: string;
  type: string;
  cost: number;
}

const bookings: Booking[] = [
  { id: 1, userId: 1, userName: 'User One', vehicleName: 'Cadillac', bookingDate: '2024-05-15', isCurrent: false, status: 'Incomplete', type: 'tour', cost: 240 },
  { id: 2, userId: 2, userName: 'User Two', vehicleName: 'Cadillac', bookingDate: '2024-05-20', isCurrent: false, status: 'Incomplete', type: 'activity', cost: 100 },
  { id: 3, userId: 1, userName: 'User One', vehicleName: 'Audi', bookingDate: '2024-07-23', isCurrent: true, status: 'Completed', type: 'tour', cost: 150 }
];

const BookingHistory: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredBookings = activeTab === 'ALL' ? bookings : bookings.filter(booking => booking.status.toUpperCase() === activeTab);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Booking History</h2>

      <div className={styles.tabs}>
        {['ALL', 'PENDING', 'COMPLETED', 'INCOMPLETE', 'CANCELLED'].map(tab => (
          <div
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Type</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.vehicleName}</td>
                <td>{booking.type}</td>
                <td>€{booking.cost.toFixed(2)}</td>
                <td className={`${styles.status} ${booking.status === 'Completed' ? styles.completed : ''}`}>{booking.status}</td>
                <td><button className={styles.detailsButton}>Details</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className={styles.noData}>No bookings available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
