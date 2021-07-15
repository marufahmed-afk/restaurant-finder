import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearching } from '../../../redux/actions/interaction';
import {
  findRandomRestaurant,
  findRestaurants,
} from '../../../redux/actions/restaurants';
import SearchRestaurant from '../../SearchRestaurant/SearchRestaurant';

interface InteractionRootState {
  interaction: {
    isSearching: Boolean;
  };
}

const SideBar = () => {
  const dispatch = useDispatch();
  // const [isSearching, setIsSearching] = useState(false):
  const { isSearching } = useSelector(
    (state: InteractionRootState) => state.interaction
  );

  let initialData: Object = {
    clientId: process.env.REACT_APP_FOURSQUARE_CLIENT_ID,
    clientSecret: process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET,
    v: '20180323',
    ll: '23.78146816410938,90.40048221907503',
    radius: '3000',
    categoryId: '4d4b7105d754a06374d81259',
  };

  // for finding a random restaurant
  const handleRandom = () => {
    dispatch(findRandomRestaurant(initialData));
  };

  // for toggling the search input
  const toggleSearch = () => {
    // setIsSearching((prev) => !prev);
    dispatch(toggleSearching());
  };

  return (
    <>
      <div className='p-3 grid place-items-center'>
        <div className=''>
          <button className='btn' onClick={handleRandom}>
            Random
          </button>

          <button className='btn ml-4' onClick={toggleSearch}>
            Search
          </button>
        </div>

        {isSearching && <SearchRestaurant initialData={initialData} />}
      </div>
    </>
  );
};

export default SideBar;
