import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let helloWorld = 'It is Time to Learn React';
    let firstName = 'Rhonda';
    let lastName = 'Wilhelmson';
    return (
      <div className="App">
        <h2>{helloWorld}, {firstName} {lastName}</h2>
      </div>
    );
  }
}

export default App;
