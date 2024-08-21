import React, { useState, useEffect, lazy, Suspense } from 'react';
import css from './Home.module.css';
// import RandomCampers from 'components/randomCampers/RandomCampers';
const RandomCampers = lazy(() =>
  import('components/randomCampers/RandomCampers')
);
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
      <Suspense fallback={<div>Loading...</div>}>
        <RandomCampers campers={campers} />
      </Suspense>

      <ReviewHeader reviews={reviews} onShowReviews={handleShowReviews} />
      {showReviews && <Reviews reviews={reviews} />}
    </div>
  );
};

export default Home;
