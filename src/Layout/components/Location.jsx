import React, { useEffect, useState } from 'react';
import axios from 'axios';

const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;

const Location = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const getAddress = async (lat, lng) => {
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${mapsApiKey}`;

      let config = {
        method: 'get',
        url: url,
        headers: {
          Accept: 'application/json',
        },
      };

      axios
        .request(config)
          .then((response) => {
              const streetNumber = response.data.results[0].address_components[0].short_name;
              const streetName = response.data.results[0].address_components[1].short_name;
          setAddress(`${streetNumber} ${streetName}`);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          getAddress(lat, lng);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  });
  return (
    <div className='location-wrapper' data-test='location'>
      <div className='location-inner-wrapper'>
        <i className='icon-localization-icon address-icon' /> <span className='address-text' data-test='address'>8330 Fremont Ave</span>
      </div>
    </div>
  );
};

export default Location;
