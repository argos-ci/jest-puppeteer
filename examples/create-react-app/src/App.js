import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button className="App-button">Get Started</button>
          <input name="textInput" className="App-input" size="32" />
          <form className="App-form" name="testForm">
            <label for="App-testOne">test1:</label>
            <input className="App-testInput" type="text" name="testOne" />
            <label for="App-testTwo">test2:</label>
            <input className="App-testInput" type="text" name="testTwo" />
          </form>
          <select name="testSelect">
            <option value="first">First Value</option>
            <option value="second" selected>Second Value</option>
            <option value="third">Third Value</option>
          </select>
          <input name="textInput" className="App-inputFile" size="32" type="file" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
