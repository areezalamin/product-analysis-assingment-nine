import React from 'react'

const Reviews = (props) => {
    const {name, rating, image} = props.option;
  return (
        <div className='bg-white p-4 rounded-lg'>     
        <div className='d-flex align-items-center  rounded text-xl'><img className='w-25 rounded-full' src={image} alt="" /><h3 className='ms-3'>{name}</h3>
        </div>
        <span className='text-xl font-bold'>Rating: {rating} </span> 
        </div>
  )
}

export default Reviews