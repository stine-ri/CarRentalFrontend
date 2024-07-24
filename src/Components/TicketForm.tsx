import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { createTicket } from '../redux/actions/ticketAction';
import styles from './Ticket.module.css';

const TicketForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createTicket({ subject, description, status: 'Pending' }));
    setSubject('');
    setDescription('');
  };

  return (
    <div className={styles.formContainer}>
      <h2>Create New Ticket</h2>
      <form onSubmit={handleSubmit} className={styles.ticketForm}>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
