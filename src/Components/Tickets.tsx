import React, { useState } from 'react';
import styles from './Ticket.module.css';

interface Ticket {
  ticketNumber: number;
  subject: string;
  description: string;
}

const TicketsComponent: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    { ticketNumber: 1, subject: 'Booking', description: 'Price' },
    { ticketNumber: 2, subject: 'Booking', description: 'Return date' },
  ]);
  const [newTicket, setNewTicket] = useState<Omit<Ticket, 'ticketNumber'>>({
    subject: '',
    description: '',
  });
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTicket({
      ...newTicket,
      [name]: value,
    });
  };

  const addTicket = () => {
    const newTicketNumber = tickets.length > 0 ? tickets[tickets.length - 1].ticketNumber + 1 : 1;
    const ticketWithNumber: Ticket = {
      ...newTicket,
      ticketNumber: newTicketNumber,
    };

    setTickets([...tickets, ticketWithNumber]);
    setMessage(`Ticket #${newTicketNumber} added successfully!`);
    setNewTicket({
      subject: '',
      description: '',
    });
  };

  return (
    <div className={styles.container}>
      <h2>Ticket Management</h2>
      <div className={styles.form}>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={newTicket.subject}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newTicket.description}
          onChange={handleInputChange}
        ></textarea>
        <button onClick={addTicket}>Add Ticket</button>
      </div>
      {message && <p className={styles.message}>{message}</p>}
      <div className={styles.table}>
        <h3>Tickets</h3>
        <table>
          <thead>
            <tr>
              <th>Ticket Number</th>
              <th>Subject</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketNumber}>
                <td>{ticket.ticketNumber}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsComponent;
