import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [light, setLight] = useState("Green");

  useEffect(() => {
    let timer;
    switch (light) {
      case 'Red':
        timer = setTimeout(() => setLight('Green'), 4000);
        break;
      case 'Green':
        timer = setTimeout(() => setLight('Yellow'), 3000);
        break;
      case 'Yellow':
        timer = setTimeout(() => setLight('Red'), 500);
        break;
      default:
        break;
    }
    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div className="App">
      <div className="traffic-wrapper">
        <div className="traffic-lights">
          <div className="lights" style={{ backgroundColor: light === "Green" ? "green" : "grey" }}></div>
          <div className="lights" style={{ backgroundColor: light === "Yellow" ? "yellow" : "grey" }}></div>
          <div className="lights" style={{ backgroundColor: light === "Red" ? "red" : "grey" }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
