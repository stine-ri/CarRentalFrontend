import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import styles from './Login.module.css';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../hooks/hooks';
import { useNavigate, Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser(credentials));

    if (loginUser.fulfilled.match(resultAction)) {
      const role = localStorage.getItem('userRole');
      console.log('Role after login:', role); // Debug role
      if (role === 'admin') {
        navigate('/admin'); // Redirect to admin dashboard
      } else {
        navigate('/user-dashboard-overview'); // Redirect to user home
      }
    } else {
      console.error('Login failed:', resultAction.payload);
    }
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
        <p className={styles.registerLink}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
