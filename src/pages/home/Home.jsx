// import React, { useState, useEffect } from 'react';
// import css from './Home.module.css';
// import RandomCampers from 'components/randomCampers/RandomCampers';
// import Video from 'components/video/Video';
// import Reviews from 'components/review/Reviews';
// import ReviewHeader from 'components/reviewHeder/ReviewHeder';

// const Home = ({ campers }) => {
//   const [reviews, setReviews] = useState([]);
//   const [showReviews, setShowReviews] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
//         );
//         const data = await response.json();
//         const allReviews = data.flatMap(rv =>
//           (rv.reviews || []).map(review => ({ ...review, gallery: rv.gallery }))
//         );
//         setReviews(allReviews);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleShowReviews = () => {
//     setShowReviews(prevShowReviews => !prevShowReviews);
//   };

//   return (
//     <div className={css.homeWrapper}>
//       <Video />
//       <RandomCampers campers={campers} />
//       <ReviewHeader reviews={reviews} onShowReviews={handleShowReviews} />
//       {showReviews && <Reviews reviews={reviews} />}
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import css from './Home.module.css';
// import BookingForm from '../../components/booking/BookingForm';
// import RandomCampers from 'components/randomCampers/RandomCampers';
// import Gallery from 'components/gallery/Gallery';
// import Video from 'components/video/Video';
// import Reviews from 'components/review/Reviews'; // Переконайтеся, що шлях правильний
// import ReviewHeder from 'components/reviewHeder/ReviewHeder'; // Переконайтеся, що шлях правильний

// const Home = ({ campers }) => {
//   const [reviews, setReviews] = useState([]);
//   const [showReviews, setShowReviews] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
//         );
//         const data = await response.json();
//         const allReviews = data.flatMap(rv =>
//           (rv.reviews || []).map(review => ({ ...review, gallery: rv.gallery }))
//         );
//         setReviews(allReviews);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleShowReviews = () => {
//     setShowReviews(prevShowReviews => !prevShowReviews);
//   };

//   return (
//     <div className={css.homeWrapper}>
//       <Video />
//       <RandomCampers campers={campers} />
//       <ReviewHeder reviews={reviews} onShowReviews={handleShowReviews} />
//       {showReviews && <Reviews reviews={reviews} />}
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import css from './Home.module.css';
// import BookingForm from '../../components/booking/BookingForm';
// import RandomCampers from 'components/randomCampers/RandomCampers';
// import Gallery from 'components/gallery/Gallery';
// import Video from 'components/video/Video';
// import Reviews from 'components/rewiev/Rewievs'; // Виправлений шлях імпорту
// import ReviewHeader from 'components/reviewHeder/ReviewHeder'; // Виправлений шлях імпорту
// // import CardAnimation from 'components/cardAnimation/CardAnimation';
// // import BookButton from 'components/buttons/BookButton/BookButton';

// const Home = ({ campers }) => {
//   const [reviews, setReviews] = useState([]);
//   const [showReviews, setShowReviews] = useState(false); // Додаємо стан для видимості компоненту Reviews

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
//         );
//         const data = await response.json();
//         const allReviews = data.flatMap(rv =>
//           (rv.reviews || []).map(review => ({ ...review, gallery: rv.gallery }))
//         );
//         setReviews(allReviews);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleShowReviews = () => {
//     setShowReviews(prevShowReviews => !prevShowReviews); // Перемикаємо стан видимості компоненту Reviews
//   };

//   return (
//     <div className={css.homeWrapper}>
//       <Video />
//       <RandomCampers campers={campers} />
//       <ReviewHeader reviews={reviews} onShowReviews={handleShowReviews} />
//       {showReviews && <Reviews reviews={reviews} />}
//     </div>
//   );
// };

// export default Home;
// Home.jsx
import React, { useState, useEffect } from 'react';
import css from './Home.module.css';
import RandomCampers from 'components/randomCampers/RandomCampers';
import Video from 'components/video/Video';
import Reviews from 'components/review/Reviews';
import ReviewHeader from 'components/reviewHeder/ReviewHeder';

const Home = ({ campers }) => {
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
        );
        const data = await response.json();
        const allReviews = data.flatMap(rv =>
          (rv.reviews || []).map(review => ({ ...review, gallery: rv.gallery }))
        );
        setReviews(allReviews);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowReviews = () => {
    setShowReviews(prevShowReviews => !prevShowReviews);
  };

  return (
    <div className={css.homeWrapper}>
      <Video />
      <RandomCampers campers={campers} />
      <ReviewHeader reviews={reviews} onShowReviews={handleShowReviews} />
      {showReviews && <Reviews reviews={reviews} />}
    </div>
  );
};

export default Home;
