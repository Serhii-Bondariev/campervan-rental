import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './MobileMenuModal.module.css';

const MobileMenuModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className={css.overlay} onClick={onClose}>
          <div className={css.modal} onClick={e => e.stopPropagation()}>
            <NavLink to="/" activeClassName={css.active} onClick={onClose}>
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              activeClassName={css.active}
              onClick={onClose}
            >
              Catalog
            </NavLink>
            <NavLink
              to="/favorites"
              activeClassName={css.active}
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
