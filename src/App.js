import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p contentEditable>
            Workflowy clone
          </p>
          <a
            className="App-link"
            href="workflowy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ul>
            <li>
            * display/deconstruct json file from io 
            </li>
            <li>
            ** make it editable 
            </li>
            <li>
            * zoom and unzoom
            </li>
            <li>
            * use object as state
            </li>
            </ul>


        </header>
      </div>
    );
  }
}

export default App;
