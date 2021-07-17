import { render, screen, fireEvent } from '@testing-library/react';
import Options from '../Options/Options';

import { Provider } from 'react-redux';
import store from '../../../redux/store';

const MockOptions = () => {
  return (
    <Provider store={store}>
      <Options />
    </Provider>
  );
};

describe('Options', () => {
  it('should render two option buttons for interacting', async () => {
    render(<MockOptions />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBe(2);
  });
});
