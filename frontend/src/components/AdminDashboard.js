import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import { logos } from '../assets/images';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Fetch users data
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (!token || !userData.isAdmin) {
      navigate('/client-login');
      return;
    }

    fetchUsers();
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch users');
      }

      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleEdit = (userId) => {
    console.log('Editing user with ID:', userId);
    navigate(`/admin/edit-user/${userId}`);
  };

  const handleDelete = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete user');
      }

      // Remove the deleted user from the state
      setUsers(users.filter(user => user._id !== userId));
    } catch (err) {
      console.error('Error deleting user:', err);
      setError(err.message);
    }
  };

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 650000 },
    { month: 'Feb', revenue: 750000 },
    { month: 'Mar', revenue: 850000 },
    { month: 'Apr', revenue: 950000 },
    { month: 'May', revenue: 1100000 },
    { month: 'Jun', revenue: 1200000 }
  ];

  const shipmentStatusData = [
    { name: 'In Transit', value: 45 },
    { name: 'Delivered', value: 30 },
    { name: 'Pending', value: 15 },
    { name: 'Delayed', value: 10 }
  ];

  const warehouseData = [
    { name: 'Minneapolis', performance: 92 },
    { name: 'Chicago', performance: 88 },
    { name: 'Dallas', performance: 85 },
    { name: 'Phoenix', performance: 82 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className={`admin-dashboard ${darkMode ? 'dark-mode' : ''}`}>
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <img src={logos.synergy} alt="Synergy Logistics" className="dashboard-logo" />
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <i className="fas fa-home"></i>
            Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <i className="fas fa-users"></i>
            Users Management
          </button>
          <button 
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <i className="fas fa-shipping-fast"></i>
            Orders & Shipments
          </button>
          <button 
            className={`nav-item ${activeTab === 'warehouses' ? 'active' : ''}`}
            onClick={() => setActiveTab('warehouses')}
          >
            <i className="fas fa-warehouse"></i>
            Warehouses
          </button>
          <button 
            className={`nav-item ${activeTab === 'fleet' ? 'active' : ''}`}
            onClick={() => setActiveTab('fleet')}
          >
            <i className="fas fa-truck"></i>
            Fleet Tracking
          </button>
          <button 
            className={`nav-item ${activeTab === 'finance' ? 'active' : ''}`}
            onClick={() => setActiveTab('finance')}
          >
            <i className="fas fa-dollar-sign"></i>
            Finance & Billing
          </button>
          <button 
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <i className="fas fa-chart-bar"></i>
            Analytics & Reports
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="fas fa-cog"></i>
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Header */}
        <div className="dashboard-header">
          <div className="header-search">
            <input type="text" placeholder="Search..." />
            <i className="fas fa-search"></i>
          </div>
          <div className="header-actions">
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
            </button>
            <button className="notifications">
              <i className="fas fa-bell"></i>
              <span className="badge">3</span>
            </button>
            <div className="admin-profile">
            <img src="https://cdn-icons-png.flaticon.com/512/456/456283.png" alt="Admin" />
              {/* <span>Admin</span> */}
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {error ? (
            <div className="error-message">{error}</div>
          ) : loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <>
              {activeTab === 'overview' && (
                <div className="overview-section">
                  {/* Summary Cards */}
                  <div className="stats-grid">
                    <div className="stat-card">
                      <i className="fas fa-users"></i>
                      <div className="stat-info">
                        <h3>Total Users</h3>
                        <p>{users.length}</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <i className="fas fa-shipping-fast"></i>
                      <div className="stat-info">
                        <h3>Active Shipments</h3>
                        <p>45</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <i className="fas fa-warehouse"></i>
                      <div className="stat-info">
                        <h3>Warehouses</h3>
                        <p>12</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <i className="fas fa-box"></i>
                      <div className="stat-info">
                        <h3>Total Orders</h3>
                        <p>2,350</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <i className="fas fa-clock"></i>
                      <div className="stat-info">
                        <h3>Pending Deliveries</h3>
                        <p>65</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <i className="fas fa-dollar-sign"></i>
                      <div className="stat-info">
                        <h3>Revenue This Month</h3>
                        <p>$1.2M</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <i className="fas fa-truck"></i>
                      <div className="stat-info">
                        <h3>On-Time Delivery Rate</h3>
                        <p>94%</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <i className="fas fa-star"></i>
                      <div className="stat-info">
                        <h3>Customer Satisfaction</h3>
                        <p>4.7/5</p>
                      </div>
                    </div>
                  </div>

                  {/* Charts Section */}
                  <div className="charts-section">
                    <div className="chart-container">
                      <h3>Revenue Growth</h3>
                      <LineChart width={600} height={300} data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#006B3F" />
                      </LineChart>
                    </div>

                    <div className="chart-container">
                      <h3>Shipment Status</h3>
                      <PieChart width={400} height={300}>
                        <Pie
                          data={shipmentStatusData}
                          cx={200}
                          cy={150}
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label
                        >
                          {shipmentStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </div>

                    <div className="chart-container">
                      <h3>Top Performing Warehouses</h3>
                      <BarChart width={600} height={300} data={warehouseData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="performance" fill="#006B3F" />
                      </BarChart>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'users' && (
                <div className="users-section">
                  <h2>Users Management</h2>
                  <div className="users-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Company</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Location</th>
                          <th>Role</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user._id}>
                            <td>{user.companyName}</td>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.email}</td>
                            <td>{`${user.city}, ${user.state}`}</td>
                            <td>{user.isAdmin ? 'Admin' : 'User'}</td>
                            <td>
                              <button onClick={() => handleEdit(user._id)}>Edit</button>
                              <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard; 