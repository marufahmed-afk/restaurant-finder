import * as T from '../types';

const initialState = {
  restaurants: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case T.FIND_RESTAURANTS_SUCCESS:
      return { ...state, restaurants: payload };
    default:
      return state;
  }
}
