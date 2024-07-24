import React, { useState } from 'react';
import styles from './VehicleComponent.module.css';

interface Vehicle {
  vehicle_id: string;
  vehicleSpec_id: string;
  rental_rate: number;
  availability: boolean;
}

const VehicleComponent: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [newVehicle, setNewVehicle] = useState<Partial<Vehicle>>({
    vehicle_id: '',
    vehicleSpec_id: '',
    rental_rate: 0,
    availability: true,
  });
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const addVehicle = () => {
    setVehicles([...vehicles, newVehicle as Vehicle]);
    setMessage('Vehicle added successfully!');
    setTimeout(() => setMessage(''), 3000);
    setNewVehicle({
      vehicle_id: '',
      vehicleSpec_id: '',
      rental_rate: 0,
      availability: true,
    });
  };

  const removeVehicle = (vehicle_id: string) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.vehicle_id !== vehicle_id));
    setMessage('Vehicle removed successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const updateVehicle = (updatedVehicle: Vehicle) => {
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.vehicle_id === updatedVehicle.vehicle_id ? updatedVehicle : vehicle
      )
    );
    setMessage('Vehicle updated successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className={styles.container}>
      <h2>Vehicle Registration</h2>
      {message && <div className={styles.message}>{message}</div>}
      <div className={styles.form}>
        <input
          type="text"
          name="vehicle_id"
          placeholder="Vehicle ID"
          value={newVehicle.vehicle_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="vehicleSpec_id"
          placeholder="Vehicle Spec ID"
          value={newVehicle.vehicleSpec_id}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rental_rate"
          placeholder="Rental Rate"
          value={newVehicle.rental_rate}
          onChange={handleInputChange}
        />
        <select
          name="availability"
          value={newVehicle.availability ? 'true' : 'false'}
          onChange={(e) =>
            setNewVehicle((prev) => ({ ...prev, availability: e.target.value === 'true' }))
          }
        >
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
        <button onClick={addVehicle}>Add</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Vehicle ID</th>
            <th>Spec ID</th>
            <th>Rental Rate</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.vehicle_id}>
              <td>{vehicle.vehicle_id}</td>
              <td>{vehicle.vehicleSpec_id}</td>
              <td>{vehicle.rental_rate}</td>
              <td>{vehicle.availability ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => updateVehicle(vehicle)}>Update</button>
                <button onClick={() => removeVehicle(vehicle.vehicle_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleComponent;
