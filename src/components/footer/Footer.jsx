import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';
import Division from 'components/division/Division';
import LogoImg from 'components/logoImg/LogoImg';
import { SocialIcon } from 'react-social-icons';

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
        </div>
        <div className={css.info}>
          <div className={css.SocLinks}>
            <div>
              <SocialIcon
                className={css.iconSoc}
                label="GitHub"
                target="_blank"
                url="https://github.com/Serhii-Bondariev"
              />
            </div>
            <div>
              <SocialIcon
                className={css.iconSoc}
                label="LinkedIn"
                target="_blank"
                url="https://linkedin.com/in/serhii-bondariev"
              />
            </div>
            <div>
              <SocialIcon
                className={css.iconSoc}
                label="Email"
                bgColor="#7d0a17c3"
                url="mailto:xx.code4u@gmail.com"
              />
            </div>
            <div>
              <SocialIcon
                className={css.iconSoc}
                label="Facebook"
                target="_blank"
                url="https://www.facebook.com"
              />
            </div>
            <div>
              <SocialIcon
                className={css.iconSoc}
                label="Instagram"
                target="_blank"
                url="https://www.instagram.com"
              />
            </div>

            {/* <div>
              <SocialIcon
                label="Fiverr"
                target="_blank"
                url="https://www.fiverr.com/referral_program"
              />
            </div> */}
          </div>
          <div className={css.border}></div>
          <p className={css.version}>Version 0.0.8</p>
          <p className={css.poweredBy}>Powered by MERN.</p>
          <p className={css.author}>
            This is a pet project. <br /> Designed and developed by Serhii
            Bondariev{' '}
          </p>
          <p className={css.copyright}>© 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
