const router = require('express').Router();
const Shipment = require('../models/Shipment');

// Get all shipments
router.get('/', async (req, res) => {
  try {
    const shipments = await Shipment.find();
    console.log('Retrieved shipments:', shipments);
    res.json(shipments);
  } catch (err) {
    console.error('Error getting shipments:', err);
    res.status(500).json({ message: err.message });
  }
});

// Create new shipment
router.post('/', async (req, res) => {
  const shipment = new Shipment({
    trackingNumber: generateTrackingNumber(),
    status: req.body.status,
    origin: req.body.origin,
    destination: req.body.destination,
    estimatedDelivery: req.body.estimatedDelivery,
    customer: req.body.customer,
    items: req.body.items
  });

  try {
    const newShipment = await shipment.save();
    console.log('Created new shipment:', newShipment);
    res.status(201).json(newShipment);
  } catch (err) {
    console.error('Error creating shipment:', err);
    res.status(400).json({ message: err.message });
  }
});

// Update shipment status
router.put('/:id', async (req, res) => {
  try {
    const updatedShipment = await Shipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedShipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Track shipment by tracking number
router.get('/track/:trackingNumber', async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ 
      trackingNumber: req.params.trackingNumber 
    });
    if (shipment) {
      res.json(shipment);
    } else {
      res.status(404).json({ message: 'Shipment not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

function generateTrackingNumber() {
  return 'TN' + Date.now().toString().slice(-10);
}

module.exports = router; 