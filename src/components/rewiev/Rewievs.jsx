import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import css from './Rewievs.module.css';

const Rewievs = () => {
  const [reviews, setReviews] = useState([]);
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    // Fetch data from the advert API
    fetch('https://6632bb43f7d50bbd9b473f15.mockapi.io/advert')
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of RVs
        const allReviews = data.flatMap(rv => rv.reviews || []);
        if (allReviews.length > 0) {
          // Get 4 random reviews
          const shuffled = allReviews.sort(() => 0.5 - Math.random());
          const selected = shuffled.slice(0, 4);
          setReviews(selected);
        }
      })
      .catch(error => console.error('Error fetching data:', error));

    // Fetch avatars from Random User Generator API
    fetch('https://randomuser.me/api/?results=4')
      .then(response => response.json())
      .then(data => {
        const avatars = data.results.map(user => user.picture.large);
        setAvatars(avatars);
      })
      .catch(error => console.error('Error fetching avatars:', error));
  }, []);

  const getColor = (rating) => {
    if (rating <= 1) return 'red';
    if (rating <= 2) return 'orange';
    if (rating <= 3) return 'yellow';
    if (rating <= 4) return 'lightgreen';
    return 'green';
  };

  return (
    <div className={css.wrapper}>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div className={css.reviewCard} key={index}>
            <div className={css.avatarBlok}>
            <img src={avatars[index]} alt={`${review.reviewer_name}'s avatar`} className={css.avatar} />
            <div className={css.reviewerInfo}>
            <h3 className={css.reviewerName}>{review.reviewer_name}</h3>
            <div className={css.reviewerRating}>
              <CircularProgressbar
                value={review.reviewer_rating}
                maxValue={5}
                text={`${review.reviewer_rating}`}
                styles={buildStyles({
                  pathColor: getColor(review.reviewer_rating),
                  textColor: '#000',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#f8f8f8',
                })}
              />
            </div>
            </div>

            </div>

            <p className={css.comment}>{review.comment}</p>
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
// import css from './Rewievs.module.css';

// const Rewievs = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('https://6632bb43f7d50bbd9b473f15.mockapi.io/advert')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // Додайте цей рядок для перевірки даних
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
//   }, []);

//   return (
//     <div className={css.wrapper}>
//       {reviews.length > 0 ? (
//         reviews.map((review, index) => (
//           <div className={css.reviewCard} key={index}>
//             <h3 className={css.reviewerName}>{review.reviewer_name}</h3>
//             <p className={css.reviewerRating}>Rating: {review.reviewer_rating}</p>
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
