import React from 'react';
import css from './TotalRating.module.css';
import LogoImg from 'components/logoImg/LogoImg';

const getColor = rating => {
  if (rating <= 1) return '#FF0000';
  if (rating <= 2) return '#FFA500';
  if (rating <= 3) return '#FFFF00';
  if (rating <= 4) return '#90EE90';
  return '#008000';
};

const RatingStars = ({ count, value }) => {
  const stars = [];
  for (let i = 1; i <= count; i++) {
    const color = i <= value ? getColor(value) : 'gray';
    stars.push(
      <span key={i} style={{ color: color }}>
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

const TotalRating = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className={css.totalRating}>
        <p>No reviews available</p>
      </div>
    );
  }

  const totalRating = reviews.reduce(
    (acc, review) => acc + review.reviewer_rating,
    0
  );
  const averageRating = (totalRating / reviews.length).toFixed(2);

  return (
    <div className={css.wrapper}>
      <div className={css.totalRating}>
        <RatingStars count={5} value={parseFloat(averageRating)} />
        <span>{averageRating} / 5</span>
        <LogoImg />
      </div>
    </div>
  );
};

export default TotalRating;
