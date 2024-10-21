import {data} from './lab1/module-data';
import CarProfile from './lab1/carProfile';
import './App.css'

function App() {
  return (
    <div className="App">
      {data.map((car, index) => (
        <CarProfile key={index} {...car} />
      ))}
    </div>
  );
}

export default App