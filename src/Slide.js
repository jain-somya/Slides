import React from 'react'

function Slide({slide}) {
  return (
    <div id="slide" className="card text-center">
    <h1 data-testid={slide.title}>{slide.title}</h1>
    <p data-testid={slide.title}>{slide.text}</p>
  </div>
  )
}

export default Slide