import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditUser.css';

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      console.log('Token:', token);
      console.log('User ID:', id);
      
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch user');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error('Error fetching user:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      navigate('/admin'); // Redirect back to admin dashboard
    } catch (err) {
      console.error('Error updating user:', err);
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="edit-user-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            value={user?.companyName || ''}
            onChange={(e) => setUser({ ...user, companyName: e.target.value })}
            placeholder="Company Name"
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={user?.firstName || ''}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={user?.lastName || ''}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={user?.email || ''}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={user?.phoneNumber || ''}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
            placeholder="Phone Number"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={user?.address || ''}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            placeholder="Address"
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            value={user?.city || ''}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
            placeholder="City"
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            value={user?.state || ''}
            onChange={(e) => setUser({ ...user, state: e.target.value })}
            placeholder="State"
          />
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input
            type="text"
            value={user?.zipCode || ''}
            onChange={(e) => setUser({ ...user, zipCode: e.target.value })}
            placeholder="Zip Code"
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="save-button">Save Changes</button>
          <button type="button" className="cancel-button" onClick={() => navigate('/admin')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser; 