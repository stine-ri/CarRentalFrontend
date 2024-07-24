import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchTickets } from '../redux/actions/ticketAction';
import styles from './Ticket.module.css';

interface Ticket {
  user_id: number;
  subject: string;
  description: string;
  status: string;
}

const Tickets: React.FC = () => {
  const dispatch = useAppDispatch();
  const tickets = useAppSelector((state) => state.tickets.tickets);
  const loading = useAppSelector((state) => state.tickets.loading);
  const error = useAppSelector((state) => state.tickets.error);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div className={styles.ticketsContainer}>
      <h2>Past Tickets</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        tickets.length > 0 ? (
          <ul className={styles.ticketList}>
            {tickets.map((ticket: Ticket, index: number) => (
              <li key={index} className={styles.ticketItem}>
                <h3>{ticket.subject}</h3>
                <p>{ticket.description}</p>
                <p>Status: {ticket.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tickets found.</p>
        )
      )}
    </div>
  );
};

export default Tickets;
