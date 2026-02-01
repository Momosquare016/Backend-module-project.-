import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function BookingForm({ show, onHide, onSubmit, editingBooking }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    phone_number: '',
    email: '',
    user_id: 'user1'
  });

  useEffect(() => {
    if (editingBooking) {
      setFormData(editingBooking);
    } else {
      setFormData({
        title: '',
        description: '',
        date: '',
        time: '',
        phone_number: '',
        email: '',
        user_id: 'user1'
      });
    }
  }, [editingBooking, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onHide();
  };

  const fitnessClasses = [
    'Powerlifting',
    'Calisthenics',
    'Bodybuilding',
    'Stretching',
    'Boxing',
    'Other Martial Arts'
  ];

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-success text-white">
        <Modal.Title>{editingBooking ? 'Edit Booking' : 'New Fitness Booking'}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Class Type</Form.Label>
            <Form.Select
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            >
              <option value="">Select a fitness class...</option>
              {fitnessClasses.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Any special requests or notes..."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="e.g., 2024-12-20"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="e.g., 10:00 AM"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="e.g., 012-3456789"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            {editingBooking ? 'Update Booking' : 'Create Booking'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default BookingForm;
