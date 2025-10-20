import React from 'react';

const AdminDashboard = ({ data }) => (
  <div>
    <h3>User Management</h3>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr><th>ID</th><th>Email</th><th>Role</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td><button>Edit Role</button> <button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminDashboard;