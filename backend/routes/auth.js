const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    console.log('Received registration request:', { ...req.body, password: '[HIDDEN]' });

    // Validate required fields
    const requiredFields = ['companyName', 'firstName', 'lastName', 'email', 'password', 'phoneNumber', 'address', 'city', 'state', 'zipCode'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        message: `Missing required fields: ${missingFields.join(', ')}` 
      });
    }

    // Check if user already exists
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const user = new User({
      ...req.body,
      password: hashedPassword
    });

    console.log('Attempting to save user:', { ...user.toObject(), password: '[HIDDEN]' });

    const savedUser = await user.save();
    console.log('User saved successfully:', savedUser._id);
    
    // Create token with more user information
    const token = jwt.sign(
      { 
        id: savedUser._id,
        email: savedUser.email,
        companyName: savedUser.companyName
      }, 
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.status(201).json({ 
      message: 'Registration successful',
      token,
      user: {
        id: savedUser._id,
        email: savedUser.email,
        companyName: savedUser.companyName
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({ 
      message: error.message || 'Registration failed',
      error: process.env.NODE_ENV === 'development' ? error.toString() : undefined
    });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Email or password is incorrect' });
    }

    console.log('User found:', user); // Debug log
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    console.log('Password valid:', validPassword); // Debug log
    if (!validPassword) {
      return res.status(400).json({ message: 'Email or password is incorrect' });
    }

    // Create token with user information
    const token = jwt.sign(
      { 
        id: user._id,
        email: user.email,
        companyName: user.companyName,
        isAdmin: user.isAdmin
      }, 
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ 
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        companyName: user.companyName,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(400).json({ message: 'Login failed' });
  }
});

module.exports = router; 