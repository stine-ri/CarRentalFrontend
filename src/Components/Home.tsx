import React from 'react';
import styles from './Home.module.css'; 
import cadillac from '../assets/images/cadillac.webp'
const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {/* <img src={cadillac} alt="Vehicle"  height={100} width={150}/> */}
      <h1>Welcome to Vehicle Rental Management System</h1>
      <p>Your one-stop solution for renting vehicles.</p>
    </div>
  );
};

export default Home;
