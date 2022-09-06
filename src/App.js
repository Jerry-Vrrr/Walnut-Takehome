import BoxContainer from './Components/BoxContainer';
import { useState } from 'react';
import './App.css';

function App() {
const [numBoxes, setNumBoxes] = useState(25)

  return (
    <div className="App">
      <BoxContainer numBoxes={numBoxes}/>
      
    </div>
  );
}

export default App;
