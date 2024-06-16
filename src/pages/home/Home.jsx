import React from 'react';
import css from './Home.module.css';
import BookingForm from '../../components/booking/BookingForm';
import RandomCampers from 'components/randomCampers/RandomCampers';
import Gallery from 'components/gallery/Gallery';
import Video from 'components/video/Video';
import Rewievs from 'components/rewiev/Rewievs';
// import CardAnimation from 'components/cardAnimation/CardAnimation';
// import BookButton from 'components/buttons/BookButton/BookButton';

const Home = ({ campers }) => {
  return (
    <div className={css.homeWrapper}>
      {/* <button className={css.bookBtn}>Book Now</button> */}
      {/* <img
        className={css.bgrdImg}
        src="beckgroundMobile.png"
        alt="Highway to the mountains"
      /> */}
      <div>
        {/* Передаємо дані про кемперів у компонент Gallery */}
        <Video />
      </div>
      {/* <BookButton /> */}
      {/* <div>
        <BookingForm campers={campers} />
      </div> */}
      <div>
        <RandomCampers campers={campers} />
      </div>

      {/* <CardAnimation /> */}
      <Rewievs />
    </div>
  );
};

export default Home;
