import React from 'react'
import fadedCircles from './Fading_circles.gif'

const Spinner =()=> {
    return (
      <div className='text-center'>
        <img className="my-3"src={fadedCircles} alt="fadedCircles" />
      </div>
    )
  
}

export default Spinner
