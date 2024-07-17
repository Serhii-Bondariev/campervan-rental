import React, { useEffect } from 'react';
import css from './Profile.module.css';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMap = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_API_KEY',
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }, []);

  return (
    <div>
      <p>GoogleMap</p>
      <div id="map" className={css.map}></div>
    </div>
  );
};

export default GoogleMap;
