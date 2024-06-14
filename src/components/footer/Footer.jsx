import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';
import Division from 'components/division/Division';
import LogoImg from 'components/logoImg/LogoImg';
import TotalRating from 'components/totalRating/TotalRating';

const Footer = ({ props, reviews }) => {
  return (
    <div className={css.footer}>
      <div className={css.wrapper}>
        <div className={css.logoDivision}>
          <div>
            <NavLink to="/">
              <LogoImg />
            </NavLink>
          </div>
          <div className={css.footerDivision}>
            <Division />
          </div>
          <div>
            <p>Average rating: </p>
            <TotalRating reviews={reviews} />
          </div>
        </div>
        <div className={css.info}>
          <p className={css.version}>Version 0.0.8</p>
          <p className={css.poweredBy}>Powered by MERN.</p>

          <p className={css.copyright}>© 2024. All rights reserved.</p>
          <p className={css.author}>
            This is a pet project. Designed and developed by{' '}
            <a href="https://github.com/Serhii-Bondariev">Serhii Bondariev</a>
          </p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
