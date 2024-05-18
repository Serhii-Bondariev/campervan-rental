import React from 'react';
import { Carousel } from 'flowbite-react';

const Gallery = ({ images }) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
