import React from 'react';

const SupplierDashboard = ({ data }) => (
  <div>
    <h3>Inventory Management</h3>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr><th>Item</th><th>Stock</th><th>Price</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.stock}</td>
            <td>{item.price}</td>
            <td><button>Update</button> <button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    <button>Add New Item</button>
  </div>
);

export default SupplierDashboard;