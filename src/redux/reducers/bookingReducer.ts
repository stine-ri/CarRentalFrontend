interface BookingState{
  loading:boolean;
  booking:any;
  error:string | null;
  
}
const initialState = {
    booking: null,
    loading: false,
    error: null,
  };
  
  const bookingReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'BOOK_VEHICLE_REQUEST':
        return { ...state, loading: true };
  
      case 'BOOK_VEHICLE_SUCCESS':
        return { ...state, loading: false, booking: action.payload , error:null};
  
      case 'BOOK_VEHICLE_FAILURE':
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default bookingReducer;
  