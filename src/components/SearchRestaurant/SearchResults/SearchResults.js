import React from 'react';
import { useSelector } from 'react-redux';
import SearchResult from '../SearchResult/SearchResult';

const SearchResults = () => {
  const { restaurants } = useSelector((state) => state.map);

  return (
    <div>
      {restaurants &&
        restaurants.map((restaurant) => (
          <SearchResult key={restaurant.id} restaurant={restaurant} />
        ))}
    </div>
  );
};

export default SearchResults;
