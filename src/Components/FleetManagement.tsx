import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFleetData, updateFleetData, deleteFleetData } from '../redux/actions//fleetManagementAction';
import { RootState, AppDispatch } from '../redux/store';
import FleetTable from './FleetTable'; // Ensure this path is correct
import styles from './FleetManagement.module.css';

type FleetData = {
  fleet_id: number;
  vehicle_id: number;
  acquisition_date: string;
  depreciation_rate: number;
  current_value: number;
  maintenance_cost: number;
  status: string;
};

const FleetManagement: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fleetData, loading, error } = useSelector((state: RootState) => state.fleetManagement) || {};

  const [editableFleet, setEditableFleet] = useState<FleetData | null>(null);
  const [fleetDetails, setFleetDetails] = useState({
    vehicle_id: 0,
    acquisition_date: '',
    depreciation_rate: 0,
    current_value: 0,
    maintenance_cost: 0,
    status: '',
  });

  useEffect(() => {
    dispatch(fetchFleetData());
  }, [dispatch]);

  useEffect(() => {
    console.log('Fleet Data:', fleetData);
  }, [fleetData]);

  const handleUpdateFleetClick = (fleet: FleetData) => {
    setEditableFleet(fleet);
    setFleetDetails({
      vehicle_id: fleet.vehicle_id,
      acquisition_date: fleet.acquisition_date,
      depreciation_rate: fleet.depreciation_rate,
      current_value: fleet.current_value,
      maintenance_cost: fleet.maintenance_cost,
      status: fleet.status,
    });
  };

  const handleFleetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFleetDetails({ ...fleetDetails, [e.target.name]: e.target.value });
  };

  const handleFleetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editableFleet) {
      try {
        await dispatch(updateFleetData({ fleet_id: editableFleet.fleet_id, ...fleetDetails }));
        alert('Fleet data updated successfully!');
        setEditableFleet(null);
      } catch (err: unknown) {
        console.error('Failed to update fleet data:', (err as Error).message);
        alert('Failed to update fleet data. Please try again.');
      }
    }
  };

  const handleDeleteFleet = async (fleet_id: number) => {
    try {
      await dispatch(deleteFleetData(fleet_id));
      alert('Fleet data deleted successfully!');
    } catch (err: unknown) {
      console.error('Failed to delete fleet data:', (err as Error).message);
      alert('Failed to delete fleet data. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className={styles['error-message']}>Error: {error}</p>;
  }

  return (
    <div className={styles['fleet-management']}>
      <h2>Fleet Management</h2>
      {editableFleet ? (
        <form onSubmit={handleFleetSubmit} className={styles['update-form']}>
          <div>
            <label>
              Vehicle ID:
              <input
                type="number"
                name="vehicle_id"
                value={fleetDetails.vehicle_id}
                onChange={handleFleetChange}
              />
            </label>
          </div>
          <div>
            <label>
              Acquisition Date:
              <input
                type="date"
                name="acquisition_date"
                value={fleetDetails.acquisition_date}
                onChange={handleFleetChange}
              />
            </label>
          </div>
          <div>
            <label>
              Depreciation Rate:
              <input
                type="number"
                name="depreciation_rate"
                value={fleetDetails.depreciation_rate}
                onChange={handleFleetChange}
              />
            </label>
          </div>
          <div>
            <label>
              Current Value:
              <input
                type="number"
                name="current_value"
                value={fleetDetails.current_value}
                onChange={handleFleetChange}
              />
            </label>
          </div>
          <div>
            <label>
              Maintenance Cost:
              <input
                type="number"
                name="maintenance_cost"
                value={fleetDetails.maintenance_cost}
                onChange={handleFleetChange}
              />
            </label>
          </div>
          <div>
            <label>
              Status:
              <input
                type="text"
                name="status"
                value={fleetDetails.status}
                onChange={handleFleetChange}
              />
            </label>
          </div>
          <button type="submit" className={styles['submit-button']}>Update Fleet</button>
          <button type="button" onClick={() => setEditableFleet(null)} className={styles['cancel-button']}>Cancel</button>
        </form>
      ) : (
        <FleetTable
          fleetData={fleetData}
          onUpdate={handleUpdateFleetClick}
          onDelete={handleDeleteFleet}
        />
      )}
    </div>
  );
};

export default FleetManagement;
