import React, { useState } from "react";
import Slide from "./Slide";

function Slides({ slides }) {
  const [index, setIndex] = useState(0);

  console.log(index);
  return (
    <div>
      <div id="navigation" className=" items-center  ">
        <button
          className={`py-2 px-4 m-2 ${
            index === 0
              ? "bg-green-400"
              : "bg-green-600 hover:bg-green-700 focus:ring-green-500 "
          }   focus:ring-offset-green-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  `}
          data-testid="button-restart"
          disabled={index === 0}
          onClick={() => setIndex(0)}
        >
          Restart
        </button>
        <button
          className={`py-2 m-2  px-4 ${
            index === 0
              ? "bg-green-400"
              : "bg-green-600 hover:bg-green-700 focus:ring-green-500 "
          }    focus:ring-offset-green-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 `}
          data-testid="button-prev"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
        >
          Prev
        </button>{" "}
        <button
          data-testid="button-next"
          className={`py-2 m-2  px-4 ${
            index === slides.length - 1
              ? "bg-green-400"
              : "bg-green-600 hover:bg-green-700 focus:ring-green-500 "
          }    focus:ring-offset-green-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 `}
          onClick={() => setIndex(index + 1)}
          disabled={index === slides.length - 1}
        >
          Next
        </button>{" "}
      </div>

      <div className="p-8 h-screen bg-gray-200 dark:bg-gray-800 rounded-lg shadow">
        <div className="flex  justify-center">
          

            <Slide slide={slides[index]} />
        </div>
      </div>
    </div>
  );
}
export default Slides;
