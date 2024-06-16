import React from 'react';
import CampersList from '../../components/campersList/CampersList';
import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <div className={css.content}>
      <CampersList />
    </div>
  );
};

export default Catalog;
