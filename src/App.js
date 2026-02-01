import React, { useState, useEffect } from 'react';
import { Container, Navbar, Button, Spinner } from 'react-bootstrap';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import BookingList from './components/BookingList';
import BookingForm from './components/BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);

  const bookingsCollection = collection(db, 'bookings');

  // READ - Fetch all bookings
  const fetchBookings = async () => {
    setLoading(true);
    try {
      const data = await getDocs(bookingsCollection);
      const bookingsList = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setBookings(bookingsList);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // CREATE - Add new booking
  const createBooking = async (bookingData) => {
    try {
      await addDoc(bookingsCollection, bookingData);
      fetchBookings();
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  // UPDATE - Edit existing booking
  const updateBooking = async (bookingData) => {
    try {
      const bookingDoc = doc(db, 'bookings', bookingData.id);
      const { id, ...dataWithoutId } = bookingData;
      await updateDoc(bookingDoc, dataWithoutId);
      fetchBookings();
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  // DELETE - Remove booking
  const deleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        const bookingDoc = doc(db, 'bookings', id);
        await deleteDoc(bookingDoc);
        fetchBookings();
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    }
  };

  const handleSubmit = (bookingData) => {
    if (editingBooking) {
      updateBooking(bookingData);
    } else {
      createBooking(bookingData);
    }
    setEditingBooking(null);
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingBooking(null);
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar bg="success" variant="dark" className="mb-4 shadow">
        <Container>
          <Navbar.Brand className="fw-bold">
            FitBook - Fitness Booking System
          </Navbar.Brand>
          <Button
            variant="light"
            onClick={() => setShowForm(true)}
          >
            + New Booking
          </Button>
        </Container>
      </Navbar>

      <Container>
        <div className="text-center mb-4">
          <h2 className="text-success">Your Fitness Sessions</h2>
          <p className="text-muted">Book your gym classes, yoga sessions, and personal training</p>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="success" />
            <p className="mt-2 text-muted">Loading bookings...</p>
          </div>
        ) : (
          <BookingList
            bookings={bookings}
            onEdit={handleEdit}
            onDelete={deleteBooking}
          />
        )}
      </Container>

      <BookingForm
        show={showForm}
        onHide={handleCloseForm}
        onSubmit={handleSubmit}
        editingBooking={editingBooking}
      />
    </div>
  );
}

export default App;
