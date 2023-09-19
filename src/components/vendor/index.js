import React from 'react';

const VendorComponent = () => {
  return (
    <div className='content' style={{ position:"relative", top: "50%", left: "40%", padding:"20px"}}>
      <h1>Welcome Vendor</h1>
      <button type="button" class="btn btn-primary mx-2" onClick={() => console.log('Your Items clicked')}>Your Items</button>
      <button type="button" class="btn btn-primary mx-2" onClick={() => console.log('Add New Item clicked')}>Add New Item</button>
      <button type="button" class="btn btn-primary mx-2" onClick={() => console.log('Transaction clicked')}>Transaction</button>
      <button type="button" class="btn btn-primary mx-2" onClick={() => console.log('Log Out clicked')}>Log Out</button>
    </div>
  );
}

export default VendorComponent;
