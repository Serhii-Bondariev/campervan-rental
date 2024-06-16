import React from 'react';
import css from './ReviewHeder.module.css';
import TotalRating from 'components/totalRating/TotalRating';

const ReviewHeder = ({ reviews }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <h2 className={css.title}>Reviews</h2>
        <div className={css.rating}>
          <div className={css.ratingBlock}>
            <p className={css.ratingTitle}>NOMAD RV Raitng </p>
            <TotalRating className={css.totalRating} reviews={reviews} />{' '}
          </div>
        </div>
        <div className={css.descriptionBlock}>
          <p className={css.description}>
            Discover the experiences of other satisfied travelers who have
            already become part of our NOMAD family. Just finished your trip?
            Click the button below to leave a rating or share your experience.
            Thanks to you, NOMAD camper motor rental is the highest-rated
            campervan rental service. As a small business, we rely on reviews
            and word-of-mouth rather than big advertising campaigns. That's why
            we are truly grateful to everyone who takes the time to write a
            review about their experience with NOMAD.
          </p>
        </div>
        <div className={css.buttons}>
          <button type="button" className={css.button}>
            Leave a review
          </button>
          <button type="button" className={css.button}>
            View all reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewHeder;
