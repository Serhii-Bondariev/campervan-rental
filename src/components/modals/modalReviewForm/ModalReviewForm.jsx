import React, { useState, useEffect } from 'react';
import css from './ModalReviewForm.module.css'; // Перевірте правильність шляху до CSS-файлу

const getColor = rating => {
  if (rating <= 1) return '#FF0000'; // червоний
  if (rating <= 2) return '#FFA500'; // помаранчевий
  if (rating <= 3) return '#FFFF00'; // жовтий
  if (rating <= 4) return '#90EE90'; // світло-зелений
  return '#008000'; // зелений
};

const RatingStars = ({ count, value, onRatingChange }) => {
  const stars = [];
  for (let i = 1; i <= count; i++) {
    const color = i <= value ? getColor(value) : 'gray';
    stars.push(
      <span
        key={i}
        style={{ color: color, cursor: 'pointer' }}
        onClick={() => onRatingChange(i)}
      >
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

const ModalReviewForm = ({ isOpen, onClose, onSubmit }) => {
  const [avatars, setAvatars] = useState([]); // Визначаємо стан для аватарок
  const [rating, setRating] = useState(0); // Визначаємо стан для рейтингу користувача
  const [selectedAvatar, setSelectedAvatar] = useState(''); // Визначаємо стан для вибраного аватара
  const [name, setName] = useState(''); // Визначаємо стан для імені користувача
  const [reviewPhotos, setReviewPhotos] = useState([]); // Визначаємо стан для завантажених фото

  const handleSubmit = event => {
    event.preventDefault();
    // Отримання даних форми і передача їх до батьківського компонента
    const formData = new FormData(event.target);
    const reviewText = formData.get('review-text');
    onSubmit({ reviewText, rating, name, selectedAvatar, reviewPhotos }); // Передача тексту відгуку, рейтингу, імені, аватара та фото до батьківського компонента для подальшої обробки
    onClose(); // Закриття модального вікна після подання відгуку
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(css.noScroll);
    } else {
      document.body.classList.remove(css.noScroll);
    }
  }, [isOpen]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const avatarsResponse = await fetch(
          'https://randomuser.me/api/?results=4'
        );
        const avatarsData = await avatarsResponse.json();
        const avatars = avatarsData.results.map(user => user.picture.large);
        setAvatars(avatars);
      } catch (error) {
        console.error('Error fetching avatars:', error);
      }
    };

    fetchAvatars();
  }, []);

  const handlePhotoUpload = event => {
    const files = Array.from(event.target.files);
    const photos = files.map(file => URL.createObjectURL(file));
    setReviewPhotos(photos);
  };

  const handleBackdropClick = event => {
    if (event.target.className.includes(css.modalBackdrop)) {
      onClose();
    }
  };

  return (
    <div
      className={isOpen ? css.modalBackdrop : css.hidden}
      onClick={handleBackdropClick}
    >
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          X
        </button>

        <form onSubmit={handleSubmit}>
          <div>
            <div className={css.avatarBlock}>
              {avatars.length > 0 && (
                <select
                  value={selectedAvatar}
                  onChange={e => setSelectedAvatar(e.target.value)}
                  className={css.avatarSelect}
                >
                  <option value="" disabled>
                    Виберіть аватар
                  </option>
                  {avatars.map((avatar, index) => (
                    <option key={index} value={avatar}>
                      Аватар {index + 1}
                    </option>
                  ))}
                </select>
              )}
              {selectedAvatar && (
                <img
                  src={selectedAvatar}
                  alt="Selected avatar"
                  className={css.avatar}
                />
              )}
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Введіть своє ім'я"
                className={css.nameInput}
              />
              <RatingStars
                count={5}
                value={rating}
                onRatingChange={setRating}
              />
            </div>
          </div>
          <textarea name="review-text" placeholder="Напишіть свій відгук..." />
          <div>
            <input
              type="file"
              multiple
              onChange={handlePhotoUpload}
              className={css.fileInput}
            />
            <div className={css.photoPreview}>
              {reviewPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Review photo ${index + 1}`}
                  className={css.reviewPhoto}
                />
              ))}
            </div>
          </div>
          <button type="submit">Подати відгук</button>
        </form>
      </div>
    </div>
  );
};

export default ModalReviewForm;

// import React, { useState, useEffect } from 'react';
// import css from './ModalReviewForm.module.css'; // Перевірте правильність шляху до CSS-файлу

// const getColor = rating => {
//   if (rating <= 1) return '#FF0000'; // червоний
//   if (rating <= 2) return '#FFA500'; // помаранчевий
//   if (rating <= 3) return '#FFFF00'; // жовтий
//   if (rating <= 4) return '#90EE90'; // світло-зелений
//   return '#008000'; // зелений
// };

// const RatingStars = ({ count, value, onRatingChange }) => {
//   const stars = [];
//   for (let i = 1; i <= count; i++) {
//     const color = i <= value ? getColor(value) : 'gray';
//     stars.push(
//       <span
//         key={i}
//         style={{ color: color, cursor: 'pointer' }}
//         onClick={() => onRatingChange(i)}
//       >
//         ★
//       </span>
//     );
//   }
//   return <div>{stars}</div>;
// };

// const ModalReviewForm = ({ isOpen, onClose, onSubmit }) => {
//   const [avatars, setAvatars] = useState([]); // Визначаємо стан для аватарок
//   const [rating, setRating] = useState(0); // Визначаємо стан для рейтингу користувача
//   const [selectedAvatar, setSelectedAvatar] = useState(''); // Визначаємо стан для вибраного аватара
//   const [name, setName] = useState(''); // Визначаємо стан для імені користувача

//   const handleSubmit = event => {
//     event.preventDefault();
//     // Отримання даних форми і передача їх до батьківського компонента
//     const formData = new FormData(event.target);
//     const reviewText = formData.get('review-text');
//     onSubmit({ reviewText, rating, name, selectedAvatar }); // Передача тексту відгуку, рейтингу, імені та аватара до батьківського компонента для подальшої обробки
//     onClose(); // Закриття модального вікна після подання відгуку
//   };

//   useEffect(() => {
//     const fetchAvatars = async () => {
//       try {
//         const avatarsResponse = await fetch(
//           'https://randomuser.me/api/?results=4'
//         );
//         const avatarsData = await avatarsResponse.json();
//         const avatars = avatarsData.results.map(user => user.picture.large);
//         setAvatars(avatars);
//       } catch (error) {
//         console.error('Error fetching avatars:', error);
//       }
//     };

//     fetchAvatars();
//   }, []);

//   return (
//     <div className={isOpen ? css.modalBackdrop : css.hidden}>
//       <div className={css.modal}>
//         <button className={css.closeButton} onClick={onClose}>
//           X
//         </button>

//         <form onSubmit={handleSubmit}>
//           <div>
//             <div className={css.avatarBlock}>
//               {avatars.length > 0 && (
//                 <select
//                   value={selectedAvatar}
//                   onChange={e => setSelectedAvatar(e.target.value)}
//                   className={css.avatarSelect}
//                 >
//                   <option value="" disabled>
//                     Choise a avatar
//                   </option>
//                   {avatars.map((avatar, index) => (
//                     <option key={index} value={avatar}>
//                       Аватар {index + 1}
//                     </option>
//                   ))}
//                 </select>
//               )}
//               {selectedAvatar && (
//                 <img
//                   src={selectedAvatar}
//                   alt="Selected avatar"
//                   className={css.avatar}
//                 />
//               )}
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//                 placeholder="Введіть своє ім'я"
//                 className={css.nameInput}
//               />
//               <RatingStars
//                 count={5}
//                 value={rating}
//                 onRatingChange={setRating}
//               />
//             </div>
//           </div>
//           <textarea name="review-text" placeholder="Напишіть свій відгук..." />
//           <button type="submit">Leave a review</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalReviewForm;

// // ModalReviewForm.jsx
// import React from 'react';
// import css from './ModalReviewForm.module.css'; // Перевірте правильність шляху до CSS-файлу

// const ModalReviewForm = ({ isOpen, onClose, onSubmit }) => {
//   const handleSubmit = event => {
//     event.preventDefault();
//     // Отримання даних форми і передача їх до батьківського компонента
//     const formData = new FormData(event.target);
//     const reviewText = formData.get('review-text');
//     onSubmit(reviewText); // Передача тексту відгуку до батьківського компонента для подальшої обробки
//     onClose(); // Закриття модального вікна після подання відгуку
//   };

//   return (
//     <div className={isOpen ? css.modalBackdrop : css.hidden}>
//       <div className={css.modal}>
//         <button className={css.closeButton} onClick={onClose}>
//           Close
//         </button>
//         <form onSubmit={handleSubmit}>
//           <textarea name="review-text" placeholder="Write your review..." />
//           <button type="submit">Submit review</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalReviewForm;
