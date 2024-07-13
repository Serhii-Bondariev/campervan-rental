import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdBookmarkAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/campers/slice';
import css from './CampersList.module.css';
import Modal from '../modals/modal/Modal';
import BookingForm from 'components/modals/booking/BookingForm';
import Loader from 'components/loader/Loader';
import BookButton from 'components/buttons/BookButton/BookButton';

const CampersList = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

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

  useEffect(() => {
    // Save favorite campers to Local Storage
    localStorage.setItem(
      'favoriteCampers',
      JSON.stringify(campers.filter(camper => camper.isFavorite))
    );
  }, [campers]);

  const openModal = camper => {
    setSelectedCamper(camper);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCamper(null);
    setModalOpen(false);
  };

  const toggleFavorite = camper => {
    const updatedCampers = campers.map(prevCamper =>
      prevCamper._id === camper._id
        ? { ...prevCamper, isFavorite: !prevCamper.isFavorite }
        : prevCamper
    );

    setCampers(updatedCampers);

    if (camper.isFavorite) {
      dispatch(deleteFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  return (
    <div className={css.content}>
      <h2 className={css.title}>Our RV`s</h2>

      <ul className={css.campersList}>
        {loading ? (
          <div className={css.loader}>
            <Loader />
          </div>
        ) : (
          campers.map((camper, index) => (
            <li className={css.camperCard} key={index}>
              <div className={css.camperInfo}>
                <h3 className={css.camperTitle}>{camper.name}</h3>
                <MdBookmarkAdd
                  className={`${css.bookmark} ${
                    camper.isFavorite ? css.favorite : ''
                  }`}
                  onClick={() => toggleFavorite(camper)}
                  style={{
                    fill: camper.isFavorite ? 'red' : 'orange',
                  }}
                />
              </div>

              <div className={css.horizontalScroll}>
                {camper.gallery.map((image, index) => (
                  <img
                    onClick={() => openModal(camper)}
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

              <div></div>
            </li>
          ))
        )}
      </ul>
      {modalOpen && (
        <Modal onClose={closeModal}>
          <h2>{selectedCamper.name}</h2>
          <div className={css.cardGallery}>
            {selectedCamper.gallery.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
          <p className={css.cardPrice}>Price: ${selectedCamper.price}</p>
          <p className={css.cardLocation}>
            Location: {selectedCamper.location}
          </p>{' '}
          <p className={css.cardRating}>Rating: {selectedCamper.rating}</p>
          <div className={css.cardDetails}>
            <p className={css.cardDescription}>
              <span className={css.descriptionlabel}>Description:</span>{' '}
              {selectedCamper.description}
            </p>
          </div>
          <div>
            <BookingForm />
          </div>
          {/* Display additional details, reviews, and booking form */}
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default CampersList;
