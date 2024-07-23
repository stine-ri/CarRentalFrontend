interface BookingState {
  loading: boolean;
  bookings: any[];
  error: string | null;
  booking: any;
}

const initialState: BookingState = {
  bookings: [],
  loading: false,
  error: null,
  booking: null,
};

const bookingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'BOOK_VEHICLE_REQUEST':
      return { ...state, loading: true };

    case 'BOOK_VEHICLE_SUCCESS':
      return {
        ...state,
        loading: false,
        bookings: [...state.bookings, action.payload],
        booking: action.payload,
        error: null,
      };

    case 'BOOK_VEHICLE_FAILURE':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default bookingReducer;
