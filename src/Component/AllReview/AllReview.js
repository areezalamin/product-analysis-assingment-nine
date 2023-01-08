import React from 'react'
import Reviews from '../Reviews/Reviews'

const AllReview = () => {

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

  return (
    <div className='p-4 mt-8'>
        <div className='grid md:grid-cols-4 gap-3 '>
            {
                review.map(option =><Reviews
                key={option.id}
                option={option}
                ></Reviews>
                )
            }
        </div>    
    </div>
  )
}

export default AllReview