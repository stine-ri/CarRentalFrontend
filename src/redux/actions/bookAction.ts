import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the Book interface with booking_id required
interface Book {
  booking_id: number; // booking_id is no longer optional
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
  const response = await fetch('https://api-vehiclebackend.onrender.com/api/Bookings');
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
  async (book: Omit<Book, 'booking_id'>) => {
    const response = await fetch('https://api-vehiclebackend.onrender.com/api/Bookings', {
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

    // Expect the response to include the booking_id
    const createdBook: Book = await response.json();
    return createdBook; // Return the complete Book object, including booking_id
  }
);

// Update Book
export const updateBook = createAsyncThunk(
  'books/updateBook',
  async ({ bookId, bookData }: { bookId: number; bookData: Omit<Book, 'booking_id'> }) => {
    const response = await fetch(`https://api-vehiclebackend.onrender.com/api/Bookings/${bookId}`, {
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

    const updatedBook: Book = await response.json();
    return updatedBook; // Return the updated Book object
  }
);

// Delete Book
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId: number) => {
    const response = await fetch(`https://api-vehiclebackend.onrender.com/api/Bookings/${bookId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to delete book');
    }

    return bookId; // Return the deleted bookId
  }
);
