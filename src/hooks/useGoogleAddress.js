import { useState, useEffect } from 'react';
import axios from 'axios';
import { pass } from '../../pass';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API_KEY = pass.googleMapsClientID;
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

  const getCoordinates = async (api) => {
    const response = await axios(api);
    return response;
  };

  useEffect(async () => {
    const response = await axios(getCoordinates(API));
    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
