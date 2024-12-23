import logo from './logo.svg';
import './App.css';
import Aboutme from './Aboutme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/about-me"
          rel="noopener noreferrer"
        >
          <Aboutme></Aboutme>
        </a>
      </header>
    </div>
  );
}

export default App;
