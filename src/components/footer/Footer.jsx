import React from 'react';
import PropTypes from 'prop-types';
import css from './Footer.module.css';
// import Logo from 'components/logo/Logo';
import Division from 'components/division/Division';

const Footer = props => {
  return (
    <div className={css.footer}>
      {/* <Logo /> */}
      <Division />
      <div className={css.info}>
        <p className={css.copyright}>© 2023. All rights reserved.</p>
        <p className={css.poweredBy}>Powered by React</p>
        <p className={css.version}>Version 1.0.0</p>
        <p className={css.author}>
          Designed and developed by{' '}
          <a href="https://github.com/Serhii-Bondariev">Serhii Bondariev</a>
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
