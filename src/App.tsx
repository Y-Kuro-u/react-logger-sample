import React from 'react';
import logo from './logo.svg';
import './App.css';
import Log from './lib/logger'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Log vls="sample-view-log" cls="sample-click-log">
          <div>
            <img src={logo} className="App-logo" alt="logo" onClick={() => {}}/>
          </div>
        </Log>
      </header>
    </div>
  );
}

export default App;
