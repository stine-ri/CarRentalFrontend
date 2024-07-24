import React from 'react';
import styles from './Vehicle.module.css';

interface Vehicle {
  id: number;
  manufacturer: string;
  model: string;
  year: number;
  fuel_type: string | null;
  engine_capacity: string | null;
  transmission: string;
  seating_capacity: number | null;
  color: string;
  features: string;
}

interface VehicleTableProps {
  vehicles: Vehicle[];
  onUpdate: (vehicleId: number, vehicleData: Vehicle) => void;
  onDelete: (vehicleId: number) => void;
}

const VehicleTable: React.FC<VehicleTableProps> = ({ vehicles, onUpdate, onDelete }) => {
  return (
    <table className={styles.vehicleTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Manufacturer</th>
          <th>Model</th>
          <th>Year</th>
          <th>Fuel Type</th>
          <th>Engine Capacity</th>
          <th>Transmission</th>
          <th>Seating Capacity</th>
          <th>Color</th>
          <th>Features</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle) => (
          <tr key={vehicle.id}>
            <td>{vehicle.id}</td>
            <td>{vehicle.manufacturer}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.year}</td>
            <td>{vehicle.fuel_type || 'N/A'}</td>
            <td>{vehicle.engine_capacity || 'N/A'}</td>
            <td>{vehicle.transmission}</td>
            <td>{vehicle.seating_capacity || 'N/A'}</td>
            <td>{vehicle.color}</td>
            <td>{vehicle.features}</td>
            <td>
              <button
                className={styles.actionButton}
                onClick={() => onUpdate(vehicle.id, vehicle)}
              >
                Update
              </button>
              <button
                className={styles.actionButton}
                onClick={() => onDelete(vehicle.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VehicleTable;