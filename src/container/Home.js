import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from './DashBoard';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';
import Success from './Success';
import Signup from "../components/signup/signup"


export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<DashBoard />}/>
        <Route path='product/:id' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout/'>
          <Route path='' element={<Checkout />} />
          <Route path=':id' element={<Checkout />} />
          </Route>
          <Route path='/success' element={<Success />}/>
          <Route path="/signup" element={<Signup />}/>
          {/* <Route path="/Signup" element={<Signup />}></Route> */}
      </Routes>
      
    </div>
  );
}