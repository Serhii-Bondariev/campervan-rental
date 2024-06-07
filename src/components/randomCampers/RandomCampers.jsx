import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdBookmarkAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/campers/slice';
import css from './RandomCampers.module.css';
import { Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RandomCampers = () => {
  const [campers, setCampers] = useState([]);
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
        }));
        setCampers(campersWithFavorites);
      } catch (error) {
        console.error('Error fetching campers:', error);
      }
    };

    fetchRandomCampers();
  }, []);

  useEffect(() => {
    // Save favorite campers to Local Storage
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

  const openModal = camper => {
    // Логіка для відкриття модального вікна
    console.log('Opening modal for camper:', camper);
  };

  return (
    <div className={css.content}>
      <h2 className={css.title}>Popular Campers</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
            padding: '10px',
            spaceBetween: 40,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
                  <Button
                    variant="contained"
                    className={css.camperBtn}
                    onClick={() => openModal(camper)}
                  >
                    Book Now!
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RandomCampers;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MdBookmarkAdd } from 'react-icons/md';
// import { useDispatch } from 'react-redux';
// import { addFavorite, deleteFavorite } from '../../redux/campers/slice';
// import css from './RandomCampers.module.css';
// import { Button } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// const RandomCampers = () => {
//   const [campers, setCampers] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchRandomCampers = async () => {
//       try {
//         const response = await axios.get(
//           'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
//         );
//         const randomCampers = getRandomItems(response.data, 4);
//         const campersWithFavorites = randomCampers.map(camper => ({
//           ...camper,
//           isFavorite: isCamperFavorite(camper._id), // Check if camper is favorite
//         }));
//         setCampers(campersWithFavorites);
//       } catch (error) {
//         console.error('Error fetching campers:', error);
//       }
//     };

//     fetchRandomCampers();
//   }, []);

//   useEffect(() => {
//     // Save favorite campers to Local Storage
//     localStorage.setItem(
//       'favoriteCampers',
//       JSON.stringify(campers.filter(camper => camper.isFavorite))
//     );
//   }, [campers]);

//   const getRandomItems = (array, count) => {
//     const shuffled = array.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
//   };

//   const toggleFavorite = camper => {
//     const updatedCampers = campers.map(prevCamper =>
//       prevCamper._id === camper._id
//         ? { ...prevCamper, isFavorite: !prevCamper.isFavorite }
//         : prevCamper
//     );

//     setCampers(updatedCampers);

//     if (camper.isFavorite) {
//       dispatch(deleteFavorite(camper));
//     } else {
//       dispatch(addFavorite(camper));
//     }
//   };

//   let swiper = new Swiper('.camperList', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     effect: 'fade',
//     mousewhell: {
//       invert: false,
//     },
//     loop: true,

//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 10,
//       },
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//       1024: {
//         slidesPerView: 4,
//         spaceBetween: 40,
//       },
//     },
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

//   const isCamperFavorite = camperId => {
//     const favoriteCampers =
//       JSON.parse(localStorage.getItem('favoriteCampers')) || [];
//     return favoriteCampers.some(camper => camper._id === camperId);
//   };

//   return (
//     <div className={css.content}>
//       <h2 className={css.title}>Popular Campers</h2>
//       <ul className={css.camperList}>
//         {campers.map((camper, index) => (
//           <li className={css.camperCard} key={index}>
//             <div className={css.camperInfo}>
//               <h3 className={css.camperTitle}>{camper.name}</h3>
//               <MdBookmarkAdd
//                 className={`${css.bookmark} ${
//                   camper.isFavorite ? css.favorite : ''
//                 }`}
//                 onClick={() => toggleFavorite(camper)}
//                 style={{
//                   fill: camper.isFavorite ? 'red' : 'orange',
//                 }}
//               />
//             </div>

//             <div className={css.horizontalScroll}>
//               {camper.gallery.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Image ${index}`}
//                   className={css.camperItem}
//                 />
//               ))}
//             </div>
//             <div className={css.camperFooter}>
//               <div className={css.camperDetails}>
//                 <p className={css.camperText}>
//                   Price: <span className={css.price}>$ {camper.price}</span>
//                 </p>

//                 <p className={css.camperText}>
//                   Rating: <span className={css.rating}>{camper.rating}</span>
//                 </p>
//                 <p className={css.camperText}>
//                   Location:{' '}
//                   <span className={css.location}>{camper.location}</span>
//                 </p>
//               </div>
//               <div>
//                 <Button
//                   variant="contained"
//                   className={css.camperBtn}
//                   onClick={() => openModal(camper)}
//                 >
//                   Book Now!
//                 </Button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RandomCampers;
