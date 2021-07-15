import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSearching } from '../../../redux/actions/interaction';
import { selectRestaurant } from '../../../redux/actions/map';

const SearchResult = ({ restaurant }) => {
  const dispatch = useDispatch();

  const handleSelected = () => {
    dispatch(selectRestaurant(restaurant));
    dispatch(toggleSearching());
  };

  return (
    <div>
      <div
        className='text-sm md:text-base cursor-pointer'
        onClick={handleSelected}
      >
        {restaurant.name}
      </div>
    </div>
  );
};

export default SearchResult;
