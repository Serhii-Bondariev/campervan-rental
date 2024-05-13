import React from 'react';
import css from './Home.module.css';
import BookingForm from 'components/booking/BookingForm';
import RandomCampers from 'components/randomCampers/RandomCampers';
// import Card from '../../components/cards/Card';

const Home = ({ campers }) => {
  return (
    <div className={css.homeWrapper}>
      <button className={css.bookBtn}>Book Now</button>
      <img
        className={css.bgrdImg}
        src="beckgroundMobile.png"
        alt="Highway to the mountains"
      />

      <div>
        <BookingForm />
      </div>
      <div>
        <RandomCampers campers={campers} />
      </div>
      {/* <div>
        <h2>Campers</h2>
        {campers.map(camper => (
          <Card
            key={camper._id}
            name={camper.name}
            gallery={camper.gallery}
            price={camper.price}
            location={camper.location}
            rating={camper.rating}
            description={camper.description}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
