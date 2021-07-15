import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapArea = () => {
  const [currentPosition, setCurrentPosition] = useState({});

  // 23.78146816410938, 90.40048221907503

  const success = (position) => {
    const currentPosition = {
      lat: 23.78146816410938,
      lng: 90.40048221907503,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const mapStyles = {
    height: '80vh',
    width: '100vw',
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      >
        {currentPosition && <Marker position={currentPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapArea;
