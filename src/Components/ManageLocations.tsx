import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchLocations, updateLocation, deleteLocation, createLocation } from '../redux/actions/locationAction';
import LocationTable from './LocationTable';
import styles from './ManageLocations.module.css';

// Define the Location interface with location_id as required
interface Location {
  location_id: number; // Renamed and required
  name: string;
  address: string;
  contact_phone: string;
}

const ManageLocations: React.FC = () => {
  const dispatch = useAppDispatch();
  const { locations, loading, error } = useAppSelector((state) => state.locations);

  const [editableLocation, setEditableLocation] = useState<Location | null>(null);
  const [locationData, setLocationData] = useState<Omit<Location, 'location_id'>>({
    name: '',
    address: '',
    contact_phone: '',
  });

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  const handleUpdateLocationClick = (location: Location) => {
    setEditableLocation(location);
    setLocationData({
      name: location.name,
      address: location.address,
      contact_phone: location.contact_phone,
    });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationData({ ...locationData, [e.target.name]: e.target.value });
  };

  const handleUpdateLocationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editableLocation) {
      try {
        await dispatch(updateLocation({ locationId: editableLocation.location_id, locationData }));
        alert('Location updated successfully!');
        setEditableLocation(null);
      } catch (err) {
        console.error('Failed to update location:', (err as Error).message);
        alert('Failed to update location. Please try again.');
      }
    }
  };

  const handleDeleteLocation = async (locationId: number) => {
    try {
      await dispatch(deleteLocation(locationId));
      alert('Location deleted successfully!');
    } catch (err) {
      console.error('Failed to delete location:', (err as Error).message);
      alert('Failed to delete location. Please try again.');
    }
  };

  const handleCreateLocation = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(createLocation({ ...locationData }));
      alert('Location created successfully!');
      setLocationData({
        name: '',
        address: '',
        contact_phone: '',
      });
    } catch (err) {
      console.error('Failed to create location:', (err as Error).message);
      alert('Failed to create location. Please try again.');
    }
  };

  return (
    <div className={styles.manageLocationsContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <LocationTable locationData={locations} onUpdate={handleUpdateLocationClick} onDelete={handleDeleteLocation} />
          {editableLocation && (
            <form className={styles.locationForm} onSubmit={handleUpdateLocationSubmit}>
              <h2>Update Location</h2>
              <input type="text" name="name" value={locationData.name} onChange={handleLocationChange} />
              <input type="text" name="address" value={locationData.address} onChange={handleLocationChange} />
              <input type="text" name="contact_phone" value={locationData.contact_phone} onChange={handleLocationChange} />
              <button type="submit">Update Location</button>
            </form>
          )}
          <form className={styles.locationForm} onSubmit={handleCreateLocation}>
            <h2>Create New Location</h2>
            <input type="text" name="name" value={locationData.name} onChange={handleLocationChange} placeholder="Name" />
            <input type="text" name="address" value={locationData.address} onChange={handleLocationChange} placeholder="Address" />
            <input type="text" name="contact_phone" value={locationData.contact_phone} onChange={handleLocationChange} placeholder="Contact Phone" />
            <button type="submit">Create Location</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ManageLocations;
