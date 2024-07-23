// CustomerTable.tsx

import React, { useState } from 'react';
import styles from './TableComponent.module.css';

interface TableProps {
  columns: string[];
  data: any[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (data: any) => void; // New prop for updating data
}

const CustomerTable: React.FC<TableProps> = ({ columns, data, onEdit, onDelete, onUpdate }) => {
  const [editableRow, setEditableRow] = useState<any>(null); // State to track editable row

  const handleEditClick = (id: number) => {
    const editableData = data.find(row => row.id === id);
    if (editableData) {
      setEditableRow(editableData);
      onEdit(id); // Notify parent component of edit action
    }
  };

  const handleSaveClick = () => {
    onUpdate(editableRow); // Update data via Redux action or function passed from parent
    setEditableRow(null); // Clear editable row state after update
  };

  const handleCancelClick = () => {
    setEditableRow(null); // Cancel edit mode
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableRow({
      ...editableRow,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                {editableRow && editableRow.id === row.id ? (
                  <input
                    type="text"
                    name={column}
                    value={editableRow[column]}
                    onChange={handleInputChange}
                  />
                ) : (
                  row[column]
                )}
              </td>
            ))}
            <td>
              {editableRow && editableRow.id === row.id ? (
                <>
                  <button onClick={handleSaveClick} className={styles.button}>Save</button>
                  <button onClick={handleCancelClick} className={styles.button}>Cancel</button>
                </>
              ) : (
                <button onClick={() => handleEditClick(row.id)} className={styles.button}>Edit</button>
              )}
              <button onClick={() => onDelete(row.id)} className={styles.button}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
