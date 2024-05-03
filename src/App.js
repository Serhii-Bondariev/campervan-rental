import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Favorites from "./pages/favorites/Favorites";

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
