import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import BookingCard from './BookingCard';

function BookingList({ bookings, onEdit, onDelete }) {
  if (bookings.length === 0) {
    return (
      <Alert variant="info" className="text-center">
        No bookings yet. Click "New Booking" to schedule your first fitness session!
      </Alert>
    );
  }

  return (
    <Row>
      {bookings.map(booking => (
        <Col key={booking.id} md={6} lg={4}>
          <BookingCard
            booking={booking}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Col>
      ))}
    </Row>
  );
}

export default BookingList;
