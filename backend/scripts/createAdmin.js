require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    
    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@synergy.com' });
    if (adminExists) {
      console.log('Admin user already exists. Updating user...');
      // Optionally update the existing user
      adminExists.password = await bcrypt.hash('admin123', 10); // Update password if needed
      await adminExists.save();
      console.log('Admin user updated successfully');
      process.exit(0);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    
    // Create admin user
    const adminUser = new User({
      companyName: "Synergy Admin",
      firstName: "Admin",
      lastName: "User",
      email: "admin@synergy.com",
      password: hashedPassword,
      phoneNumber: "1234567890",
      address: "123 Admin Street",
      city: "Minneapolis",
      state: "MN",
      zipCode: "55401",
      isAdmin: true
    });

    await adminUser.save();
    console.log('Admin user created successfully');
    console.log('Email: admin@synergy.com');
    console.log('Password: admin123');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
}

createAdmin(); 