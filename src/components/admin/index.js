import React, { useState } from 'react';
import HomeComponent from '../home';
import VendorComponent from '../vendor';
import UserComponent from '../user'; 

function Admin() {
  const [showVendor, setShowVendor] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const handleMaintainVendorClick = () => {
    setShowVendor(true);
    setShowUser(false); // Hide the UserComponent when clicking on Maintain Vendor
  };

  const handleMaintainUserClick = () => {
    setShowUser(true);
    setShowVendor(false); // Hide the VendorComponent when clicking on Maintain User
  };

  return (
    
    <div>
      {showVendor ? (
        <VendorComponent />
      ) : showUser ? (
        <UserComponent />
      ) : (
        <HomeComponent
          onMaintainVendorClick={handleMaintainVendorClick}
          onMaintainUserClick={handleMaintainUserClick}
        />
      )}
    </div>
  );
}

export default Admin;
