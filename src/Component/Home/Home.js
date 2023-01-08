import React from 'react'
import Product from '../Product/product'
import Review from '../Review/Review'

const Home = () => {
  return (
    <div className='container'>
        <Product></Product>
        <Review></Review>
    </div>
  )
}

export default Home