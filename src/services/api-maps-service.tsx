import {API_KEY_GOOGLE_MAPS, API_URL_GOOGLE_MAPS} from '../utils/constants';

export const fetchData = async (address = '') => {
  const encodedAddress: string = encodeURIComponent(address);
  try {
    const response = await fetch(`${API_URL_GOOGLE_MAPS}/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY_GOOGLE_MAPS}`);
    return await response.json()
  } catch (error) {
    throw new Error('There was an error getting data from the server.');
  }
};
