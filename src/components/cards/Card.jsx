import React from 'react';

const Card = ({ name, gallery, price, location, rating, description }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <div>
        {gallery.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <p>Price: ${price}</p>
      <p>Location: {location}</p>
      <p>Rating: {rating}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Card;
