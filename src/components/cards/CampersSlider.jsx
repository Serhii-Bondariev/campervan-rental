// import React, { useEffect, useState } from 'react';
// import css from './CampersSlider.module.css';

// const CampersSlider = () => {
//   const [campers, setCampers] = useState([]);

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

//     fetchData();
//   }, []);

//   return (
//     <div className={css.content}>
//       {campers.map((camper, index) => (
//         <div key={index} className={css.slider} data-id={`${index}`}>
//           {camper.gallery.map((image, idx) => (
//             <div key={idx}>
//               <img src={image} alt={`Camper ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CampersSlider;
