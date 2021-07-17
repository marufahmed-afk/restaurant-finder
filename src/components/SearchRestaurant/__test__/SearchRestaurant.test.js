import { render, screen, fireEvent } from '@testing-library/react';
import SearchRestaurant from '../SearchRestaurant';

import { Provider } from 'react-redux';
import store from '../../../redux/store';

const MockSearchRestaurant = () => {
  return (
    <Provider store={store}>
      <SearchRestaurant />
    </Provider>
  );
};

const mockHandleSearch = jest.fn();

describe('Search Restaurant', () => {
  it('should render loading text', async () => {
    render(<MockSearchRestaurant />);

    const divElement = screen.findByText('loading...');

    expect(divElement).toBeInTheDocument;
  });

  it('should call mockHandleSearch on change', async () => {
    render(<MockSearchRestaurant />);

    const inputElement = screen.getByPlaceholderText(
      /Start typing restaurant name.../i
    );

    inputElement.onChange = mockHandleSearch();

    fireEvent.change(inputElement, { target: { value: 'abc' } });

    expect(mockHandleSearch).toBeCalled();
  });

  it('should change value onchange', async () => {
    render(<MockSearchRestaurant />);

    const inputElement = screen.getByPlaceholderText(
      /Start typing restaurant name.../i
    );

    fireEvent.change(inputElement, { target: { value: 'burger' } });
    expect(inputElement.value).toBe('burger');
  });
});
