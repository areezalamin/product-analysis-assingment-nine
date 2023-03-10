import React from 'react'
import { Link } from 'react-router-dom'
import AllReview from '../AllReview/AllReview'
import Reviews from '../Reviews/Reviews'

const Review = () => {

    const review = [
        {id: 1, name: 'David Bekham', rating: '8/10', image: "./images/backham.png"},
        {id: 2, name: 'Christiano Ronaldo', rating: '7/10', image: "./images/ronaldo.png"},
        {id: 3, name: 'Nymar jr.', rating: '8.5/10', image: "./images/nymer.png"},
        {id: 4, name: 'Sakib Al Hasan', rating: '9/10', image: "./images/sakib.png"},
        {id: 5, name: 'Babar Ajam', rating: '9.5/10', image: "./images/babar.png"},
        {id: 6, name: 'Vinicus js', rating: '7.5/10', image: "./images/vinicius.png"},
        {id: 7, name: 'Thiago silva', rating: '4/10', image: "./images/silva.png"},
        {id: 8, name: 'AB D villiars', rating: '6/10', image: "./images/ab.png"},
    ]

        const handleShowAllReview =() =>{
            console.log('What is your name')
        }

  return (
    <div className='bg-teal-300'>
        <h1 className='text-center text-3xl mt-3'>Customer Review(4)</h1>
        <div className='grid md:grid-cols-4 gap-3 '>
            {
                review.map(option =><Reviews
                key={option.id}
                option={option}
                ></Reviews>
                ).slice(0, 4)
            }
        </div>
        <div className='flex justify-center'>
        <Link to="/AllReview"><button onClick={()=>handleShowAllReview()} className='text-xl text-center bg-yellow-400 rounded p-2'>See all reviews</button></Link>
        </div>    
    </div>
  )
}

export default Review