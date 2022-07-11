import React from 'react'

function Slide({slide}) {
  return (
      
    <div id="slide" className="card text-center">
    <h1 className='text-2xl text-gray-800' data-testid='title'>{slide.title}</h1>
    <p className="text-xl text-gray-500 dark:text-gray-200 font-light" data-testid='text'>{slide.text}</p>
  </div>
  )
}

export default Slide