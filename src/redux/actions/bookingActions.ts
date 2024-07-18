export const bookVehicle = (bookingData: any) => async (dispatch: any) => {
    dispatch({ type: 'BOOK_VEHICLE_REQUEST' });
  
    try {
      const response = await fetch('http://localhost:3000/api/Bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
  
      const data = await response.json();
      console.log('Response Data:', data);
      if (data.success) {
        dispatch({ type: 'BOOK_VEHICLE_SUCCESS', payload: data.booking });
      } else {
        dispatch({ type: 'BOOK_VEHICLE_FAILURE', payload: data.message });
      }
    } catch (error: any) {
      dispatch({ type: 'BOOK_VEHICLE_FAILURE', payload: error.message });
    }
  };
  