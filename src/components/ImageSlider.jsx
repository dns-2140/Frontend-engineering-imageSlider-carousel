import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currIndex, setCurrIndex] = useState(0);

  function showPrevImage(gap = 1) {
    if (currIndex !== 0) {
      setCurrIndex((state) => state - gap);
    }
  }

  function showNextImage(gap = 1) {
    console.log(currIndex, images.length - 1, gap);
    if (currIndex < images.length - 1) {
      setCurrIndex((state) => state + Math.abs(gap));
    }
  }

  function handleClickCircle(i) {
    setCurrIndex((state) => (state = i));
  }
  return (
    <div className='imageSliderContainer'>
      <div className='imageSlider'>
        {images.map((image) => (
          <img
            src={image.imageUrl}
            className='img'
            key={image.id}
            style={{ transform: `translateX(${currIndex * -100}%)` }}
          />
        ))}
      </div>
      <div className='arrow-container'>
        <button className='left-button' onClick={() => showPrevImage()}>
          <i className='fa-solid fa-arrow-left'></i>
        </button>
        <button className='right-button' onClick={() => showNextImage()}>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
      <div className='circle-container'>
        {images.map((image, index) => (
          <div
            className='slider-circle'
            key={image.id}
            onClick={() => handleClickCircle(index)}
          ></div>
        ))}
      </div>
      {currIndex}
    </div>
  );
};

export default ImageSlider;
