import './App.scss';
import Options from './components/Layout/Options/Options';
import Home from './components/Home/Home';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import SelectedRestaurant from './components/SelectedRestaurant/SelectedRestaurant';

function App() {
  return (
    <Provider store={store}>
      <div className='App h-screen'>
        <div className=' text-black font-font1 h-full'>
          <div>
            <Options />
            <Home />
            <SelectedRestaurant />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
