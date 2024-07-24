import React from 'react';
import Tickets from './Tickets';
import TicketForm from './TicketForm';
import styles from './Ticket.module.css';

const TicketsPage: React.FC = () => {
  return (
    <div className={styles.ticketsPageContainer}>
      <TicketForm />
      <Tickets />
    </div>
  );
};

export default TicketsPage;
