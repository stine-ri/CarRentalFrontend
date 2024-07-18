import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchVehicles = createAsyncThunk('vehicles/fetchVehicle', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }

    const response = await fetch(`http://localhost:3000/api/vehicleSpecifications`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const jsonResponse = await response.json();
      console.error('Fetch Vehicle Error:', jsonResponse.message);
      throw new Error(jsonResponse.message || 'Network response was not ok');
    }

    const jsonResponse = await response.json();
    console.log('Parsed JSON Response:', jsonResponse); // Log parsed JSON response
    return jsonResponse; // Return the entire JSON response
  } catch (error) {
   console.error('Fetch Vehicles Error:', (error as Error).message);
    throw new Error('Failed to fetch vehicles');
  }
});


export const bookVehicle = createAsyncThunk('vehicles/bookVehicle', async (bookingData: any) => {
  const response = await fetch('http://localhost:3000/api/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  return response.json();
});



// Update Vehicle
export const updateVehicle = createAsyncThunk(
  'vehicles/updateVehicle',
  async ({ vehicleId, vehicleData }: { vehicleId: number; vehicleData: any }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/vehicles/${vehicleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicleData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update vehicle');
      }
      return data.vehicle; // Assuming response includes updated vehicle data
    } catch (error) {
     throw new Error((error as Error).message || 'Failed to update vehicle');
    }
  }
);

// Delete Vehicle
export const deleteVehicle = createAsyncThunk(
  'vehicles/deleteVehicle',
  async (vehicleId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/vehicles/${vehicleId}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete vehicle');
      }
      return vehicleId;
    } catch (error) {
     throw new Error((error as Error).message || 'Failed to delete vehicle');
    }
  }
);