import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { FaBars, FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import MobileMenuModal from '../mobileMenuModal/MobileMenuModal';
// import Logo from 'components/logo/Logo';
import LogoImg from 'components/logoImg/LogoImg';
import Division from 'components/division/Division';

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handlePhoneClick = () => {
    window.location.href = 'tel:+12345678901';
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@company.com';
  };

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
      {windowWidth < 768 && (
        <div className={css.contactInfo}>
          <div className={css.phone} onClick={handlePhoneClick}>
            <FaPhoneAlt className={css.phoneIco} /> +1 (234) 567-8901
          </div>
          <div className={css.email} onClick={handleEmailClick}>
            <FaMailBulk className={css.emailIco} /> info@company.com
          </div>
        </div>
      )}
      <div className={css.border}></div>
      <nav className={css.navBlock}>
        <div className={css.navbarLogo}>
          <NavLink to="/">
            <LogoImg />
          </NavLink>
        </div>
        <Division />

        {windowWidth >= 769 ? (
          <div className={css.navbarLinksDesktop}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.linksDesktop
              }
              to="/"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.linksDesktop
              }
              to="/catalog"
              onClick={closeMobileMenu}
            >
              Catalog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.linksDesktop
              }
              to="/favorites"
              onClick={closeMobileMenu}
            >
              Favorites
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.linksDesktop
              }
              to="/UserProfile"
              onClick={closeMobileMenu}
            >
              Profile
            </NavLink>
          </div>
        ) : (
          <div className={css.navbarMobileMenu} onClick={toggleMobileMenu}>
            <div className={css.menuBlock}>
              <FaBars className={css.menuIcon} />
              <p className={css.menuText}>menu</p>
            </div>
          </div>
        )}
        <MobileMenuModal isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </nav>
    </div>
  );
};

export default Navigation;
