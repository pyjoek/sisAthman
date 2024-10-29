import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/form.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelDate: '',
    nationality: '',
    numberOfPeople: '',
    numberOfDays: '',
    budget: '',
    accommodation: '',
    specialRequest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "joelcyber3@gmail.com";
    const subject = "Tour Booking Request";
    const body = `Hello, I would like to book a tour with the following details:
    - Name: ${formData.name}
    - Email: ${formData.email}
    - Travel Date: ${formData.travelDate}
    - Nationality: ${formData.nationality}
    - Number of People: ${formData.numberOfPeople}
    - Number of Days: ${formData.numberOfDays}
    - Budget: ${formData.budget}
    - Accommodation: ${formData.accommodation}
    - Special Requests: ${formData.specialRequest}`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const whatsappNumber = "+255715538630";
  const defaultMessage = `Hello, I'm interested in booking a tour. `;
// - Name: ${formData.name}
// - Email: ${formData.email}
// - Travel Date: ${formData.travelDate}
// - Nationality: ${formData.nationality}
// - Number of People: ${formData.numberOfPeople}
// - Number of Days: ${formData.numberOfDays}
// - Budget: ${formData.budget}
// - Accommodation: ${formData.accommodation}
// - Special Requests: ${formData.specialRequest}`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="booking-form container-sm p-3 rounded">
      <h5 className="text-center mb-3">Tour Booking Form</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control form-control-sm"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control form-control-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            name="travelDate"
            placeholder="Travel Month / Day"
            className="form-control form-control-sm"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            className="form-control form-control-sm"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            name="numberOfPeople"
            placeholder="Number of People"
            className="form-control form-control-sm"
            value={formData.numberOfPeople}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            name="numberOfDays"
            placeholder="Number of Days"
            className="form-control form-control-sm"
            value={formData.numberOfDays}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <select
            name="budget"
            className="form-select form-select-sm"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">My Budget - $0 - 1</option>
            <option value="0-1">$0 - 1</option>
            <option value="1-5">$1 - 5</option>
            <option value="5-10">$5 - 10</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <select
            name="accommodation"
            className="form-select form-select-sm"
            value={formData.accommodation}
            onChange={handleChange}
            required
          >
            <option value="">Budget Accommodation</option>
            <option value="standard">Standard</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <textarea
            name="specialRequest"
            placeholder="Special Request / Activities"
            className="form-control form-control-sm"
            rows="2"
            value={formData.specialRequest}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div className="d-flex justify-content-between mt-3">
          <button type="submit" className="btn btn-primary btn-sm">Send</button>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">Chat with Us</a>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
