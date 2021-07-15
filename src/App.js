import './App.scss';
import SideBar from './components/Layout/SideBar/SideBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App h-screen'>
      <div className=' text-black font-font1 h-full'>
        <div className=''>
          <SideBar />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
