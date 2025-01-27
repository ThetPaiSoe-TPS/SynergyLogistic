const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  trackingNumber: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Transit', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  origin: {
    address: String,
    city: String,
    country: String,
    required: true
  },
  destination: {
    address: String,
    city: String,
    country: String,
    required: true
  },
  shipmentDate: {
    type: Date,
    default: Date.now
  },
  estimatedDelivery: Date,
  customer: {
    name: String,
    email: String,
    phone: String
  },
  items: [{
    description: String,
    quantity: Number,
    weight: Number
  }]
});

module.exports = mongoose.model('Shipment', shipmentSchema); 