import React from 'react';
import css from './Division.module.css';

const Division = () => {
  return (
    <div className={css.division}>
      <div className={css.logoDivision}>
        <h1 className={css.logoTitle}>NOMAD</h1>
        <h3 className={css.logoText}>RV Rental</h3>
      </div>
    </div>
  );
};

export default Division;
