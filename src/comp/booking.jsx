import React, { useState } from 'react';
import '../styles/booking.css';

const SafariBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    nationality: '',
    dateOfBirth: '',
    preferredDates: '',
    numberOfTravelers: '',
    numberOfChildren: '',
    safariType: '',
    accommodationType: '',
    roomPreferences: '',
    specialRequests: '',
    preferredActivities: '',
    specialExperiences: '',
    arrivalDetails: '',
    departureDetails: '',
    dietaryRestrictions: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactPhone: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="safari-booking-form mt-5">
      <h2>Safari Booking Form</h2>

      <h3>Personal Information:</h3>
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </label>
      <label>
        Nationality:
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
      </label>

      <h3>Travel Details:</h3>
      <label>
        Preferred Dates:
        <input type="text" name="preferredDates" value={formData.preferredDates} onChange={handleChange} required />
      </label>
      <label>
        Number of Travelers (Adults):
        <input type="number" name="numberOfTravelers" value={formData.numberOfTravelers} onChange={handleChange} required />
      </label>
      <label>
        Number of Children:
        <input type="number" name="numberOfChildren" value={formData.numberOfChildren} onChange={handleChange} />
      </label>
      <label>
        Type of Safari:
        <input type="text" name="safariType" value={formData.safariType} onChange={handleChange} required />
      </label>

      <h3>Accommodation Preferences:</h3>
      <label>
        Type of Accommodation:
        <select name="accommodationType" value={formData.accommodationType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Budget">Budget</option>
          <option value="Mid range">Mid range</option>
          <option value="Luxury">Luxury</option>
        </select>
      </label>
      <label>
        Room Preferences:
        <input type="text" name="roomPreferences" value={formData.roomPreferences} onChange={handleChange} />
      </label>
      <label>
        Special Requests:
        <input type="text" name="specialRequests" value={formData.specialRequests} onChange={handleChange} />
      </label>

      <h3>Activities and Interests:</h3>
      <label>
        Preferred Activities:
        <input type="text" name="preferredActivities" value={formData.preferredActivities} onChange={handleChange} />
      </label>
      <label>
        Special Experiences:
        <input type="text" name="specialExperiences" value={formData.specialExperiences} onChange={handleChange} />
      </label>

      <h3>Travel Logistics:</h3>
      <label>
        Arrival Details:
        <input type="text" name="arrivalDetails" value={formData.arrivalDetails} onChange={handleChange} />
      </label>
      <label>
        Departure Details:
        <input type="text" name="departureDetails" value={formData.departureDetails} onChange={handleChange} />
      </label>
      <label>
        Dietary Restrictions:
        <input type="text" name="dietaryRestrictions" value={formData.dietaryRestrictions} onChange={handleChange} />
      </label>

      <h3>Emergency Contact Information:</h3>
      <label>
        Name:
        <input type="text" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} required />
      </label>
      <label>
        Relationship:
        <input type="text" name="emergencyContactRelationship" value={formData.emergencyContactRelationship} onChange={handleChange} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleChange} required />
      </label>

      <h3>Additional Notes:</h3>
      <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows="4" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SafariBookingForm;
