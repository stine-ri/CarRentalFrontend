import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser, updateUser } from '../redux/actions/userAction';
import { RootState, AppDispatch } from '../redux/store';

const ManageUsers: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error, success } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUpdateUser = async (userId: number, userData: any) => {
    try {
      await dispatch(updateUser({ userId, userData })).unwrap();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Failed to update user:', err.message);
      } else {
        console.error('An unexpected error occurred:', err);
      }
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await dispatch(deleteUser(userId)).unwrap();
    } catch (err) {
      if (err instanceof Error) {
        console.error('Failed to delete user:', err.message);
      } else {
        console.error('An unexpected error occurred:', err);
      }
    }
  };

  return (
    <div>
      <h2>Manage Users</h2>
      {loading && <p>Loading...</p>}
      {error && typeof error === 'string' && <p>Error: {error}</p>}
      {success && <p>Operation successful!</p>}
      <ul>
        {users && users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button
                onClick={() => handleUpdateUser(user.id, { name: 'New Name', email: 'newemail@example.com' })}
              >
                Update
              </button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No users available</p>
        )}
      </ul>
    </div>
  );
};

export default ManageUsers;
