import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdBookmarkAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/campers/slice';
import css from './RandomCampers.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BookButton from 'components/buttons/BookButton/BookButton';

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
    console.log('Opening modal for camper:', camper);
  };

  return (
    <div className={css.content}>
      <h2 className={css.title}>Popular Campers</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
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
          <SwiperSlide
            className={css.swiperSlide}
            navigation={true}
            key={index}
          >
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
                  <BookButton
                    variant="contained"
                    className={css.camperBtn}
                    onClick={() => openModal(camper)}
                  >
                    Book Now!
                  </BookButton>
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
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import BookButton from 'components/buttons/BookButton/BookButton';

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
//           isFavorite: isCamperFavorite(camper._id),
//         }));
//         setCampers(campersWithFavorites);
//       } catch (error) {
//         console.error('Error fetching campers:', error);
//       }
//     };

//     fetchRandomCampers();
//   }, []);

//   useEffect(() => {
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

//   const isCamperFavorite = camperId => {
//     const favoriteCampers =
//       JSON.parse(localStorage.getItem('favoriteCampers')) || [];
//     return favoriteCampers.some(camper => camper._id === camperId);
//   };

//   const openModal = camper => {
//     console.log('Opening modal for camper:', camper);
//   };

//   return (
//     <div className={css.content}>
//       <h2 className={css.title}>Popular Campers</h2>
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={20}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         navigation
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 15,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//         }}
//       >
//         {campers.map((camper, index) => (
//           <SwiperSlide key={index}>
//             <div className={css.camperCard}>
//               <div className={css.camperInfo}>
//                 <h3 className={css.camperTitle}>{camper.name}</h3>
//                 <MdBookmarkAdd
//                   className={`${css.bookmark} ${
//                     camper.isFavorite ? css.favorite : ''
//                   }`}
//                   onClick={() => toggleFavorite(camper)}
//                   style={{
//                     fill: camper.isFavorite ? 'red' : 'orange',
//                   }}
//                 />
//               </div>

//               <div className={css.horizontalScroll}>
//                 {camper.gallery.map((image, idx) => (
//                   <img
//                     key={idx}
//                     src={image}
//                     alt={`Image ${idx}`}
//                     className={css.camperItem}
//                   />
//                 ))}
//               </div>
//               <div className={css.camperFooter}>
//                 <div className={css.camperDetails}>
//                   <p className={css.camperText}>
//                     Price: <span className={css.price}>$ {camper.price}</span>
//                   </p>
//                   <p className={css.camperText}>
//                     Rating: <span className={css.rating}>{camper.rating}</span>
//                   </p>
//                   <p className={css.camperText}>
//                     Location:{' '}
//                     <span className={css.location}>{camper.location}</span>
//                   </p>
//                 </div>
//                 <div>
//                   <BookButton
//                     variant="contained"
//                     className={css.camperBtn}
//                     onClick={() => openModal(camper)}
//                   >
//                     Book Now!
//                   </BookButton>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default RandomCampers;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MdBookmarkAdd } from 'react-icons/md';
// import { useDispatch } from 'react-redux';
// import { addFavorite, deleteFavorite } from '../../redux/campers/slice';
// import css from './RandomCampers.module.css';
// // import { Button } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css';
// import BookButton from 'components/buttons/BookButton/BookButton';

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
//           isFavorite: isCamperFavorite(camper._id),
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

//   const isCamperFavorite = camperId => {
//     const favoriteCampers =
//       JSON.parse(localStorage.getItem('favoriteCampers')) || [];
//     return favoriteCampers.some(camper => camper._id === camperId);
//   };

//   const openModal = camper => {
//     // Логіка для відкриття модального вікна
//     console.log('Opening modal for camper:', camper);
//   };

//   return (
//     <div className={css.content}>
//       <h2 className={css.title}>Popular Campers</h2>
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 15,
//           },
//           1024: {
//             slidesPerView: 4,
//             padding: '10px',
//             spaceBetween: 40,
//           },
//         }}
//         Navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//       >
//         {campers.map((camper, index) => (
//           <SwiperSlide key={index}>
//             <div className={css.camperCard}>
//               <div className={css.camperInfo}>
//                 <h3 className={css.camperTitle}>{camper.name}</h3>
//                 <MdBookmarkAdd
//                   className={`${css.bookmark} ${
//                     camper.isFavorite ? css.favorite : ''
//                   }`}
//                   onClick={() => toggleFavorite(camper)}
//                   style={{
//                     fill: camper.isFavorite ? 'red' : 'orange',
//                   }}
//                 />
//               </div>

//               <div className={css.horizontalScroll}>
//                 {camper.gallery.map((image, idx) => (
//                   <img
//                     key={idx}
//                     src={image}
//                     alt={`Image ${idx}`}
//                     className={css.camperItem}
//                   />
//                 ))}
//               </div>
//               <div className={css.camperFooter}>
//                 <div className={css.camperDetails}>
//                   <p className={css.camperText}>
//                     Price: <span className={css.price}>$ {camper.price}</span>
//                   </p>
//                   <p className={css.camperText}>
//                     Rating: <span className={css.rating}>{camper.rating}</span>
//                   </p>
//                   <p className={css.camperText}>
//                     Location:{' '}
//                     <span className={css.location}>{camper.location}</span>
//                   </p>
//                 </div>
//                 <div>
//                   <BookButton
//                     variant="contained"
//                     className={css.camperBtn}
//                     onClick={() => openModal(camper)}
//                   >
//                     Book Now!
//                   </BookButton>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default RandomCampers;
