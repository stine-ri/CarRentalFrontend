import React from 'react';
import { UserData } from '../redux/reducers/userReducer'; // Correct import
import styles from './UsersTable.module.css';

interface UserTableProps {
  userData: UserData[];
  onUpdate: (user: UserData) => void;
  onDelete: (userId: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ userData, onUpdate, onDelete }) => {
  return (
    <table className={styles.userTable}>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Contact Phone</th>
          <th>Address</th>
          <th>Role</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.full_name}</td>
            <td>{user.email}</td>
            <td>{user.contact_phone}</td>
            <td>{user.address}</td>
            <td>{user.role}</td>
            <td>{user.created_at}</td>
            <td>{user.updated_at}</td>
            <td>
              <button className={styles.updateButton} onClick={() => onUpdate(user)}>
                Update
              </button>
              <button className={styles.deleteButton} onClick={() => onDelete(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
