import useCurrentLocation from '../hooks/useCurrentLocation'

const Location = () => {

  const { location, getCurrentLocation, error, loading } = useCurrentLocation();


  return (
    <div>
      <h1>Current Location</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      <button
        style={{ color: 'black' }}
        onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
};
export default Location;
