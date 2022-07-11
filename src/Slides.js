import React, { useState } from 'react';
import Slide from './Slide';


function Slides({ slides }) {

    const [index, setIndex] = useState(0);

console.log(index)  
return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" disabled={index===0} onClick={()=>setIndex(0)} className="small outlined">
          Restart
        </button>
        <button data-testid="button-prev" disabled={index===0} onClick={()=>setIndex(index-1)} className="small">
          Prev
        </button>{" "}
        
        <button data-testid="button-next" className="small" onClick={()=>setIndex(index+1)} disabled={index===slides.length-1}>
          Next
        </button>{" "}
      </div>
      <Slide slide={slides[index]}/>
      
      
      
    </div>
  );
}
export default Slides;
