// reducers/bookReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks, createBook, updateBook, deleteBook } from '../actions/bookAction';

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

interface BookState {
  loading: boolean;
  books: Book[];
  error: string | null;
}

const initialState: BookState = {
  loading: false,
  books: [],
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch books';
      })
      .addCase(createBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.books.push(action.payload); // The backend should return the book with an id
      })
      .addCase(updateBook.fulfilled, (state, action: PayloadAction<Book>) => {
        const index = state.books.findIndex(book => book.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(deleteBook.fulfilled, (state, action: PayloadAction<number>) => {
        state.books = state.books.filter(book => book.id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
