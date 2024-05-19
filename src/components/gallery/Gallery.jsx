// import { Carousel } from '@material-tailwind/react';
// import React, { useState } from 'react';

// const Gallery = ({ images }) => {
//   // Лог для перевірки отриманих зображень
//   const [activeIndex, setActiveIndex] = useState(0);

//   if (!images || images.length === 0) {
//     return <div>No images available</div>;
//   }

//   return (
//     <Carousel
//       className="rounded-xl"
//       activeIndex={activeIndex}
//       onChange={newIndex => setActiveIndex(newIndex)}
//     >
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Image ${index}`}
//           className="h-full w-full object-cover"
//         />
//       ))}
//     </Carousel>
//   );
// };

// export default Gallery;

import { Carousel } from 'flowbite-react';
import React from 'react';

const Gallery = ({ images }) => {
  console.log('Gallery images:', images); // Лог для перевірки отриманих зображень
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Gallery;
