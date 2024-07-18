import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { FaBars, FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import MobileMenuModal from '../mobileMenuModal/MobileMenuModal';
// import Logo from 'components/logo/Logo';
import LogoImg from 'components/logoImg/LogoImg';
import Division from 'components/division/Division';

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
            <LogoImg />
          </NavLink>
        </div>
        <Division />
        <div className={css.contactInfo}>
          <FaPhoneAlt className={css.phone} />
          <FaMailBulk className={css.email} />

          {/* <span className="phone">Phone: +1 (234) 567-8901</span>
          <span className="email">Email: info@company.com</span> */}
        </div>
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
