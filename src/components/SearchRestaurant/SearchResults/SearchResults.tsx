import React from 'react';
import { useSelector } from 'react-redux';
import SearchResult from '../SearchResult/SearchResult';

interface RestaurantsRootState {
  restaurants: {
    loading: Boolean;
    restaurants: Array<any>;
  };
}

const SearchResults = () => {
  const { restaurants, loading } = useSelector(
    (state: RestaurantsRootState) => state.restaurants
  );

  return !loading ? (
    restaurants && (
      <div className='absolute top-14 z-10 w-full bg-white border-2 rounded p-3 max-w-lg max-h-80 overflow-y-auto'>
        {restaurants.map((restaurant) => (
          <SearchResult key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    )
  ) : (
    <p className='text-sm'>loading...</p>
  );
};

export default SearchResults;
