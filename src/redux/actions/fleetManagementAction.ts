// fleetActions.ts

import { createAsyncThunk } from '@reduxjs/toolkit';

// Define FleetData type for actions
type FleetData = {
  fleet_id: number;
  vehicle_id: number;
  acquisition_date: string;
  depreciation_rate: number;
  current_value: number;
  maintenance_cost: number;
  status: string;
};

// Fetch Fleet Data
export const fetchFleetData = createAsyncThunk('fleet/fetchFleetData', async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }

    const response = await fetch('http://localhost:3000/api/FleetManagement', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const jsonResponse = await response.json();
      throw new Error(jsonResponse.message || 'Network response was not ok');
    }

    const jsonResponse: FleetData[] = await response.json();
    return jsonResponse;
  } catch (error) {
    throw new Error((error as Error).message || 'Failed to fetch fleet data');
  }
});

// Update Fleet Data
export const updateFleetData = createAsyncThunk(
  'fleet/updateFleetData',
  async (updatedFleetData: FleetData) => {
    try {
      const response = await fetch(`http://localhost:3000/api/FleetManagement/${updatedFleetData.fleet_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFleetData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to update fleet data');
      }

      return updatedFleetData;
    } catch (error) {
      throw new Error((error as Error).message || 'Failed to update fleet data');
    }
  }
);

// Delete Fleet Data
export const deleteFleetData = createAsyncThunk(
  'fleet/deleteFleetData',
  async (fleet_id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/FleetManagement/${fleet_id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete fleet data');
      }

      return fleet_id;
    } catch (error) {
      throw new Error((error as Error).message || 'Failed to delete fleet data');
    }
  }
);
