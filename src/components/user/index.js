import React from 'react';

const UserComponent = () => {
    const handleOptionClick = (selectedOption) => {
        // Use history.push to change the URL to the selected option
        window.location.href=`/${selectedOption}`
      };

      const handleCart = () => {
        window.location.href=`/cart`
      };

      const handleGuestList = () => {
        window.location.href=`/guestList`
      };
  return (
    <div className='content' style={{ position:"relative", top: "50%", left: "40%", padding:"20px"}}>
      <h1>Welcome User</h1>
      {/* <div class="dropdown"> */}
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Vendor
  </a>

  <ul class="dropdown-menu">
    <li> <a onClick={() => handleOptionClick('1')} class="dropdown-item" href="#">Catering</a></li>
    <li><a onClick={() => handleOptionClick('1')} class="dropdown-item" href="#">Florist</a></li>
    <li><a onClick={() => handleOptionClick('3')} class="dropdown-item" href="#">Decoration</a></li>
    <li><a onClick={() => handleOptionClick('4')} class="dropdown-item" href="#">Lighting</a></li>
  </ul>
{/* </div> */}
      <button type="button" class="btn btn-primary mx-2" onClick={handleCart}>cart</button>
      <button type="button" class="btn btn-primary mx-2" onClick={handleGuestList}>Guest List</button>
      <button type="button" class="btn btn-primary mx-2" onClick={() => console.log('Log Out clicked')}>Order status</button>
    </div>
  );
}

export default UserComponent;
