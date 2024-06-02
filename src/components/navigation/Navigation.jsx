import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { FaBars } from 'react-icons/fa';
import MobileMenuModal from '../modals/mobileMenuModal/MobileMenuModal';
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
        {windowWidth >= 768 ? (
          <div className={css.navbarLinksDesktop}>
            <NavLink
              className={css.LinksDesktop}
              to="/"
              onClick={closeMobileMenu}
              activeClassName={css.active}
            >
              Home
            </NavLink>
            <NavLink
              className={css.LinksDesktop}
              to="/catalog"
              onClick={closeMobileMenu}
              activeClassName={css.active}
            >
              Catalog
            </NavLink>
            <NavLink
              className={css.LinksDesktop}
              to="/favorites"
              onClick={closeMobileMenu}
              activeClassName={css.active}
            >
              Favorites
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
