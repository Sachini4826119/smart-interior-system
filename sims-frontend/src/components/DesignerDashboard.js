import React from 'react';

const DesignerDashboard = ({ data }) => (
  <div>
    <h3>Pending Approvals</h3>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr><th>Project</th><th>Customer</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {data.map((req) => (
          <tr key={req.id}>
            <td>{req.name}</td>
            <td>{req.customerEmail}</td>
            <td><button>Approve</button> <button>Reject</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DesignerDashboard;