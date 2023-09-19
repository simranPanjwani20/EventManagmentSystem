import React from 'react';

const HomeComponent = (props) => {
  return (
    <div className='content' style={{ position:"relative", top: "50%", left: "40%", padding:"20px"}}>
      <h1>Welcome User</h1>
      <button type="button" class="btn btn-primary mx-2" onClick={props.onMaintainVendorClick}>Maintain Vendor</button>
      <button type="button" class="btn btn-primary" onClick={props.onMaintainUserClick}>Maintain User</button>
    </div>
  );
}

export default HomeComponent;
