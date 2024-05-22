import React from 'react';
import css from './Home.module.css';
import BookingForm from '../../components/booking/BookingForm';
import RandomCampers from 'components/randomCampers/RandomCampers';
import Gallery from 'components/gallery/Gallery';

const Home = ({ campers }) => {
  return (
    <div className={css.homeWrapper}>
      <button className={css.bookBtn}>Book Now</button>
      {/* <img
        className={css.bgrdImg}
        src="beckgroundMobile.png"
        alt="Highway to the mountains"
      /> */}
      <div>
        {/* Передаємо дані про кемперів у компонент Gallery */}
        <Gallery campers={campers} />
      </div>

      <div>
        <BookingForm campers={campers} />
      </div>
      <div>
        <RandomCampers campers={campers} />
      </div>
    </div>
  );
};

export default Home;
