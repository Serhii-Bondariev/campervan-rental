import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampersList = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        const response = await axios.get(
          'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
        );
        setCampers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching campers:', error);
        setLoading(false);
      }
    };

    fetchCampers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Campers</h2>
      <ul>
        {campers.map(camper => (
          <li key={camper._id}>
            <h3>{camper.name}</h3>
            <div>
              {camper.gallery.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))}
            </div>
            <p>Price: ${camper.price}</p>
            <p>Location: {camper.location}</p>
            <p>Rating: {camper.rating}</p>
            <p>Description: {camper.description}</p>

            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
