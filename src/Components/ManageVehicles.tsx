import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ManageVehicles.module.css';
import { fetchVehicles, deleteVehicle, updateVehicle } from '../redux/actions/VehicleAction';
import { RootState, AppDispatch } from '../redux/store';

const ManageVehicles: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { vehicles, loading, error, success } = useSelector((state: RootState) => state.vehicles) || {};

  useEffect(() => {
    console.log('Dispatching fetchVehicles');
    dispatch(fetchVehicles()); // Call without arguments
    console.log('Dispatched fetchVehicles');
  }, [dispatch]);

  useEffect(() => {
    console.log('Vehicles:', vehicles);
  }, [vehicles]);

  const handleUpdateVehicle = async (vehicleId: number, vehicleData: any) => {
    try {
      await dispatch(updateVehicle({ vehicleId, vehicleData }));
      alert('Vehicle updated successfully!');
    } catch (err: unknown) {
      console.error('Failed to update vehicle:', (err as Error).message);
      alert('Failed to update vehicle. Please try again.');
    }
  };

  const handleDeleteVehicle = async (vehicleId: number) => {
    try {
      await dispatch(deleteVehicle(vehicleId));
      alert('Vehicle deleted successfully!');
    } catch (err: unknown) {
      console.error('Failed to delete vehicle:', (err as Error).message);
      alert('Failed to delete vehicle. Please try again.');
    }
  };

  console.log('Vehicles:', vehicles); // Check vehicles state

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className={styles['error-message']}>Error: {error}</p>;
  }

  return (
    <div className={styles['manage-vehicles']}>
      <h2>Manage Vehicles</h2>
      {vehicles && vehicles.length > 0 ? (
        <ul>
          {vehicles.map((vehicle) => (
            <li key={vehicle.id} className={styles['vehicle-item']}>
              {vehicle.manufacturer} {vehicle.model} ({vehicle.year})
              <button
                className={styles['update-button']}
                onClick={() => handleUpdateVehicle(vehicle.id, { manufacturer: 'New Manufacturer', model: 'New Model' })}
              >
                Update
              </button>
              <button
                className={styles['delete-button']}
                onClick={() => handleDeleteVehicle(vehicle.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No vehicles found.</p>
      )}
    </div>
  );
};

export default ManageVehicles;
