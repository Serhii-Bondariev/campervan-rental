import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './CampersList.module.css';
import Modal from '../modals/modal/Modal'; // Assuming you have a Modal component
import BookingForm from 'components/booking/BookingForm';

const CampersList = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const openModal = camper => {
    setSelectedCamper(camper);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCamper(null);
    setModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.campersCard}>
      <h2 className={css.title}>Campers</h2>
      <ul className={css.campersList}>
        {campers.map((camper, index) => (
          <li className={css.card} key={index}>
            <h3 className={css.cardTitle}>{camper.name}</h3>
            <img
              src={camper.gallery[0]} // Display only the first image
              alt={`Image ${index}`}
              onClick={() => openModal(camper)}
            />
            <p className={css.cardPrice}>Price: ${camper.price}</p>
            <p className={css.cardLocation}>Location: {camper.location}</p>
            <p className={css.cardRating}>Rating: {camper.rating}</p>
          </li>
        ))}
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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import css from './CampersList.module.css';

// const CampersList = () => {
//   const [campers, setCampers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCampers = async () => {
//       try {
//         const response = await axios.get(
//           'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
//         );
//         setCampers(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching campers:', error);
//         setLoading(false);
//       }
//     };

//     fetchCampers();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={css.campersCard}>
//       <h2 className={css.title}>Campers</h2>
//       <ul className={css.campersList}>
//         {campers.map((camper, index) => (
//           <li className={css.card} key={index}>
//             <h3 className={css.cardTitle}>{camper.name}</h3>
//             <div className={css.cardGallery}>
//               {camper.gallery.map((image, index) => (
//                 <img key={index} src={image} alt={`Image ${index}`} />
//               ))}
//             </div>
//             <p className={css.cardPrice}>Price: ${camper.price}</p>
//             <p className={css.cardLocation}>Location: {camper.location}</p>
//             <p className={css.cardRating}>Rating: {camper.rating}</p>
//             <div className={css.cardDetails}>
//               <p className={css.cardDescription}>
//                 <span className={css.descriptionlabel}>Description:</span>{' '}
//                 {camper.description}
//               </p>
//             </div>

//             {/* Add more details as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CampersList;
