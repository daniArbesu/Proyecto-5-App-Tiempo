function success(position) {
  const geoPosition = { lat: position.coords.latitude, lon: position.coords.longitude };
  console.log(geoPosition);
  return geoPosition;
}

function error() {
  throw new Error('Sorry, no position available.');
}

const getNavigatorGeolocation = () => {
  if ('geolocation' in navigator) {
    // geolocation is available
    navigator.geolocation.watchPosition(success, error);
    console.log(location);
    return location;
  }
  // No geolocation available on device
  throw new Error('Geolocation is not supported by your browser');
};

export default getNavigatorGeolocation;
