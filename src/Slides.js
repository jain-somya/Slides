import React from "react";
import Slide from './Slide';

function Slides({ slides }) {
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined">
          Restart
        </button>
        <button data-testid="button-prev" className="small">
          Prev
        </button>{" "}
        <button data-testid="button-next" className="small">
          Next
        </button>{" "}
      </div>
      {slides.map((slide)=> {<Slide slide={slide}/>})}
      
    </div>
  );
}
export default Slides;
