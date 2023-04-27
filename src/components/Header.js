import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()  
  return (
    <div className='p-3 bg-primary'>
      <h3>Mohan</h3>
      <div className='row justify-content-center pt-2 pb-1'>
        <div className='col-sm=12 col-md-7 col-lg-6 col-xl-5 d-flex'>
          
          <input className='form-control' type='search'
          placeholder='search...' />
          <button className='btn btn-success ms-4'  onClick={() => navigate('/')}>Home</button>
          <button className='btn btn-success ms-5'onClick={() => navigate('/cart')}>Cart</button>
          <button className='btn btn-success ms-5'onClick={() => navigate('/signup')}>signup</button>
        </div>

      </div>
    </div>
  )
}