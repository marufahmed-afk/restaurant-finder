import axios from '../redux/axios';

export const searchRestaurants = (url) => axios.get(url);
