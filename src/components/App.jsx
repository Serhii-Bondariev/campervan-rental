// App.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Home from '../pages/home/Home.jsx';
import Catalog from '../pages/catalog/Catalog.jsx';
import Favorites from '../pages/favorites/Favorites.jsx';
import Navigation from './navigation/Navigation.jsx';
import Footer from './footer/Footer.jsx';
import FooterMobile from './footerMobile/FooterMobile.jsx';
import UserProfile from 'profile/UserProfile.jsx';

// import css from './App.css';
// import NotFound from "./pages/NotFound";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const user = {
    name: 'John Doe',
    age: 30,
    phone: '+1 (234) 567-8901',
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield',
    bio: 'Software developer with a passion for open-source projects and teaching.',
    profilePicture: 'https://randomuser.me/api/portraits/men/20.jpg',
    favoriteCamper: 'Road Bear',
  };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/UserProfile" element={<UserProfile user={user} />} />
        {/* <Route path="/404" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {isMobile && <FooterMobile />}
      <Footer />
    </div>
  );
}

export default App;
