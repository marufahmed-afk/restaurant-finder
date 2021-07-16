import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

interface RestaurantsRootState {
  restaurants: {
    restaurant: {
      location: Object;
      name: string;
    };
  };
}

const MapArea = () => {
  const { restaurant } = useSelector(
    (state: RestaurantsRootState) => state.restaurants
  );

  //Monstar lab Bangladesh latlng
  // 23.78146816410938, 90.40048221907503

  const currentPosition = {
    lat: 23.78146816410938,
    lng: 90.40048221907503,
  };

  const mapStyles = {
    height: '80vh',
    width: '100vw',
  };

  const key = process.env.REACT_APP_GOOGLE_API_TOKEN;

  return key ? (
    <div>
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={restaurant?.location || currentPosition}
        >
          {currentPosition && <Marker position={currentPosition} />}

          {restaurant && (
            <Marker
              position={restaurant.location}
              icon='https://img.icons8.com/fluent/48/000000/location-update.png'
              title={restaurant?.name}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  ) : (
    <h1 className='text-xl'>Google API key was not found!</h1>
  );
};

export default MapArea;
