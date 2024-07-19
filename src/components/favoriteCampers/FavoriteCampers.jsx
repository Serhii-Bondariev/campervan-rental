import { useSelector, useDispatch } from 'react-redux';
import { deleteFavorite } from '../../redux/campers/slice'; // Виправлення шляху до файлу
import css from './FavoriteCampers.module.css';
import BookButton from 'components/buttons/BookButton/BookButton';
import { Link } from 'react-router-dom';
import Gallery from 'components/gallery/Gallery';
import { CiBookmarkRemove } from 'react-icons/ci';

const FavoriteCampers = campers => {
  const favorites = useSelector(state => state.campers.favorites);
  const dispatch = useDispatch();

  const removeFromFavorites = camper => {
    dispatch(deleteFavorite(camper));
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Favorite Campers</h2>
      {favorites.length === 0 ? (
        <div className={css.noFavoritesWrapper}>
          {' '}
          <p className={css.noFavorites}>
            You have no favorite campers yet! <br /> But you can chose one from
            gallery bellow!
          </p>
          <div className={css.gallery}>
            <Gallery campers={campers} />
          </div>
          <Link to="/catalog">
            <button type="button" className={css.button}>
              Or choose one from catalog!
            </button>
          </Link>{' '}
        </div>
      ) : (
        <ul className={css.camperList}>
          {favorites.map((camper, index) => (
            <li className={css.camperCard} key={index}>
              <div className={css.camperInfo}>
                <h3 className={css.camperTitle}>{camper.name}</h3>
                <div className={css.tooltip}>
                  <CiBookmarkRemove
                    className={css.removeIcon}
                    onClick={() => removeFromFavorites(camper)}
                  />
                  <span className={css.tooltiptext}>Delete from favorites</span>
                </div>
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
      )}
    </div>
  );
};

export default FavoriteCampers;
