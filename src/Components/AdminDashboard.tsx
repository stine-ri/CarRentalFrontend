import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminDashboard.module.css'; 

import { logoutUser } from '../redux/actions/authActions';
import { useAppDispatch } from '../hooks/hooks';

const AdminDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
const handleLogout = () => {
  dispatch(logoutUser());
}
  return (
    <div className={styles['admin-dashboard']}>
      <h2>Admin Dashboard</h2>
      <nav className={styles['admin-nav']}>
        <ul>
          <li><Link to="/admin/manage-vehicles" className={styles['admin-nav-link']}>Manage Vehicles</Link></li>
          <li><Link to="/admin/manage-users" className={styles['admin-nav-link']}>Manage Users</Link></li>
          <li><Link to="/admin/reports" className={styles['admin-nav-link']}>Reports</Link></li>
          <li><Link to="/admin/customer-support" className={styles['admin-nav-link']}>Customer Support</Link></li>
          <li><Link to="/admin/fleet-management" className={styles['admin-nav-link']}>Fleet Management</Link></li>
          <li><Link to="/admin/settings" className={styles['admin-nav-link']}>Settings</Link></li>
          <li><Link to="/admin/logout" className={styles['admin-nav-link']}><button onClick={handleLogout}>Logout</button></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
