import React, { useState } from 'react';
import axios from 'axios';

function TrackingSearch() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/shipments/track/${trackingNumber}`);
      setShipment(response.data);
      setError('');
    } catch (error) {
      setShipment(null);
      setError('Shipment not found');
    }
  };

  return (
    <div className="tracking-search">
      <h2>Track Your Shipment</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter tracking number"
          required
        />
        <button type="submit">Track</button>
      </form>

      {error && <p className="error">{error}</p>}
      
      {shipment && (
        <div className="shipment-details">
          <h3>Shipment Details</h3>
          <p><strong>Status:</strong> {shipment.status}</p>
          <p><strong>Origin:</strong> {`${shipment.origin.city}, ${shipment.origin.country}`}</p>
          <p><strong>Destination:</strong> {`${shipment.destination.city}, ${shipment.destination.country}`}</p>
          <p><strong>Customer:</strong> {shipment.customer.name}</p>
        </div>
      )}
    </div>
  );
}

export default TrackingSearch; 