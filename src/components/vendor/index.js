import React from 'react';
import { useParams } from 'react-router-dom';
import VendorItems from '../vendorItems';

const VendorComponent = () => {
    const { vendorId } = useParams(); // Retrieve the parameter from the URL

    const displayItems = (value) => {
        window.location.href=`/${vendorId}/allItems`
     };

     const addProduct = (value) => {
        window.location.href=`/${vendorId}/addProduct`
     };
    
  return (
    <div className='content' style={{ position:"relative", top: "50%", left: "40%", padding:"20px"}}>
      <h1>Welcome Vendor</h1>
      <button type="button" class="btn btn-primary mx-2" onClick={() => displayItems(vendorId)}>Your Items</button>
      <button type="button" class="btn btn-primary mx-2" onClick={() => addProduct(vendorId)}>Add New Item</button>
      <button type="button" class="btn btn-primary mx-2" onClick={() => console.log('Transaction clicked')}>Transaction</button>
      <button type="button" class="btn btn-primary mx-2" onClick={() => console.log('Log Out clicked')}>Log Out</button>
    </div>
  );
}

export default VendorComponent;
