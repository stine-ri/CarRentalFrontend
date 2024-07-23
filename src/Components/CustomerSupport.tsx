// CustomerSupport.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CustomerSupport.module.css';
import { fetchSupportRequests, deleteSupportRequest, updateSupportRequest } from '../redux/actions/customerSupportAction';
import { RootState, AppDispatch } from '../redux/store';
import CustomerTable from './CustomerTable';

const CustomerSupport: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { supportRequests, loading, error } = useSelector((state: RootState) => state.customerSupport) || {};

  useEffect(() => {
    dispatch(fetchSupportRequests());
  }, [dispatch]);

  const handleUpdateRequestClick = (id: number) => {
    // Handle edit functionality if needed
  };

  const handleDeleteRequest = (id: number) => {
    // Handle delete functionality
  };

  const handleUpdateRequest = (updatedData: any) => {
    dispatch(updateSupportRequest(updatedData));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className={styles['error-message']}>Error: {error}</p>;
  }

  return (
    <div className={styles['customer-support']}>
      <h2>Customer Support</h2>
      <CustomerTable
        columns={['ticket_id', 'subject', 'description', 'status', 'user_id', 'created_at', 'updated_at']}
        data={supportRequests}
        onEdit={handleUpdateRequestClick}
        onDelete={handleDeleteRequest}
        onUpdate={handleUpdateRequest}
      />
    </div>
  );
};

export default CustomerSupport;
