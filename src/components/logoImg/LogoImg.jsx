import React from 'react';
import CamperVanLogo from '../images/logos/CamperVanLogo.png';
import css from './LogoImg.module.css';

const LogoImg = () => {
  return (
    <div className={css.logoWrapper}>
      <img className={css.logoImg} src={CamperVanLogo} alt="logo" />
    </div>
  );
};

export default LogoImg;
