import React from 'react'
import { Productlist } from '../data/ProductList'
import ProductCard from '../components/ProductsCard'

export default function Dashboard() {
  return(
    <div className='d-flex flex-wrap justify-content-center p-3'>
      {Productlist.map((product) => <ProductCard{...product} key={product.id} /> )}
    </div>

  )
}