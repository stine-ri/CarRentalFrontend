import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchUsers, updateUser, deleteUser } from '../redux/actions/userAction';
import UserTable from '../Components/UsersTable';
import styles from './ManageUsers.module.css';

interface UserData {
  id: number;
  full_name: string;
  email: string;
  contact_phone: string;
  address: string;
  role: string;
  created_at: string;
  updated_at: string;
}

const ManageUsers: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);

  const [editableUser, setEditableUser] = useState<UserData | null>(null);
  const [userData, setUserData] = useState<UserData>({
    id: 0,
    full_name: '',
    email: '',
    contact_phone: '',
    address: '',
    role: '',
    created_at: '',
    updated_at: '',
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUpdateUserClick = (user: UserData) => {
    setEditableUser(user);
    setUserData(user);
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdateUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editableUser) {
      try {
        await dispatch(updateUser({ userId: userData.id, userData: userData }));
        alert('User updated successfully!');
        setEditableUser(null);
      } catch (err) {
        console.error('Failed to update user:', (err as Error).message);
        alert('Failed to update user. Please try again.');
      }
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await dispatch(deleteUser(userId));
      alert('User deleted successfully!');
    } catch (err) {
      console.error('Failed to delete user:', (err as Error).message);
      alert('Failed to delete user. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  return (
    <div className={styles.manageUsers}>
      <h2>Manage Users</h2>
      {editableUser ? (
        <form onSubmit={handleUpdateUserSubmit} className={styles.updateForm}>
          <div>
            <label>
              Full Name:
              <input
                type="text"
                name="full_name"
                value={userData.full_name}
                onChange={handleUserChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleUserChange}
              />
            </label>
          </div>
          <div>
            <label>
              Contact Phone:
              <input
                type="text"
                name="contact_phone"
                value={userData.contact_phone}
                onChange={handleUserChange}
              />
            </label>
          </div>
          <div>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleUserChange}
              />
            </label>
          </div>
          <div>
            <label>
              Role:
              <input
                type="text"
                name="role"
                value={userData.role}
                onChange={handleUserChange}
              />
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>Update User</button>
          <button type="button" onClick={() => setEditableUser(null)} className={styles.cancelButton}>Cancel</button>
        </form>
      ) : (
        <UserTable
          userData={users}
          onUpdate={handleUpdateUserClick}
          onDelete={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default ManageUsers;
