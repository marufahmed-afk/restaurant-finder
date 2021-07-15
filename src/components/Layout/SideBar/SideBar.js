import React from 'react';
import { useDispatch } from 'react-redux';
import { findRestaurants } from '../../../redux/actions/map';

const SideBar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(findRestaurants());
  };

  return (
    <div className='bg-gray-600'>
      <button className='btn' onClick={handleClick}>
        Random
      </button>
      <button className='btn'>Search</button>
    </div>
  );
};

export default SideBar;
