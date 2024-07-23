import React from 'react';
import styles from './Location.module.css';

// Define the Location interface with location_id as required
interface Location {
  location_id: number; // Renamed and required
  name: string;
  address: string;
  contact_phone: string;
}

interface LocationTableProps {
  locationData: Location[];
  onUpdate: (location: Location) => void;
  onDelete: (locationId: number) => void;
}

const LocationTable: React.FC<LocationTableProps> = ({ locationData, onUpdate, onDelete }) => {
  return (
    <table className={styles.locationTable}>
      <thead>
        <tr>
          <th>Location ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {locationData.map((location) => (
          <tr key={location.location_id}>
            <td>{location.location_id}</td>
            <td>{location.name}</td>
            <td>{location.address}</td>
            <td>{location.contact_phone}</td>
            <td>
              <button className={styles.updateButton} onClick={() => onUpdate(location)}>
                Update
              </button>
              <button className={styles.deleteButton} onClick={() => onDelete(location.location_id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LocationTable;
