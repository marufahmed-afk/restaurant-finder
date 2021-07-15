import './App.scss';
import SideBar from './components/Layout/SideBar/SideBar';
import Home from './components/Home/Home';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App h-screen'>
        <div className=' text-black font-font1 h-full'>
          <div>
            <SideBar />
            <Home />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
