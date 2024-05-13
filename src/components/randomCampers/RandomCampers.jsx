import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './RandomCampers.module.css';

const RandomCampers = () => {
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    const fetchRandomCampers = async () => {
      try {
        const response = await axios.get(
          'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
        );
        // Отримайте чотири випадкові кемпери
        const randomCampers = getRandomItems(response.data, 4);
        setCampers(randomCampers);
      } catch (error) {
        console.error('Error fetching campers:', error);
      }
    };

    fetchRandomCampers();
  }, []);

  // Функція для вибору випадкових елементів з масиву
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div>
      <h2>Random Campers</h2>
      <ul>
        {campers.map((camper, index) => (
          <li className={css.camperCard} key={index}>
            <h3>{camper.name}</h3>

            <div className={css.horizontalScroll}>
              {camper.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className={css.camperItem}
                />
              ))}
            </div>

            <p>Price: ${camper.price}</p>
            <p>Location: {camper.location}</p>
            <p>Rating: {camper.rating}</p>
            {/* <p>Description: {camper.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomCampers;
