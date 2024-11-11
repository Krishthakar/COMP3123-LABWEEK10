import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required />
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="1234 Main St" required />
          <input type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Apartment, studio, or floor" />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />

          <label>Province</label>
          <select name="province" value={formData.province} onChange={handleChange} required>
            <option value="">Choose...</option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
          </select>

          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
          <label>Agree Terms & Condition?</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Address 2:</strong> {submittedData.address2}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
