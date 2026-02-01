import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function BookingCard({ booking, onEdit, onDelete }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Header className="bg-success text-white d-flex justify-content-between align-items-center">
        <span>{booking.title}</span>
        <Badge bg="light" text="dark">{booking.date}</Badge>
      </Card.Header>
      <Card.Body>
        <Card.Text>{booking.description}</Card.Text>
        <div className="mb-2">
          <strong>Time:</strong> {booking.time}
        </div>
        <div className="mb-2">
          <strong>Phone:</strong> {booking.phone_number}
        </div>
        <div className="mb-2">
          <strong>Email:</strong> {booking.email}
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" size="sm" onClick={() => onEdit(booking)}>
            Edit
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => onDelete(booking.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BookingCard;
