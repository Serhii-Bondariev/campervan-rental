import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdBookmarkAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/campers/slice';
import css from './RandomCampers.module.css';

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
          isFavorite: isCamperFavorite(camper._id), // Check if camper is favorite
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

  return (
    <div className={css.content}>
      <h2>Popular Campers</h2>
      <ul>
        {campers.map((camper, index) => (
          <li className={css.camperCard} key={index}>
            <h3>{camper.name}</h3>
            <MdBookmarkAdd
              className={`${css.bookmark} ${
                camper.isFavorite ? css.favorite : ''
              }`}
              onClick={() => toggleFavorite(camper)}
              style={{
                fill: camper.isFavorite ? 'red' : 'rgb(247, 180, 80)',
              }}
            />
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

export default RandomCampers;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MdBookmarkAdd } from 'react-icons/md';
// import { useDispatch } from 'react-redux';
// import { addFavorite, deleteFavorite } from '../../redux/campers/slice';
// import css from './RandomCampers.module.css';

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
//           isFavorite: false,
//         }));
//         setCampers(campersWithFavorites);
//       } catch (error) {
//         console.error('Error fetching campers:', error);
//       }
//     };

//     fetchRandomCampers();
//   }, []);

//   const getRandomItems = (array, count) => {
//     const shuffled = array.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
//   };

//   const toggleFavorite = camper => {
//     setCampers(prevCampers =>
//       prevCampers.map(prevCamper =>
//         prevCamper._id === camper._id
//           ? { ...prevCamper, isFavorite: !prevCamper.isFavorite }
//           : prevCamper
//       )
//     );

//     if (camper.isFavorite) {
//       dispatch(deleteFavorite(camper));
//     } else {
//       dispatch(addFavorite(camper));
//     }
//   };

//   return (
//     <div className={css.content}>
//       <h2>Popular Campers</h2>
//       <ul>
//         {campers.map((camper, index) => (
//           <li className={css.camperCard} key={index}>
//             <h3>{camper.name}</h3>
//             <MdBookmarkAdd
//               className={`${css.bookmark} ${
//                 camper.isFavorite ? css.favorite : ''
//               }`}
//               onClick={() => toggleFavorite(camper)}
//             />
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
//             <p>Price: ${camper.price}</p>
//             <p>Location: {camper.location}</p>
//             <p>Rating: {camper.rating}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RandomCampers;
