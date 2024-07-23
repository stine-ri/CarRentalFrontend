// actions/bookActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';

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

// Fetch Books
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch('http://localhost:3000/api/Bookings');
  if (!response.ok) {
    const jsonResponse = await response.json();
    throw new Error(jsonResponse.message || 'Network response was not ok');
  }
  const jsonResponse: Book[] = await response.json();
  return jsonResponse;
});

// Create Book
export const createBook = createAsyncThunk(
  'books/createBook',
  async (book: Book) => {
    const response = await fetch('http://localhost:3000/api/Bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to create book');
    }

    return await response.json();
  }
);

// Update Book
export const updateBook = createAsyncThunk(
  'books/updateBook',
  async ({ bookId, bookData }: { bookId: number; bookData: Partial<Book> }) => {
    const response = await fetch(`http://localhost:3000/api/Bookings/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to update book');
    }

    return await response.json();
  }
);

// Delete Book
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId: number) => {
    const response = await fetch(`http://localhost:3000/api/Bookings/${bookId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to delete book');
    }

    return bookId;
  }
);
