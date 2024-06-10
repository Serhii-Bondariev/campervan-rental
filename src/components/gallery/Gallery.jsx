import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import ModalInfo from '../modals/modalInfo/ModalInfo';
import css from './Gallery.module.css';

const Gallery = () => {
  const [campers, setCampers] = useState([]);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        const response = await axios.get(
          'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
        );
        setCampers(response.data);
      } catch (error) {
        console.error('Error fetching campers:', error);
      }
    };

    fetchCampers();
  }, []);

  const openModal = camper => {
    setSelectedCamper(camper);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const shouldLoop = campers.length >= 3; // Мінімальна кількість слайдів для зациклення

  return (
    <div className={css.wrapper}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination]}
        loop={shouldLoop} // Вмикаємо зациклення, якщо достатньо слайдів
        className="mySwiper"
      >
        {campers.map((camper, index) => (
          <SwiperSlide key={index} onClick={() => openModal(camper)}>
            <img className={css.img} src={camper.gallery[0]} alt={`Camper ${index}`} />
            <p className={css.legend}>{camper.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Відображення модального вікна з детальною інформацією про кемпер */}
      {modalOpen && selectedCamper && (
        <ModalInfo camper={selectedCamper} onClose={closeModal} />
      )}
    </div>
  );
};

export default Gallery;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import ModalInfo from '../modals/modalInfo/ModalInfo';
// import css from './Gallery.module.css';

// const Gallery = () => {
//   const [campers, setCampers] = useState([]);
//   const [selectedCamper, setSelectedCamper] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchCampers = async () => {
//       try {
//         const response = await axios.get(
//           'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
//         );
//         setCampers(response.data);
//       } catch (error) {
//         console.error('Error fetching campers:', error);
//       }
//     };

//     fetchCampers();
//   }, []);

//   const openModal = camper => {
//     setSelectedCamper(camper);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div className={css.wrapper}>
//       <Carousel>
//         {campers.map((camper, index) => (
//           <div key={index} onClick={() => openModal(camper)}>
//             {' '}
//             {/* Додано обробник кліку для відкриття модального вікна */}
//             <img src={camper.gallery[0]} alt={`Camper ${index}`} />
//             <p className="legend">{camper.name}</p>
//           </div>
//         ))}
//       </Carousel>

//       {/* Відображення модального вікна з детальною інформацією про кемпер */}
//       {modalOpen && selectedCamper && (
//         <ModalInfo camper={selectedCamper} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default Gallery;
