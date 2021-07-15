import * as T from '../types';

const initialState = {
  restaurant: null,
  restaurants: null,
  error: null,
  loading: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case T.FIND_RESTAURANTS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case T.FIND_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: payload,
        loading: false,
      };

    case T.FIND_RESTAURANTS_ERROR:
      return { ...state, error: payload, loading: false };

    case T.RANDOM_RESTAURANT_LOADING:
      return {
        ...state,
        loading: true,
      };

    case T.RANDOM_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurant: payload[Math.floor(Math.random() * payload.length)],
        loading: false,
      };

    case T.RANDOM_RESTAURANT_ERROR:
      return { ...state, error: payload, loading: false };

    case T.SELECT_RESTAURANT:
      return { ...state, restaurant: payload, loading: false };

    case T.CLEAR_SEARCH_RESUTLS:
      return { ...state, restaurants: null, loading: false };

    default:
      return state;
  }
}
