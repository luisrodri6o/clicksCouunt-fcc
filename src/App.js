import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/button";
import Count from "./components/count";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(0);

  const clickCount = () => {
    setClick(click + 1);
  };
  const ressetCount = () => {
    setClick(0);
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img alt='freecodecamp-logo' src={freeCodeCampLogo} />
      </div>
      <div className='main-container'>
        <Count clicks={click} />
        <Button text='click' ifclicksbutton={true} driver={clickCount} />
        <Button text='reset' ifclicksbutton={false} driver={ressetCount} />
      </div>
    </div>
  );
}

export default App;
