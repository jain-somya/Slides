import logo from './logo.svg';
import './App.css';
import Slides from './Slides';

function App({slides}) {
  

  return (
    <div className="App">
      <div className="w-full flex flex-row items-center p-2  justify-center shadow-xs bg-slate-800	">
      <div class="ml-8 text-3xl	 text-green-700 hidden md:flex">
        Slideshow App
    </div>
      </div>
      <Slides slides={slides}/>
    </div>
  );
}

export default App;
