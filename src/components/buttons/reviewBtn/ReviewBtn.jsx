import React from 'react';
import css from './RevievBtn.module.css'; // створіть відповідний CSS файл для стилізації

const ReviewBtn = ({ camperId }) => {
  const handleClick = () => {
    // Реалізація переходу до відгуків або відкриття модального вікна для відгуків
    console.log(`Показати відгуки для кемпера з ID: ${camperId}`);
  };

  return (
    <button className={css.reviewBtn} onClick={handleClick}>
      Show Reviews
    </button>
  );
};

export default ReviewBtn;
