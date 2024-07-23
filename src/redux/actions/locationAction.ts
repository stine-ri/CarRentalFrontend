import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the Location interface with location_id as required
interface Location {
  location_id: number; // Renamed and required
  name: string;
  address: string;
  contact_phone: string;
}

// Fetch Locations
export const fetchLocations = createAsyncThunk('locations/fetchLocations', async () => {
  const response = await fetch('https://api-vehiclebackend.onrender.com/api/Locations');
  if (!response.ok) {
    const jsonResponse = await response.json();
    throw new Error(jsonResponse.message || 'Network response was not ok');
  }
  const jsonResponse: Location[] = await response.json();
  return jsonResponse;
});

// Create Location
export const createLocation = createAsyncThunk(
  'locations/createLocation',
  async (location: Omit<Location, 'location_id'>) => {
    const response = await fetch('https://api-vehiclebackend.onrender.com/api/Locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to create location');
    }

    return await response.json();
  }
);

// Update Location
export const updateLocation = createAsyncThunk(
  'locations/updateLocation',
  async ({ locationId, locationData }: { locationId: number; locationData: Partial<Omit<Location, 'location_id'>> }) => {
    const response = await fetch(`https://api-vehiclebackend.onrender.com/api/Locations/${locationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(locationData),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to update location');
    }

    return await response.json();
  }
);

// Delete Location
export const deleteLocation = createAsyncThunk(
  'locations/deleteLocation',
  async (locationId: number) => {
    const response = await fetch(`https://api-vehiclebackend.onrender.com/api/Locations/${locationId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to delete location');
    }

    return locationId;
  }
);
