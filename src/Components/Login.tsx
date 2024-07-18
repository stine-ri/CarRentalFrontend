import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../redux/actions/authActions';
import styles from './Login.module.css';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../hooks/hooks';
 
const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useAppDispatch();
 
  const { loading, error, token } = useSelector((state: RootState) => state.auth);
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };
 
  const handleLogout = () => {
    dispatch(logoutUser());
  };
 
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.rememberGroup}>
            <input type="checkbox" />
            <label>Remember</label>
          </div>
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <button onClick={handleLogout} className={styles.button}>Logout</button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {token && <p>Login successful!</p>}
      </div>
    </div>
  );
};
 
export default Login;