import React from 'react';

function ProductCard({ productName, price, status, vendorName }) {
  const boxShadowStyle = {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
  };

  return (
    <div style={boxShadowStyle}>
      <h3>{productName}</h3>
      <p>Price: {price}</p>
      <p>Status: {status}</p>
      <p>Vendor: {vendorName}</p>
    </div>
  );
}

export default ProductCard;
