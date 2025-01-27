import React, { useState } from 'react';
import './RequestQuote.css';

function RequestQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    attachFile: '',
    inboundProcess: 'Not Specified',
    productReceiving: 'Not Specified',
    pallets: '',
    skusPerMonth: '1-2',
    orderSize: 'Not Specified',
    orderProcessing: 'Not Specified',
    ordersPerMonth: '',
    ecommerceShipments: 'Yes',
    skusPerOrder: '1',
    standardB2B: 'Yes',
    stackable: 'Non-Stacking',
    spaceNeeded: '',
    hazmat: 'Yes',
    turnsPerYear: '1-2',
    howDidYouHear: 'Search Engines',
    whichMarket: 'Minneapolis/St. Paul',
    contactPreference: 'Immediately',
    currentProvider: 'Yes',
    additionalInfo: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/quote-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Quote request submitted successfully!');
        // Reset form or redirect
      } else {
        throw new Error('Failed to submit quote request');
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert('Failed to submit quote request. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="request-quote-container">
      <div className="quote-hero">
        <h1>GET A QUOTE</h1>
      </div>

      <div className="quote-form-section">
        <div className="form-header">
          <h2>TELL US HOW WE CAN HELP</h2>
          <p>USE THE FORM OR CALL 612.623.1200</p>
          <p className="form-description">
            Whether you need a quote, wish to submit a Request for RFP/RFQ, or just want to discuss storage 
            and distribution solutions, simply complete the form below.
          </p>
          <p className="form-note">
            Please just tell us what you know, and somebody will contact you moving forward. We look forward 
            to learning about your project!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="quote-form">
          {/* Contact Information */}
          <div className="form-section">
            <div className="form-group">
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Company *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Address Fields */}
            <div className="form-group full-width">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address"
              />
            </div>

            <div className="form-group full-width">
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                placeholder="Address Line 2"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
            </div>

            <div className="form-group">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">State / Province / Region</option>
                {/* Add state options */}
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="ZIP / Postal Code"
              />
            </div>
          </div>

          {/* Business Information */}
          <div className="form-section">
            <div className="form-group">
              <label>Attach file to RFP/RFQ if ready</label>
              <input
                type="file"
                name="attachFile"
                onChange={handleChange}
              />
            </div>

            {/* Add all other form fields as shown in the image */}
            {/* Include dropdowns, radio buttons, and text inputs as needed */}

            <div className="form-group full-width">
              <label>Any Other (useful information)? (labeling, kitting, light mfg, etc.)</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </div>

          {/* reCAPTCHA */}
          <div className="recaptcha-container">
            {/* Add reCAPTCHA component here */}
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RequestQuote; 