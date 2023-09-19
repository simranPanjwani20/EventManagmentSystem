import React, { useState } from 'react';


function VendorDetail() {
  const [vendorId, setVendorId] = useState('');
  const [pass, setPass] = useState('');
 

  const handleLoginClick = () => {
    // Redirect to a new URL with the vendorId as a parameter
    window.location.href=`/login/${vendorId}`;
  };

  return (
    <div>
      <h2>Vendor Detail</h2>
      <input
        type="text"
        placeholder="Enter Vendor ID"
        value={vendorId}
        onChange={(e) => setVendorId(e.target.value)}
      />
       <input
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default VendorDetail;
