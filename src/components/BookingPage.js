import React from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <div>
      <h1>Welcome to our booking page!</h1>
      <p>Please fill out the form below to make your reservation.</p>
      <BookingForm />
      <p>Thank you for choosing our services.</p>
    </div>
  );
}

export default BookingPage;