import './App.css';
import ColorInput from './ColorInput';
import { useState } from 'react';

function App() {
  const [background, setBackground] = useState('#fff');
  const handleColorChange = (rgb) => {
    setBackground(rgb);
  };

  return (
    <div className="App" style={{backgroundColor: background}}>
      <ColorInput onColorChange={handleColorChange}/>
    </div>
  );
}

export default App;
