import React, { useState } from 'react';
import HomeComponent from './components/home';
import VendorComponent from './components/vendor';
import UserComponent from './components/user'; 
import Admin from './components/admin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendorList from './components/allvendors';
import ProductList from './components/allProduct';

function App() {


  return (
    <>
   {/* <VendorList/> */}
    <Router>
    <Routes>
    <Route exact path="/" element={<Admin/>}/>
    <Route exact path="/:vendor"  element={<VendorList/>}  />
    <Route exact path="/products/:product"  element={<ProductList/>}  />
  </Routes>
  </Router>
  </>
  );
}

export default App;
