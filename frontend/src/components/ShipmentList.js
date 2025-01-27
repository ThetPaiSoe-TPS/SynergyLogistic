import React from 'react';

function ShipmentList({ shipments }) {
  return (
    <div className="shipment-list">
      <h2>All Shipments</h2>
      <table>
        <thead>
          <tr>
            <th>Tracking Number</th>
            <th>Status</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment._id}>
              <td>{shipment.trackingNumber}</td>
              <td>{shipment.status}</td>
              <td>{`${shipment.origin.city}, ${shipment.origin.country}`}</td>
              <td>{`${shipment.destination.city}, ${shipment.destination.country}`}</td>
              <td>{shipment.customer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShipmentList; 