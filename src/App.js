import React, { useState } from 'react';
import HomeComponent from './components/home';
import VendorComponent from './components/vendor';
import UserComponent from './components/user'; 
import Admin from './components/admin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendorList from './components/allvendors';
import ProductList from './components/allProduct';
import BagPopover from './components/bag';
import { BagProvider } from './context/bag';
import GuestList from './components/guestList';
import VendorDetail from './components/vendorDetail';
import VendorItems from './components/vendorItems';
import ProductForm from './components/addProduct';

function App() {

  const setLocation = ()=>{
    window.location.href='/'
  }

  return (
    <>
    <button type="button" class="btn btn-primary mx-5 my-4" onClick={setLocation}>Home</button>
   {/* <VendorList/> */}
   <BagProvider>
    <Router>
    <Routes>
    <Route exact path="/" element={<Admin/>}/>
    <Route exact path="/cart" element={<BagPopover/>}/>
    <Route exact path="/guestList" element={<GuestList/>}/>
    <Route exact path="/:categoryID"  element={<VendorList/>}  />
    <Route exact path="/products/:vendorId"  element={<ProductList/>}  />
    <Route exact path="/login/:vendorId"  element={<VendorComponent/>}  />
    <Route exact path="/:vendorId/allItems"  element={<VendorItems/>}  />
    <Route exact path="/:vendorId/addProduct"  element={<ProductForm/>}  />
  </Routes>
  </Router>
  </BagProvider>
  </>
  );
}

export default App;
