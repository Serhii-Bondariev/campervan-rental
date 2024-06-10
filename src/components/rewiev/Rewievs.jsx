import React, { useEffect, useState } from 'react';
import Rating from 'react-rating-stars-component';
import css from './Rewievs.module.css';

const Rewievs = () => {
  const [reviews, setReviews] = useState([]);
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsResponse = await fetch('https://6632bb43f7d50bbd9b473f15.mockapi.io/advert');
        const reviewsData = await reviewsResponse.json();

        const avatarsResponse = await fetch('https://randomuser.me/api/?results=4');
        const avatarsData = await avatarsResponse.json();

        const allReviews = reviewsData.flatMap(rv => rv.reviews || []);
        const shuffledReviews = allReviews.sort(() => 0.5 - Math.random()).slice(0, 4);
        setReviews(shuffledReviews);

        const avatars = avatarsData.results.map(user => user.picture.large);
        setAvatars(avatars);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={css.wrapper}>
      <div>
        <h2 className={css.title}>Reviews</h2>
      </div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div className={css.reviewCard} key={index}>
            <div className={css.avatarBlok}>
              <img src={avatars[index]} alt={`${review.reviewer_name}'s avatar`} className={css.avatar} />

              <p className={css.reviewerName}>{review.reviewer_name}</p>
              </div>



            <div className={css.reviewerInfo}>
            <p className={css.comment}>{review.comment}</p>
            <p> camper rating: { review.reviewer_rating}</p>
                <Rating
                  count={5}
                  value={review.reviewer_rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </div>
          </div>
        ))
      ) : (
        <p className={css.noReviews}>No reviews available</p>
      )}
    </div>
  );
};

export default Rewievs;





// import React, { useEffect, useState } from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import css from './Rewievs.module.css';

// const Rewievs = () => {
//   const [reviews, setReviews] = useState([]);
//   const [avatars, setAvatars] = useState([]);

//   useEffect(() => {
//     // Fetch data from the advert API
//     fetch('https://6632bb43f7d50bbd9b473f15.mockapi.io/advert')
//       .then(response => response.json())
//       .then(data => {
//         // Assuming data is an array of RVs
//         const allReviews = data.flatMap(rv => rv.reviews || []);
//         if (allReviews.length > 0) {
//           // Get 4 random reviews
//           const shuffled = allReviews.sort(() => 0.5 - Math.random());
//           const selected = shuffled.slice(0, 4);
//           setReviews(selected);
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));

//     // Fetch avatars from Random User Generator API
//     fetch('https://randomuser.me/api/?results=4')
//       .then(response => response.json())
//       .then(data => {
//         const avatars = data.results.map(user => user.picture.large);
//         setAvatars(avatars);
//       })
//       .catch(error => console.error('Error fetching avatars:', error));
//   }, []);

//   const getColor = (rating) => {
//     if (rating <= 1) return 'red';
//     if (rating <= 2) return 'orange';
//     if (rating <= 3) return 'yellow';
//     if (rating <= 4) return 'lightgreen';
//     return 'green';
//   };

//   return (
//     <div className={css.wrapper}>
//       <div>
//         <h2 className={css.title}>Reviews</h2>
//       </div>
//       {reviews.length > 0 ? (
//         reviews.map((review, index) => (
//           <div className={css.reviewCard} key={index}>
//             <div className={css.avatarBlok}>
//             <img src={avatars[index]} alt={`${review.reviewer_name}'s avatar`} className={css.avatar} />
//             <div className={css.reviewerInfo}>
//             <p className={css.reviewerName}>{review.reviewer_name}</p>
//             <div className={css.reviewerRating}>
//               <CircularProgressbar
//                 className={css.progressbar}
//                 value={review.reviewer_rating}
//                 maxValue={5}
//                 minValue={0}
//                 text={`${review.reviewer_rating}`}
//                 styles={buildStyles({
//                   pathColor: getColor(review.reviewer_rating),
//                   textColor: '#000',
//                   trailColor: '#d6d6d6',
//                   backgroundColor: '#f8f8f8',
//                 })}
//               />
//             </div>
//             </div>
//             </div>
//             <p className={css.comment}>{review.comment}</p>
//           </div>
//         ))
//       ) : (
//         <p className={css.noReviews}>No reviews available</p>
//       )}
//     </div>
//   );
// };

// export default Rewievs;