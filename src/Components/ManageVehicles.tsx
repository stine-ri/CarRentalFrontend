import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ManageVehicles.module.css';
import { fetchVehicles, deleteVehicle, updateVehicle } from '../redux/actions/VehicleAction';
import { RootState, AppDispatch } from '../redux/store';

const ManageVehicles: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { vehicles, loading, error } = useSelector((state: RootState) => state.vehicles) || {};

  const [editableVehicle, setEditableVehicle] = useState<any>(null);
  const [vehicleData, setVehicleData] = useState({
    manufacturer: '',
    model: '',
    year: '',
    fuel_type: '',
    engine_capacity: '',
    transmission: '',
    seating_capacity: '',
    color: '',
    features: '',
  });

  useEffect(() => {
    console.log('Dispatching fetchVehicles');
    dispatch(fetchVehicles()); // Call without arguments
    console.log('Dispatched fetchVehicles');
  }, [dispatch]);

  useEffect(() => {
    console.log('Vehicles:', vehicles);
  }, [vehicles]);

  const handleUpdateVehicleClick = (vehicle: any) => {
    setEditableVehicle(vehicle);
    setVehicleData({
      manufacturer: vehicle.manufacturer,
      model: vehicle.model,
      year: vehicle.year,
      fuel_type: vehicle.fuel_type,
      engine_capacity: vehicle.engine_capacity,
      transmission: vehicle.transmission,
      seating_capacity: vehicle.seating_capacity,
      color: vehicle.color,
      features: vehicle.features,
    });
  };

  const handleUpdateVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleUpdateVehicleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editableVehicle) {
      try {
        await dispatch(updateVehicle({ vehicleId: editableVehicle.id, vehicleData }));
        alert('Vehicle updated successfully!');
        setEditableVehicle(null);
      } catch (err: unknown) {
        console.error('Failed to update vehicle:', (err as Error).message);
        alert('Failed to update vehicle. Please try again.');
      }
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
      {editableVehicle ? (
        <form onSubmit={handleUpdateVehicleSubmit} className={styles['update-form']}>
          <div>
            <label>
              Manufacturer:
              <input
                type="text"
                name="manufacturer"
                value={vehicleData.manufacturer}
                onChange={handleUpdateVehicleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Model:
              <input
                type="text"
                name="model"
                value={vehicleData.model}
                onChange={handleUpdateVehicleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Year:
              <input
                type="number"
                name="year"
                value={vehicleData.year}
                onChange={handleUpdateVehicleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Fuel Type:
              <input
                type="text"
                name="fuel_type"
                value={vehicleData.fuel_type}
                onChange={handleUpdateVehicleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Engine Capacity:
              <input
                type="text"
                name="engine_capacity"
                value={vehicleData.engine_capacity}
                onChange={handleUpdateVehicleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Transmission:
              <input
                type="text"
                name="transmission"
                value={vehicleData.transmission}
                onChange={handleUpdateVehicleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Seating Capacity:
              <input
                type="number"
                name="seating_capacity"
                value={vehicleData.seating_capacity}
                onChange={handleUpdateVehicleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Color:
              <input
                type="text"
                name="color"
                value={vehicleData.color}
                onChange={handleUpdateVehicleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Features:
              <input
                type="text"
                name="features"
                value={vehicleData.features}
                onChange={handleUpdateVehicleChange}
              />
            </label>
          </div>
          <button type="submit" className={styles['submit-button']}>Update Vehicle</button>
          <button type="button" onClick={() => setEditableVehicle(null)} className={styles['cancel-button']}>Cancel</button>
        </form>
      ) : (
        <>
          {vehicles && vehicles.length > 0 ? (
            <ul>
              {vehicles.map((vehicle) => (
                <li key={vehicle.id} className={styles['vehicle-item']}>
                  {vehicle.manufacturer} {vehicle.model} ({vehicle.year})
                  <button
                    className={styles['update-button']}
                    onClick={() => handleUpdateVehicleClick(vehicle)}
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
        </>
      )}
    </div>
  );
};

export default ManageVehicles;
