import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './container/Category/Category';
import Home from './container/Home/Home'
import Order from './container/Order/any';
import Product from './container/Product/any';
import AdminFooter from './components/CoreLayout/AdminFooter';





function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>

      {/* <AdminFooter /> */}
    </>
  );
}

export default App;
