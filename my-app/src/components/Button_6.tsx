import React from 'react'

interface ButtonProps {
    style: React.CSSProperties,
    borderRadius: Record<string, number>,
    // onClick: () => void, // DOCS: Function without any params and doesn't return anything
    onClick: (testNum: string) => number,
    children: React.ReactNode, // DOCS: Accepts everything as children like string, JSX Element, boolean, num etc.
    // children: JSX.Element // DOCS: Accepts only JSX element <div></div>
    setCount: React.Dispatch<React.SetStateAction<number>>
    isPillType?: boolean,
  }

// DOCS: interface can only define objects, other type of data structures can't be described with interface.
// interface Color {
//     color: "red" | "blue" | "white" | "purple"
// }
// something like a string color isn't possible.

type Color = "red" | "blue" | "white" | "purple"
const color: Color = "purple";

console.log({color});


const Button_6 = ({style, borderRadius, onClick, children, setCount, isPillType = false}: ButtonProps) => {

  const {topLeft, topRight, bottomLeft, bottomRight} = borderRadius;

  const clickHandler = () => {
    onClick("5");
    setCount((prevCount) => prevCount+1);
  }

  return (
    <>
        <button
            style={{...style, borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` }} onClick={clickHandler}>
            {children}
        </button>
        <Print />
    </>
  )
}

export default Button_6;

// DOCS: For React components with only default params TS infers the type by itself as below, hence not necessary to describe type explicitly
//  (parameter) text: string
const Print = ({text = "Hello"}) => {
    return <p>{text}</p>
}