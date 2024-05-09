// App.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Catalog from '../pages/catalog/Catalog.jsx';
import Favorites from '../pages/favorites/Favorites.jsx';
import Navigation from './navigation/Navigation.jsx';
import css from './App.css';
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className={css.App}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/404" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
