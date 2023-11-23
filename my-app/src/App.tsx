import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let companyName = "Google";
  // companyName = 100; // TSERR: Type 'number' is not assignable to type 'string'

  // function add(num1, num2){ // TSERR: Parameter 'num1' implicitly has an 'any' type

  // }

  function add(num1: number, num2: number): number {
    let res = num1 + num2;
    return res;
  }

  // add("abc") // TSERR: Expected 2 arguments, but got 1.
  // add("aa", "bb"); // TSERR: An argument for 'num2' was not provided.
  add(5,4)

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
      </header>
    </div>
  );
}

export default App;
