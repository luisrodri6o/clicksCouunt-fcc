import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/button";
import Count from "./components/count";
import { useStates } from "react";

function App() {
  const [clicks, setclicks] = useState(0);

  const clickCount = () => {
    setclicks(clicks + 1);
  };
  const ressetCount = () => {
    setclicks(0);
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img alt='freecodecamp-logo' src={freeCodeCampLogo} />
      </div>
      <div className='main-container'>
        <Count clicks={clicks} />
        <Button text='click' ifclicksbutton={true} driver={clickCount} />
        <Button text='reset' ifclicksbutton={false} driver={ressetCount} />
      </div>
    </div>
  );
}

export default App;
