import React, { useState } from 'react';
import css from './ReviewHeder.module.css';
import TotalRating from '../totalRating/TotalRating';
import Reviews from '../review/Reviews';
import ModalReviewForm from '../modals/modalReviewForm/ModalReviewForm'; // Перевірте правильність шляху до компонента модального вікна

const ReviewHeader = ({ reviews }) => {
  const [isOpen, setIsOpen] = useState(false); // Стан для відстеження відкритості рев'ю
  const [isModalOpen, setIsModalOpen] = useState(false); // Стан для відстеження відкритості модального вікна
  const [newReviewText, setNewReviewText] = useState(''); // Стан для збереження тексту нового відгуку

  const toggleReviews = () => {
    setIsOpen(!isOpen); // Зміна стану відкритості рев'ю
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Зміна стану відкритості модального вікна
  };

  const handleSubmitReview = reviewText => {
    // Тут можна додати логіку для збереження або відправки відгуку
    console.log('Submitting review:', reviewText);
    // Додайте додаткову логіку для збереження або відправки відгуку
    setNewReviewText(''); // Скидання тексту відгуку після подання
  };

  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <h2 className={css.title}>Reviews</h2>
        <div className={css.rating}>
          <div className={css.ratingBlock}>
            <p className={css.ratingTitle}>
              NOMAD RV <br /> average rating{' '}
            </p>
            <TotalRating className={css.totalRating} reviews={reviews} />
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
          <button type="button" className={css.button} onClick={toggleModal}>
            Leave review
          </button>
          <button type="button" className={css.button} onClick={toggleReviews}>
            {isOpen ? 'Close reviews' : 'View  reviews'}
          </button>
        </div>
      </div>
      {isOpen && <Reviews reviews={reviews} />}

      {/* Модальне вікно для залишення відгуку */}
      <ModalReviewForm
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSubmit={handleSubmitReview}
      />
    </div>
  );
};

export default ReviewHeader;
// import React, { useState } from 'react';
// import css from './ReviewHeder.module.css';
// import TotalRating from 'components/totalRating/TotalRating';
// import Reviews from 'components/review/Reviews'; // Імпорт компоненту Reviews

// const ReviewHeader = ({ reviews }) => {
//   const [isOpen, setIsOpen] = useState(false); // Стан для відстеження відкритості рев'ю

//   const toggleReviews = () => {
//     setIsOpen(!isOpen); // Зміна стану при кожному кліку на кнопку
//   };

//   return (
//     <div className={css.wrapper}>
//       <div className={css.card}>
//         <h2 className={css.title}>Reviews</h2>
//         <div className={css.rating}>
//           <div className={css.ratingBlock}>
//             <p className={css.ratingTitle}>
//               NOMAD RV <br /> average rating{' '}
//             </p>
//             <TotalRating className={css.totalRating} reviews={reviews} />
//           </div>
//         </div>
//         <div className={css.descriptionBlock}>
//           <p className={css.description}>
//             Discover the experiences of other satisfied travelers who have
//             already become part of our NOMAD family. Just finished your trip?
//             Click the button below to leave a rating or share your experience.
//             Thanks to you, NOMAD camper motor rental is the highest-rated
//             campervan rental service. As a small business, we rely on reviews
//             and word-of-mouth rather than big advertising campaigns. That's why
//             we are truly grateful to everyone who takes the time to write a
//             review about their experience with NOMAD.
//           </p>
//         </div>
//         <div className={css.buttons}>
//           <button type="button" className={css.button}>
//             Leave a review
//           </button>
//           <button
//             type="button"
//             className={css.button}
//             onClick={toggleReviews} // Виклик функції для зміни стану
//           >
//             {isOpen ? 'Close reviews' : 'View reviews'}{' '}
//             {/* Змінений текст кнопки */}
//           </button>
//         </div>
//       </div>
//       {isOpen && <Reviews reviews={reviews} />}{' '}
//       {/* Відображення Reviews при isOpen === true */}
//     </div>
//   );
// };

// export default ReviewHeader;
