import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavorite } from '../../redux/campers/slice'; // Виправлення шляху до файлу
import css from './FavoriteCampers.module.css';

const FavoriteCampers = () => {
  const favorites = useSelector(state => state.campers.favorites);
  const dispatch = useDispatch();

  const removeFromFavorites = camper => {
    dispatch(deleteFavorite(camper));
  };

  return (
    <div className={css.content}>
      <h2>Favorite Campers</h2>
      <ul>
        {favorites.map((camper, index) => (
          <li className={css.camperCard} key={index}>
            <h3>{camper.name}</h3>
            <button
              className={css.removeButton}
              onClick={() => removeFromFavorites(camper)}
              type="button" // Виправлення типу кнопки
            >
              Remove
            </button>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCampers;
