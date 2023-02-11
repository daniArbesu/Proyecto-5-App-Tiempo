/* eslint-disable no-console */
const handleGeolocation = (setLocation) => {
  if ('geolocation' in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude.toFixed(2),
          lon: position.coords.longitude.toFixed(2)
        });
      },
      () => console.error('Sorry, no position available.')
    );
  } else {
    console.log('Geolocation is not supported by your browser');
  }
};

export default handleGeolocation;
