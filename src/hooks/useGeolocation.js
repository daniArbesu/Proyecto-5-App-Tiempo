import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({});

  function success(position) {
    const geoLocation = { lat: position.coords.latitude, lon: position.coords.longitude };
    setLocation(geoLocation);
  }

  function error() {
    throw new Error('Sorry, no position available.');
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      // geolocation is available
      navigator.geolocation.watchPosition(success, error);
      return;
    }
    // No geolocation available on device
    throw new Error('Geolocation is not supported by your browser');
  }, []);

  return { location };
};

export default useGeolocation;
