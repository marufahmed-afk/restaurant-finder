import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearSearchResults,
  findRestaurants,
} from '../../redux/actions/restaurants';
import SearchResults from './SearchResults/SearchResults';

interface SearchRestaurantProps {
  initialData: Object;
}

const SearchRestaurant: React.FC<SearchRestaurantProps> = ({
  initialData,
}: SearchRestaurantProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // currently just to clear the results on unmount
    return () => {
      dispatch(clearSearchResults());
    };
  }, []);

  // for finding a restaurant based on search query
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(findRestaurants(initialData, e.target.value));
  };

  return (
    <div className='relative w-full grid place-items-center mt-3'>
      <input
        className='border-2 rounded w-full max-w-lg p-3'
        type='text'
        onChange={handleSearch}
      />

      <SearchResults />
    </div>
  );
};

export default SearchRestaurant;
