import logo from './logo.svg';
import './App.css';
import { Greet } from "./Greet";

const App = (properties) => {
  console.log(properties);
  const fileName = "src/App.js";
  const Hey = (<h2>Hey, there!</h2>)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{fileName}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {properties.appName} | {properties.version}
        </a>
        <Greet name="John" />
        <Greet name="Jane" />
        <Greet name="Jonas" />
        <Greet name="Smith" />
        {Hey}
      </header>
    </div>
  );
}

export default App;
