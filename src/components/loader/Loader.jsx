import React from 'react';
import { FiLoader } from 'react-icons/fi';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <FiLoader className={css.loaderIcon} />
    </div>
  );
};

export default Loader;
