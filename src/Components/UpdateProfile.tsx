import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks'; 
import { updateUserDetails } from '../redux/actions/ProfileAction';
import styles from './UpdateProfile.module.css';

const UserUpdateForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user); 
  const [formData, setFormData] = useState({
    email: user.email,
    fullname: user.fullname,
    password: '',
    contact_phone: user.contact_phone,
    address: user.address,
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUserDetails({ userId:Number (user.id), userData: formData }))
      .unwrap()
      .then(() => {
        setSuccessMessage('Update was successful');
      })
      .catch((error: any) => {
        setSuccessMessage(`Update failed: ${error.message}`);
      });
  };

  return (
    <div className={styles.updateFormContainer}>
      <form onSubmit={handleSubmit} className={styles.updateForm}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Full Name:
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Contact Phone:
          <input type="text" name="contact_phone" value={formData.contact_phone} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
    </div>
  );
};

export default UserUpdateForm;
