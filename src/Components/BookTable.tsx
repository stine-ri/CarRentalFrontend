// components/BookTable.tsx
import React from 'react';
import styles from './BookTable.module.css';

// Define the Book interface
interface Book {
  id?: number;
  user_id: number;
  vehicle_id: number;
  location_id: number;
  booking_date: string;
  return_date: string;
  total_amount: string;
  booking_status: string;
}

interface BookTableProps {
  bookData: Book[];
  onUpdate: (book: Book) => void;
  onDelete: (bookId: number) => void;
}

const BookTable: React.FC<BookTableProps> = ({ bookData, onUpdate, onDelete }) => {
  return (
    <table className={styles.bookTable}>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>User ID</th>
          <th>Vehicle ID</th>
          <th>Location ID</th>
          <th>Booking Date</th>
          <th>Return Date</th>
          <th>Total Amount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookData.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.user_id}</td>
            <td>{book.vehicle_id}</td>
            <td>{book.location_id}</td>
            <td>{book.booking_date}</td>
            <td>{book.return_date}</td>
            <td>{book.total_amount}</td>
            <td>{book.booking_status}</td>
            <td>
              <button className={styles.updateButton} onClick={() => onUpdate(book)}>
                Update
              </button>
              <button className={styles.deleteButton} onClick={() => onDelete(book.id!)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;