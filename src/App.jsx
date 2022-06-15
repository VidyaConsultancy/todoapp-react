import { useState } from "react";
import "./App.css";
import { Greet } from "./Greet";

const App = (properties) => {
  const [timer, setTimer] = useState(new Date().toISOString());
  const [shouldShowTimer, setShouldShowTimer] = useState(true);
  const updateTimer = () => {
    setTimer(new Date().toISOString());
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {properties.appName} | {properties.version}
        </p>
        {shouldShowTimer ? <p>{timer}</p> : "No timer"}
        <button onClick={updateTimer}>Update timer</button>
        <button onClick={() => setShouldShowTimer(!shouldShowTimer)}>
          Togger Timer
        </button>
        <Greet name="John" />
        {/* <Greet name="Jane" />
        <Greet name="Jonas" />
        <Greet name="Smith" /> */}
      </header>
    </div>
  );
};

export default App;
