import { render, screen, fireEvent } from '@testing-library/react';
import MapArea from '../MapArea';

import { Provider } from 'react-redux';
import store from '../../../redux/store';

const MockMapArea = () => {
  return (
    <Provider store={store}>
      <MapArea />
    </Provider>
  );
};

describe('MapArea', () => {
  it('should render google maps', async () => {
    render(<MockMapArea />);
    const divElement = screen.getByTestId('maparea');
    expect(divElement).toBeInTheDocument;
  });
});
