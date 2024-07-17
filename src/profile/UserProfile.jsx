import React from 'react';

// Компонент для відображення інформації про користувача
const UserProfile = ({ user }) => {
  // Деструктуризація даних користувача
  const { name, age, email, address, bio, profilePicture } = user;

  return (
    <div className="user-profile">
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="profile-picture"
      />
      <h2>{name}</h2>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Bio:</strong> {bio}
      </p>
    </div>
  );
};

// Приклад використання компонента UserProfile
const App = () => {
  return (
    <div className="app">
      <h1>User Profile</h1>
    </div>
  );
};

export default UserProfile;
