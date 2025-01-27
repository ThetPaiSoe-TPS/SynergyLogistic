const admin = (req, res, next) => {
  console.log('Admin middleware - user:', req.user); // Debug log
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admin only.' });
  }
};

module.exports = admin; 