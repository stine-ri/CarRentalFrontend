// components/ManageBooks.tsx
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchBooks, updateBook, deleteBook, createBook } from '../redux/actions/bookAction';
import BookTable from './BookTable';
import styles from './ManageBooks.module.css';

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

const ManageBooks: React.FC = () => {
  const dispatch = useAppDispatch();
  const { books, loading, error } = useAppSelector((state) => state.books);

  const [editableBook, setEditableBook] = useState<Book | null>(null);
  const [bookData, setBookData] = useState<Book>({
    user_id: 0,
    vehicle_id: 0,
    location_id: 0,
    booking_date: '',
    return_date: '',
    total_amount: '',
    booking_status: '',
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleUpdateBookClick = (book: Book) => {
    setEditableBook(book);
    setBookData(book);
  };

  const handleBookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleUpdateBookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editableBook) {
      try {
        await dispatch(updateBook({ bookId: bookData.id!, bookData: bookData }));
        alert('Book updated successfully!');
        setEditableBook(null);
      } catch (err) {
        console.error('Failed to update book:', (err as Error).message);
        alert('Failed to update book. Please try again.');
      }
    }
  };

  const handleDeleteBook = async (bookId: number) => {
    try {
      await dispatch(deleteBook(bookId));
      alert('Book deleted successfully!');
    } catch (err) {
      console.error('Failed to delete book:', (err as Error).message);
      alert('Failed to delete book. Please try again.');
    }
  };

  const handleCreateBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(createBook(bookData));
      alert('Book created successfully!');
      setBookData({
        user_id: 0,
        vehicle_id: 0,
        location_id: 0,
        booking_date: '',
        return_date: '',
        total_amount: '',
        booking_status: '',
      });
    } catch (err) {
      console.error('Failed to create book:', (err as Error).message);
      alert('Failed to create book. Please try again.');
    }
  };

  return (
    <div className={styles.manageBooksContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <BookTable bookData={books} onUpdate={handleUpdateBookClick} onDelete={handleDeleteBook} />
          {editableBook && (
            <form className={styles.bookForm} onSubmit={handleUpdateBookSubmit}>
              <h2>Update Book</h2>
              <input type="number" name="user_id" value={bookData.user_id} onChange={handleBookChange} />
              <input type="number" name="vehicle_id" value={bookData.vehicle_id} onChange={handleBookChange} />
              <input type="number" name="location_id" value={bookData.location_id} onChange={handleBookChange} />
              <input type="date" name="booking_date" value={bookData.booking_date} onChange={handleBookChange} />
              <input type="date" name="return_date" value={bookData.return_date} onChange={handleBookChange} />
              <input type="text" name="total_amount" value={bookData.total_amount} onChange={handleBookChange} />
              <input type="text" name="booking_status" value={bookData.booking_status} onChange={handleBookChange} />
              <button type="submit">Update Book</button>
            </form>
          )}
          <form className={styles.bookForm} onSubmit={handleCreateBook}>
            <h2>Create Book</h2>
            <input type="number" name="user_id" value={bookData.user_id} onChange={handleBookChange} />
            <input type="number" name="vehicle_id" value={bookData.vehicle_id} onChange={handleBookChange} />
            <input type="number" name="location_id" value={bookData.location_id} onChange={handleBookChange} />
            <input type="date" name="booking_date" value={bookData.booking_date} onChange={handleBookChange} />
            <input type="date" name="return_date" value={bookData.return_date} onChange={handleBookChange} />
            <input type="text" name="total_amount" value={bookData.total_amount} onChange={handleBookChange} />
            <input type="text" name="booking_status" value={bookData.booking_status} onChange={handleBookChange} />
            <button type="submit">Create Book</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ManageBooks;
