import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PrintText from './components/PrintText';
import Button from './components/Button';
import Button1 from './components/Button_1';
import Button2 from './components/Button_2';
import Button3 from './components/Button_3';
import Button4 from './components/Button_4';
import Button5 from './components/Button_5';
import Button7 from './components/Button_7';
import Button8, { SuperButton } from './components/Button_8';
import Button10 from './components/Button_10';
import Button11 from './components/Button_11';

function App() {
  let companyName = 'Google';
  // companyName = 100; // TSERR: Type 'number' is not assignable to type 'string'

  // function add(num1, num2){ // TSERR: Parameter 'num1' implicitly has an 'any' type

  // }

  const [count, setCount] = useState(0);
  function add(num1: number, num2: number): number {
    let res = num1 + num2;
    return res;
  }

  // add("abc") // TSERR: Expected 2 arguments, but got 1.
  // add("aa", "bb"); // TSERR: An argument for 'num2' was not provided.
  add(5, 4);

  const [learnClicked, setLearnClicked] = useState(false);

  const onClick1 = () => {
    console.log('onClick event fired');
  };
  const onClick2 = (testNum: string): number => {
    console.log(Number(testNum));
    return Number(testNum);
  };

  useEffect(() => {
    console.log({ count });
  }, [count]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
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
      {/* V2 */}
      {/* <Button1
        label='Click me'
        padding={[1, 0.5]}
        background='purple'
        color='white'
        // color="grey" // TSERR: Type '"grey"' is not assignable to type 'Color'.
        margin={[2, 'auto']} // margin="2rem auto"
        fontSize={20}
      /> */}
      {/* V3 */}
      {/* <Button2
        style={{
          padding: '1rem 0.5rem',
          backgroundColor: 'purple',
          color: 'white',
          margin: '2rem auto',
          fontSize: 24,
          borderRadius: 8,
          // borderRadius: "8px" // TSERR: Type 'string' is not assignable to type 'number'.
          borderColor: 'red',
        }}
      /> */}
      {/* <Button3
        style={{
          padding: '1rem 0.5rem',
          backgroundColor: 'purple',
          color: 'white',
          margin: '2rem auto',
          fontSize: 24,
          borderRadius: 8,
          // borderRadius: "8px",
          borderColor: 'red',
        }}
      /> */}
      {/* <Button4
        style={{
          padding: '1rem 0.5rem',
          backgroundColor: 'purple',
          color: 'white',
          margin: '2rem auto',
          fontSize: 24,
          // borderRadius: 8,
          borderColor: 'red',
        }}
        borderRadius={{
          topLeft: 16,
          topRight: 8,
          bottomLeft: 8,
          bottomRight: 16,
        }}
        // onClick={onClick1}
        onClick={onClick2}
      /> */}
      {/* <Button5
        style={{
          padding: '1rem 0.5rem',
          backgroundColor: 'purple',
          color: 'white',
          margin: '2rem auto',
          fontSize: 24,
          // borderRadius: 8,
          borderColor: 'red',
        }}
        borderRadius={{
          topLeft: 16,
          topRight: 8,
          bottomLeft: 8,
          bottomRight: 16,
        }}
        // onClick={onClick1}
        onClick={onClick2}
        setCount={setCount}
      >
        Click me!
      </Button5> */}
      {/* <Button7 type='button' autoFocus={true} /> */}
      <Button8 type='primary' color='red' />
      <SuperButton type='primary' color='red' size='md' />

      {/* <Button10 countValue={5} countHistory={[2, 3, 4, 5]}/>
      <Button10 countValue={'5'} countHistory={['2','3', '4', '5']}/>
      <Button10 countValue={true} countHistory={[false, true, true, false]}/> */}
      <Button11 />
    </div>
  );
}

export default App;
