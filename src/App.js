import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState('Testing');
  const [isClicked, setClick] = useState(false);

  useEffect(() => {
    if(isClicked){
      setState('Changed Text')
    }
    else{
      setState('Testing')
    }
  }, [isClicked])

  const changeText = () => {
    setClick(!isClicked);
  }

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
