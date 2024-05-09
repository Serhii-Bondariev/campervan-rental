import React from 'react';
import css from './Home.module.css';
import Card from '../../components/cards/Card';

const Home = ({ campers }) => {
  return (
    <div>
      <img
        className={css.bgrdImg}
        src="beckgroundMobile.png"
        alt="Highway to the mountains"
      />
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
