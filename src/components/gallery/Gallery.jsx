import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ModalInfo from '../modals/modalInfo/ModalInfo'; // Імпорт компонента ModalInfo

const Gallery = () => {
  const [campers, setCampers] = useState([]);
  const [selectedCamper, setSelectedCamper] = useState(null); // Стан для вибраного кемпера
  const [modalOpen, setModalOpen] = useState(false); // Стан для відображення/приховування модального вікна

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

  return (
    <div>
      <Carousel>
        {campers.map((camper, index) => (
          <div key={index} onClick={() => openModal(camper)}>
            {' '}
            {/* Додано обробник кліку для відкриття модального вікна */}
            <img src={camper.gallery[0]} alt={`Camper ${index}`} />
            <p className="legend">{camper.name}</p>
          </div>
        ))}
      </Carousel>

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

// const Gallery = () => {
//   const [campers, setCampers] = useState([]);

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

//   return (
//     <div>
//       <h2>Gallery</h2>
//       <Carousel>
//         {campers.map((camper, index) => (
//           <div key={index}>
//             <img src={camper.gallery[0]} alt={`Camper ${index}`} />
//             <p className="legend">{camper.name}</p>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Gallery;