import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import css from './MobileMenuModal.module.css';

const MobileMenuModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(css.noScroll);
    } else {
      document.body.classList.remove(css.noScroll);
    }

    return () => {
      document.body.classList.remove(css.noScroll);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={css.overlay} onClick={onClose}>
          <div className={css.modal} onClick={e => e.stopPropagation()}>
            <button className={css.closeButton} onClick={onClose}>
              <FaTimes />
            </button>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : '')}
              onClick={onClose}
            >
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) => (isActive ? css.active : '')}
              onClick={onClose}
            >
              Catalog
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? css.active : '')}
              onClick={onClose}
            >
              Favorites
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuModal;
