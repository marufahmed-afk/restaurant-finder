import axios from '../axios';
import * as t from '../types';

export const findRestaurants = (publicAddress) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // foursquare client access information
  let clientId = process.env.REACT_APP_FOURSQUARE_CLIENT_ID;
  let clientSecret = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET;
  let v = '20180323';
  let latlng = '23.78146816410938,90.40048221907503';
  let radius = 3000;

  dispatch({
    type: t.FIND_RESTAURANTS_LOADING,
  });

  try {
    const res = await axios.get(
      `/venues/explore?client_id=${clientId}&client_secret=${clientSecret}&ll=${latlng}&categoryId=4d4b7105d754a06374d81259&v=${v}&radius=${radius}`
    );

    console.log('found restaurant data: ', res.data);

    if (res.status === 200) {
      dispatch({
        type: t.FIND_RESTAURANTS_SUCCESS,
        payload: true,
      });
    } else {
      dispatch({
        type: t.FIND_RESTAURANTS_ERROR,
        payload: 'user doesnt exist',
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

// export const toggleRegisterModal = (value) => ({
//   type: t.TOGGLE_REGISTER_MODAL,
//   payload: value,
// });
