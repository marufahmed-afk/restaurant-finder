import React from 'react';
import { useSelector } from 'react-redux';

const SelectedRestaurant = () => {
  interface SelectedRestaurantRootState {
    restaurants: {
      restaurant: {
        name: string;
      };
    };
  }

  const { restaurant } = useSelector(
    (state: SelectedRestaurantRootState) => state.restaurants
  );

  return (
    <div className='bg-green-500 text-white text-base lg:text-lg rounded p-3 text-center font-semibold'>
      {restaurant
        ? 'Selected: ' + restaurant.name
        : 'No restaurants selected yet!'}
    </div>
  );
};

export default SelectedRestaurant;
