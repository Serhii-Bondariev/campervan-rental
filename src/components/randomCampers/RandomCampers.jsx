import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdBookmarkAdd } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/campers/slice';
import css from './RandomCampers.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import MoreInfoBtn from 'components/buttons/moreInfoBtn/MoreInfoBtn';
import ReviewBtn from 'components/buttons/reviewBtn/ReviewBtn';
import GalleryBtn from 'components/buttons/galleryBtn/GalleryBtn';
import Reviews from 'components/review/Reviews';

const RandomCampers = () => {
  const [campers, setCampers] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRandomCampers = async () => {
      try {
        const response = await axios.get(
          'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
        );
        const randomCampers = getRandomItems(response.data, 4);
        const campersWithFavorites = randomCampers.map(camper => ({
          ...camper,
          isFavorite: isCamperFavorite(camper._id),
          showDetails: false,
          showReviews: false,
        }));
        setCampers(campersWithFavorites);
      } catch (error) {
        console.error('Error fetching campers:', error);
      }
    };

    fetchRandomCampers();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'favoriteCampers',
      JSON.stringify(campers.filter(camper => camper.isFavorite))
    );
  }, [campers]);

  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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

  const isCamperFavorite = camperId => {
    const favoriteCampers =
      JSON.parse(localStorage.getItem('favoriteCampers')) || [];
    return favoriteCampers.some(camper => camper._id === camperId);
  };

  const showDetails = camperId => {
    const updatedCampers = campers.map(camper =>
      camper._id === camperId ? { ...camper, showDetails: true } : camper
    );
    setCampers(updatedCampers);
  };

  const hideDetails = camperId => {
    const updatedCampers = campers.map(camper =>
      camper._id === camperId ? { ...camper, showDetails: false } : camper
    );
    setCampers(updatedCampers);
  };

  const showReviews = camperId => {
    const updatedCampers = campers.map(camper =>
      camper._id === camperId ? { ...camper, showReviews: true } : camper
    );
    setCampers(updatedCampers);
  };

  const hideReviews = camperId => {
    const updatedCampers = campers.map(camper =>
      camper._id === camperId ? { ...camper, showReviews: false } : camper
    );
    setCampers(updatedCampers);
  };

  const openLightbox = (images, index) => {
    const slides = images.map(src => ({ src }));
    setLightboxSlides(slides);
    setLightboxOpen(true);
  };

  return (
    <div className={css.content}>
      <h2 className={css.title}>Popular Campers</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        // }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {campers.map((camper, index) => (
          <SwiperSlide key={index}>
            <div className={css.camperCard}>
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
                {camper.gallery.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Image ${idx}`}
                    className={css.camperItem}
                    onClick={() => openLightbox(camper.gallery, idx)}
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
                  <div className={css.locationInfo}>
                    <GrLocation />
                    <p>
                      Locatoin:
                      <span className={css.location}>{camper.location}</span>
                    </p>
                  </div>
                </div>

                {!camper.showDetails ? (
                  <MoreInfoBtn onClick={() => showDetails(camper._id)} />
                ) : (
                  <div className={css.fullInfo}>
                    <p>
                      <strong>Technical Details:</strong>
                    </p>
                    <p>
                      <strong>Engine: </strong>
                      {camper.engine}
                    </p>
                    <p>
                      <strong>Transmission: </strong>
                      {camper.transmission}
                    </p>
                    <p>
                      <strong>Form: </strong>
                      {camper.form}
                    </p>
                    <p>
                      <strong>Length: </strong>
                      {camper.length}
                    </p>
                    <p>
                      <strong>Width: </strong>
                      {camper.width}
                    </p>
                    <p>
                      <strong>Height: </strong>
                      {camper.height}
                    </p>
                    <p>
                      <strong>Tank Capacity: </strong>
                      {camper.tank}
                    </p>
                    <p>
                      <strong>Consumption: </strong>
                      {camper.consumption}
                    </p>
                    <p>
                      <strong>Air Conditioner: </strong>
                      {camper.details.airConditioner}
                    </p>
                    <p>
                      <strong>Bathroom: </strong>
                      {camper.details.bathroom}
                    </p>
                    <p>
                      <strong>Kitchen: </strong>
                      {camper.details.kitchen}
                    </p>
                    <p>
                      <strong>Beds: </strong>
                      {camper.details.beds}
                    </p>
                    <p>
                      <strong>TV: </strong>
                      {camper.details.TV}
                    </p>
                    <p>
                      <strong>CD: </strong>
                      {camper.details.CD}
                    </p>
                    <p>
                      <strong>Radio: </strong>
                      {camper.details.radio}
                    </p>
                    <p>
                      <strong>Shower: </strong>
                      {camper.details.shower}
                    </p>
                    <p>
                      <strong>Toilet: </strong>
                      {camper.details.toilet}
                    </p>
                    <p>
                      <strong>Freezer: </strong>
                      {camper.details.freezer}
                    </p>
                    <p>
                      <strong>Hob: </strong>
                      {camper.details.hob}
                    </p>
                    <p>
                      <strong>Microwave: </strong>
                      {camper.details.microwave}
                    </p>
                    <p>
                      <strong>Gas: </strong>
                      {camper.details.gas}
                    </p>
                    <p>
                      <strong>Water: </strong>
                      {camper.details.water}
                    </p>
                    <div>
                      <button
                        className={css.closeBtn}
                        onClick={() => hideDetails(camper._id)}
                      >
                        Less Details
                      </button>

                      {camper.showReviews ? (
                        <div>
                          <h4>Reviews:</h4>
                          <Reviews reviews={camper.reviews.slice(0, 2)} />
                          <button
                            className={css.closeBtn}
                            onClick={() => hideReviews(camper._id)}
                          >
                            Close Reviews
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => showReviews(camper._id)}>
                          Rewivs
                        </button>
                      )}

                      <button onClick={() => openLightbox(camper.gallery, 0)}>
                        Photo
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className={css.border}></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
        />
      )}
    </div>
  );
};

export default RandomCampers;
