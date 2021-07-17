import axios from '../axios';
import * as t from '../types';

import * as api from '../../api/index';

export const findRandomRestaurant = (initialData) => async (dispatch) => {
  const { clientId, clientSecret, ll, v, radius, categoryId } = initialData;

  dispatch({
    type: t.RANDOM_RESTAURANT_LOADING,
  });

  try {
    const url = `/venues/search?client_id=${clientId}&client_secret=${clientSecret}&ll=${ll}&categoryId=${categoryId}&v=${v}&radius=${radius}`;

    const res = await api.searchRestaurants(url);

    console.log('restaurant data: ', res.data);

    if (res.status === 200) {
      dispatch({
        type: t.RANDOM_RESTAURANT_SUCCESS,
        payload: res.data.response.venues,
      });
    } else {
      dispatch({
        type: t.RANDOM_RESTAURANT_ERROR,
        payload: 'error occured while searching for restaurants!',
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: t.RANDOM_RESTAURANT_ERROR,
      payload: err,
    });
  }
};

export const findRestaurants =
  (initialData, query = '') =>
  async (dispatch) => {
    const { clientId, clientSecret, ll, v, radius, categoryId } = initialData;

    dispatch({
      type: t.FIND_RESTAURANTS_LOADING,
    });

    try {
      const url = `/venues/search?client_id=${clientId}&client_secret=${clientSecret}&ll=${ll}&categoryId=${categoryId}&v=${v}&radius=${radius}&query=${query}`;

      const res = await api.searchRestaurants(url);

      console.log('found restaurant data: ', res.data);

      if (res.status === 200) {
        dispatch({
          type: t.FIND_RESTAURANTS_SUCCESS,
          payload: res.data.response.venues,
        });
      } else {
        dispatch({
          type: t.FIND_RESTAURANTS_ERROR,
          payload: 'error occured while searching for restaurants!',
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: t.FIND_RESTAURANTS_ERROR,
        payload: err,
      });
    }
  };

export const selectRestaurant = (restaurant) => ({
  type: t.SELECT_RESTAURANT,
  payload: restaurant,
});

export const clearSearchResults = () => ({
  type: t.CLEAR_SEARCH_RESUTLS,
});
