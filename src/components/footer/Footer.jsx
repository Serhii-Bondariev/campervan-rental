import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';
import Division from 'components/division/Division';
import LogoImg from 'components/logoImg/LogoImg';

const Footer = props => {
  return (
    <div className={css.footer}>
      <div className={css.logoDivision}>
        <div>
          <NavLink to="/">
            <LogoImg />
          </NavLink>
        </div>
        <div className={css.footerDivision}>
          <Division />
        </div>
      </div>
      <div className={css.info}>
        <p className={css.copyright}>© 2024. All rights reserved.</p>
        <p className={css.poweredBy}>Powered by MERN.</p>
        <p className={css.version}>Version 1.0.0</p>
        <p className={css.author}>
          This is a pet project. Designed and developed by{' '}
          <a href="https://github.com/Serhii-Bondariev">Serhii Bondariev</a>
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
