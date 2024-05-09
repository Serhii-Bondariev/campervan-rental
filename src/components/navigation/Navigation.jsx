import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { FaBars } from 'react-icons/fa';
// import Logo from '../images/sprite/icons.svg#icon-logo1';
import MobileMenuModal from '../modals/mobileMenuModal/MobileMenuModal';
import Logo from 'components/logo/Logo';

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={css.navigation}>
      <nav className={css.navBlock}>
        <div className={css.navbarLogo}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className={css.division}>
          <div className={css.logoDivision}>
            <h1 className={css.logoTitle}>NOMAD</h1>
            <h3 className={css.logoText}>Campers rental</h3>
          </div>
        </div>
        {windowWidth >= 768 ? (
          <div className={css.navbarLinksDesktop}>
            <NavLink to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink to="/catalog" onClick={closeMobileMenu}>
              Catalog
            </NavLink>
            <NavLink to="/favorites" onClick={closeMobileMenu}>
              Favorites
            </NavLink>
          </div>
        ) : (
          <div className={css.navbarMobileMenu} onClick={toggleMobileMenu}>
            <FaBars />
          </div>
        )}
        <MobileMenuModal isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </nav>
    </div>
  );
};

export default Navigation;
