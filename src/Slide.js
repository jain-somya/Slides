import React from "react";

function Slide({ slide }) {
  return (
    <div id="slide" className="w-full  text-center">
      <div className="w-full h-96  rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 ">
        <div className="w-full mb-10">
          <h1 className="text-2xl text-gray-800" data-testid="title">
            {slide.title}
          </h1>
        </div>
        <div className="w-full">
          <p
            className="text-xl text-gray-500 dark:text-gray-200 font-light"
            data-testid="text"
          >
            {slide.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
