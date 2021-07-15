import React from 'react';
import { useDispatch } from 'react-redux';
import { findRestaurants } from '../../redux/actions/map';
import SearchResults from './SearchResults/SearchResults';

const SearchRestaurant = ({ initialData }) => {
  const dispatch = useDispatch();

  // for finding a restaurant based on search query
  const handleSearch = (e) => {
    dispatch(findRestaurants(initialData, e.target.value));
  };

  return (
    <div className='relative'>
      <input type='text' onChange={handleSearch} />
      <div className='absolute z-10 w-3/4 bg-white'>
        <SearchResults />
      </div>
    </div>
  );
};

export default SearchRestaurant;
