import React from 'react';
import { useParams } from 'react-router-dom';

type Car = {
  manufacturer: string;
  model: string;
  year: number;
  fuelType: string;
  engineCapacity: string;
  transmission: string;
  seatingCapacity: number;
  color: string;
  features: string;
};

const carDetails: { [key: number]: Car } = {
  1: {
    manufacturer: 'BMW',
    model: '5 Series',
    year: 2018,
    fuelType: 'Petrol',
    engineCapacity: '3000cc',
    transmission: 'Automatic',
    seatingCapacity: 5,
    color: 'Gray',
    features: 'Powerful engine, Luxurious interior',
  },
  2: {
    manufacturer: 'Audi',
    model: 'Q8',
    year: 2017,
    fuelType: 'Petrol',
    engineCapacity: '4000cc',
    transmission: 'Automatic',
    seatingCapacity: 5,
    color: 'Black',
    features: 'Advanced safety features, High performance',
  },
  3: {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2019,
    fuelType: 'Hybrid',
    engineCapacity: '2500cc',
    transmission: 'Automatic',
    seatingCapacity: 5,
    color: 'White',
    features: 'Fuel-efficient, Reliable',
  },
  4: {
    manufacturer: 'Cadillac ',
    model: 'Escallade',
    year: 2020,
    fuelType: 'Petrol',
    engineCapacity: '2400cc',
    transmission: 'Automatic',
    seatingCapacity: 5,
    color: 'Blue',
    features: 'Comfortable, Advanced technology',
  },
  5: {
    manufacturer: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2019,
    fuelType: 'Diesel',
    engineCapacity: '2000cc',
    transmission: 'Automatic',
    seatingCapacity: 5,
    color: 'Silver',
    features: 'Luxurious, Smooth ride',
  },
  6: {
    manufacturer: 'Tesla',
    model: 'Model S',
    year: 2021,
    fuelType: 'Electric',
    engineCapacity: 'N/A',
    transmission: 'Automatic',
    seatingCapacity: 5,
    color: 'Red',
    features: 'Electric, High-tech features',
  },
};

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const carId = Number(id);
  const car = carDetails[carId];

  if (!car) {
    return <div>Car details not found!</div>;
  }

  return (
    <div>
      <h2>{car.manufacturer} {car.model}</h2>
      <p><strong>Year:</strong> {car.year}</p>
      <p><strong>Fuel Type:</strong> {car.fuelType}</p>
      <p><strong>Engine Capacity:</strong> {car.engineCapacity}</p>
      <p><strong>Transmission:</strong> {car.transmission}</p>
      <p><strong>Seating Capacity:</strong> {car.seatingCapacity}</p>
      <p><strong>Color:</strong> {car.color}</p>
      <p><strong>Features:</strong> {car.features}</p>
    </div>
  );
};

export default CarDetails;
