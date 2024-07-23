import React, { useState } from 'react';
import styles from './FleetTable.module.css'; // Import CSS module

// Define FleetData type directly here for simplicity
interface FleetData {
  fleet_id: number;
  vehicle_id: number;
  acquisition_date: string;
  depreciation_rate: number;
  current_value: number;
  maintenance_cost: number;
  status: string;
}

interface FleetTableProps {
  fleetData: FleetData[];
  onUpdate: (updatedRecord: FleetData) => void;
  onDelete: (fleetId: number) => void;
}

const FleetTable: React.FC<FleetTableProps> = ({ fleetData, onUpdate, onDelete }) => {
  const [editableRecord, setEditableRecord] = useState<FleetData | null>(null);
  const [formValues, setFormValues] = useState<FleetData | null>(null);

  const handleEdit = (record: FleetData) => {
    setEditableRecord(record);
    setFormValues({ ...record });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formValues) {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleUpdate = () => {
    if (formValues) {
      onUpdate(formValues);
      setEditableRecord(null);
      setFormValues(null);
    }
  };

  const handleCancelEdit = () => {
    setEditableRecord(null);
    setFormValues(null);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Fleet ID</th>
          <th>Vehicle ID</th>
          <th>Acquisition Date</th>
          <th>Depreciation Rate</th>
          <th>Current Value</th>
          <th>Maintenance Cost</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {fleetData.map((record) => (
          <tr key={record.fleet_id}>
            <td>{record.fleet_id}</td>
            <td>{record.vehicle_id}</td>
            <td>{record.acquisition_date}</td>
            <td>{record.depreciation_rate}</td>
            <td>{record.current_value}</td>
            <td>{record.maintenance_cost}</td>
            <td>{record.status}</td>
            <td>
              {editableRecord && editableRecord.fleet_id === record.fleet_id ? (
                <>
                  <input
                    type="number"
                    name="vehicle_id"
                    value={formValues?.vehicle_id || ''}
                    onChange={handleFormChange}
                  />
                  <input
                    type="date"
                    name="acquisition_date"
                    value={formValues?.acquisition_date || ''}
                    onChange={handleFormChange}
                  />
                  <input
                    type="number"
                    name="depreciation_rate"
                    value={formValues?.depreciation_rate || ''}
                    onChange={handleFormChange}
                  />
                  <input
                    type="number"
                    name="current_value"
                    value={formValues?.current_value || ''}
                    onChange={handleFormChange}
                  />
                  <input
                    type="number"
                    name="maintenance_cost"
                    value={formValues?.maintenance_cost || ''}
                    onChange={handleFormChange}
                  />
                  <input
                    type="text"
                    name="status"
                    value={formValues?.status || ''}
                    onChange={handleFormChange}
                  />
                  <button onClick={handleUpdate} className={styles.button}>Update</button>
                  <button onClick={handleCancelEdit} className={styles.button}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(record)} className={styles.button}>Edit</button>
                  <button onClick={() => onDelete(record.fleet_id)} className={styles.button}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FleetTable;
