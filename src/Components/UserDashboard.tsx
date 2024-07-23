import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserDashboard.module.css';

// Import images
import bmwImage from '../assets/images/bmw.png';
import audiImage from '../assets/images/audi8.png';
import toyotaImage from '../assets/images/Toyota.webp';
import nissanImage from '../assets/images/cadillac.webp';
import mercedesImage from '../assets/images/mercedes.jpg';
import teslaImage from '../assets/images/tesla.jpeg';

const cars = [
  { id: 1, name: 'BMW 5 Series', price: '$1000 Per Day', image: bmwImage },
  { id: 2, name: 'Audi Q8', price: '$3000 Per Day', image: audiImage },
  { id: 3, name: 'Toyota Camry', price: '$600 Per Day', image: toyotaImage },
  { id: 4, name: 'Cadillac Escalade', price: '$400 Per Day', image: nissanImage },
  { id: 5, name: 'Mercedes-Benz C-Class', price: '$2000 Per Day', image: mercedesImage },
  { id: 6, name: 'Tesla Model S', price: '$1500 Per Day', image: teslaImage },
];

const UserDashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Recently Listed Cars</h2>
      <div className={styles.carsList}>
        {cars.map(car => (
          <div key={car.id} className={styles.carCard}>
            <img src={car.image} alt={car.name} />
            <div className={styles.carInfo}>
              <h3>{car.name}</h3>
              <p>{car.price}</p>
              <Link to={`/details/${car.id}`} className={styles.detailsButton}>View Details</Link>
              <Link to="/book" className={styles.bookButton}>Book Car</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
