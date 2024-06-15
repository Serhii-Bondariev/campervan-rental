import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavorite } from '../../redux/campers/slice'; // Виправлення шляху до файлу
import css from './FavoriteCampers.module.css';
import BookButton from 'components/buttons/BookButton/BookButton';

const FavoriteCampers = () => {
  const favorites = useSelector(state => state.campers.favorites);
  const dispatch = useDispatch();

  const removeFromFavorites = camper => {
    dispatch(deleteFavorite(camper));
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Favorite Campers</h2>
      <ul className={css.camperList}>
        {favorites.map((camper, index) => (
          <li className={css.camperCard} key={index}>
            <div className={css.camperInfo}>
              <h3 className={css.camperTitle}>{camper.name}</h3>
              <button
                className={css.removeButton}
                onClick={() => removeFromFavorites(camper)}
                type="button"
              >
                Remove
              </button>
            </div>
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
            <div className={css.camperFooter}>
              <div className={css.camperDetails}>
                <p className={css.camperText}>
                  Price: <span className={css.price}>$ {camper.price}</span>
                </p>
                <p className={css.camperText}>
                  Rating: <span className={css.rating}>{camper.rating}</span>
                </p>
                <p className={css.camperText}>
                  Location:{' '}
                  <span className={css.location}>{camper.location}</span>
                </p>
              </div>
              <div>
                <BookButton
                  variant="contained"
                  className={css.camperBtn}
                  onClick={() => openModal(camper)}
                >
                  Book Now!
                </BookButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCampers;
