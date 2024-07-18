import React from 'react';
import css from './UserProfile.module.css';

// Компонент для відображення інформації про користувача
const UserProfile = ({ user }) => {
  // Деструктуризація даних користувача
  const {
    name,
    age,
    phone,
    email,
    address,
    profilePicture,
    favoriteCamper,
    reviews,
  } = user;

  return (
    <div className={css.wrapper}>
      <div className={css.userProfile}>
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className={css.profilePicture}
        />
        <h2>
          <strong>{name}</strong>
        </h2>
        <div className={css.userDetails}>
          <p>
            <strong>Age:</strong> {age}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Favorite camper:</strong> {user.favoriteCamper}
          </p>
          <p>
            <strong>Reviews:</strong> {user.reviews}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
