import React, { useState } from 'react';
import axios from 'axios';
import './ShipmentForm.css';

function ShipmentForm({ onShipmentCreated }) {
  const [formData, setFormData] = useState({
    origin: { address: '', city: '', country: '' },
    destination: { address: '', city: '', country: '' },
    customer: { name: '', email: '', phone: '' },
    items: [{ description: '', quantity: 1, weight: 0 }],
    estimatedDelivery: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/shipments', formData);
      onShipmentCreated();
      alert('Shipment created successfully!');
    } catch (error) {
      console.error('Error creating shipment:', error);
      alert('Error creating shipment');
    }
  };

  return (
    <form className="shipment-form" onSubmit={handleSubmit}>
      <h2>Create New Shipment</h2>
      
      <div className="form-section">
        <h3>Origin</h3>
        <input
          type="text"
          placeholder="Address"
          value={formData.origin.address}
          onChange={(e) => setFormData({
            ...formData,
            origin: { ...formData.origin, address: e.target.value }
          })}
        />
        {/* Add similar inputs for city and country */}
      </div>

      <div className="form-section">
        <h3>Destination</h3>
        <input
          type="text"
          placeholder="Address"
          value={formData.destination.address}
          onChange={(e) => setFormData({
            ...formData,
            destination: { ...formData.destination, address: e.target.value }
          })}
        />
        {/* Add similar inputs for city and country */}
      </div>

      <div className="form-section">
        <h3>Customer Information</h3>
        <input
          type="text"
          placeholder="Name"
          value={formData.customer.name}
          onChange={(e) => setFormData({
            ...formData,
            customer: { ...formData.customer, name: e.target.value }
          })}
        />
        {/* Add similar inputs for email and phone */}
      </div>

      <button type="submit">Create Shipment</button>
    </form>
  );
}

export default ShipmentForm; 