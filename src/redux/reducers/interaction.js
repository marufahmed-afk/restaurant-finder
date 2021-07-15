import * as T from '../types';

const initialState = {
  isSearching: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case T.TOGGLE_SEARCHING:
      return {
        ...state,
        isSearching: !state.isSearching,
      };
    default:
      return state;
  }
}
