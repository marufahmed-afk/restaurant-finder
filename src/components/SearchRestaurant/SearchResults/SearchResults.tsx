import React from 'react';
import { useSelector } from 'react-redux';
import SearchResult from '../SearchResult/SearchResult';

interface RestaurantsRootState {
  restaurants: {
    restaurant: {
      location: Object;
      name: string;
    };
    restaurants: Array<any>;
  };
}

const SearchResults = () => {
  const { restaurants } = useSelector(
    (state: RestaurantsRootState) => state.restaurants
  );

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
