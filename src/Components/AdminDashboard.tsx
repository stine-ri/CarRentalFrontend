import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminDashboard.module.css'; 

import { logoutUser } from '../redux/actions/authActions';
import { useAppDispatch } from '../hooks/hooks';

const AdminDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles['admin-dashboard']}>
      <div className={styles['admin-nav-container']}>
        <nav className={styles['admin-nav']}>
          <ul>
            <li><Link to="/admin/manage-vehicles" className={styles['admin-nav-link']}>Manage Vehicles</Link></li>
            <li><Link to="/admin/manage-users" className={styles['admin-nav-link']}>Manage Users</Link></li>
            <li><Link to="/admin/reports" className={styles['admin-nav-link']}>Reports</Link></li>
            <li><Link to="/admin/customer-support" className={styles['admin-nav-link']}>Customer Support</Link></li>
            <li><Link to="/admin/fleet-management" className={styles['admin-nav-link']}>Fleet Management</Link></li>
            <li><Link to="/admin/settings" className={styles['admin-nav-link']}>Settings</Link></li>
            <li><button onClick={handleLogout} className={styles['logout-button']}>Logout</button></li>
          </ul>
        </nav>
      </div>
      <div className={styles['overview']}>
        <h2>Admin Dashboard Overview</h2>
        <div className={styles['overview-content']}>
          <div className={styles['overview-item']}>
            <h3>Manage Vehicles</h3>
            <p>View and manage the list of vehicles available in the system.</p>
            <Link to="/admin/manage-vehicles" className={styles['button-link']}>Go to Manage Vehicles</Link>
          </div>
          <div className={styles['overview-item']}>
            <h3>Manage Users</h3>
            <p>View and manage user accounts and roles.</p>
            <Link to="/admin/manage-users" className={styles['button-link']}>Go to Manage Users</Link>
          </div>
          <div className={styles['overview-item']}>
            <h3>Reports</h3>
            <p>Generate and view various reports related to bookings and transactions.</p>
            <Link to="/admin/reports" className={styles['button-link']}>Go to Reports</Link>
          </div>
          <div className={styles['overview-item']}>
            <h3>Customer Support</h3>
            <p>Manage customer support tickets and inquiries.</p>
            <Link to="/admin/customer-support" className={styles['button-link']}>Go to Customer Support</Link>
          </div>
          <div className={styles['overview-item']}>
            <h3>Fleet Management</h3>
            <p>Manage and oversee the fleet of vehicles.</p>
            <Link to="/admin/fleet-management" className={styles['button-link']}>Go to Fleet Management</Link>
          </div>
          <div className={styles['overview-item']}>
            <h3>Settings</h3>
            <p>Configure system settings and preferences.</p>
            <Link to="/admin/settings" className={styles['button-link']}>Go to Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
