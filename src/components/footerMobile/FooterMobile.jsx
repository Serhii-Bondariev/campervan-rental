import React, { useState, useEffect } from 'react';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import LogoImg from 'components/logoImg/LogoImg';
import css from './FooterMobile.module.css';
import MobileMenuModal from 'components/mobileMenuModal/MobileMenuModal';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaRegBookmark,
  FaRegUser,
  FaSearch,
} from 'react-icons/fa';

const FooterMobile = () => {
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

  const icon = isMobileMenuOpen ? <FaTimes /> : <FaBars />;

  const renderMobileMenu = () => {
    if (isMobileMenuOpen) {
      return (
        <MobileMenuModal isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      );
    }
  };
  return (
    <div className={css.mobileNavigation}>
      <div className={css.navigationList}>
        <div className={css.navigationItem}>
          <NavLink to="/" className={css.navigationLink}>
            <FaHome className={css.icon} />
            <span>Home</span>
          </NavLink>
        </div>
        <div className={css.navigationItem}>
          <NavLink to="/favorites" className={css.navigationLink}>
            <FaRegBookmark className={css.icon} />
            <span>Favorite</span>
          </NavLink>
        </div>
        <div className={css.navigationItem}>
          <NavLink
            to="/"
            className={css.navigationLink}
            onClick={toggleMobileMenu}
          >
            <FaBars className={css.icon} />
            <span>Menu</span>
          </NavLink>
        </div>
        <div className={css.navigationItem}>
          <NavLink to="/UserProfile" className={css.navigationLink}>
            <FaRegUser className={css.icon} />
            <span>Profile</span>
          </NavLink>
        </div>
        <div className={css.navigationItem}>
          <NavLink to="/" className={css.navigationLink}>
            <FaSearch className={css.icon} />
            <span>Search</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
