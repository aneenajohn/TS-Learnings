import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PrintText from "./components/PrintText";
import Button from "./components/Button";
import Button1 from "./components/Button_1";

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

  const [learnClicked, setLearnClicked] = useState(false);

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
          onClick={() => setLearnClicked((learnClicked) => !learnClicked)}
        >
          Learn React
        </a>
      </header>
      {/* {!learnClicked ? (<div style={{margin: "2rem"}}>
        <PrintText label="Enter text" />
      </div>)  : <></>} */}
      {/* <Button
        label="Click me"
        padding={[1,0.5]}
        background="purple"
        color="white"
        margin="2rem auto"
        fontSize={20}
      /> */}
      <Button1
        label="Click me"
        padding={[1,0.5]}
        background="purple"
        color="white"
        // color="grey" // TSERR: Type '"grey"' is not assignable to type 'Color'.
        margin={[2,"auto"]} // margin="2rem auto"
        fontSize={20}
      />
    </div>
  );
}

export default App;
