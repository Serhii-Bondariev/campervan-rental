import React from 'react';
import css from './Home.module.css';

const Home = () => {
  return (
    <div>
      <img
        className={css.bgrdImg}
        src="logoBacgrd.png"
        alt="Highway to the mountains"
      />
    </div>
  );
};

export default Home;
