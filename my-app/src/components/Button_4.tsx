import React from 'react'

// type ButtonProps = {
//   style: React.CSSProperties,
//   borderRadius: {
//     topLeft: number,
//     topRight: number,
//     bottomLeft: number,
//     bottomRight: number
//   }
// }

// DOCS: The above type could be re-written as below as well:
// Record<string, number> => string => is the type of key in this object, and number is the type of value on this object

type ButtonProps = {
    style: React.CSSProperties,
    borderRadius: Record<string, number>,
    // onClick: () => void,
    onClick: (testNum: string) => number,
  }


const Button_4 = ({style, borderRadius, onClick}: ButtonProps) => {

  const {topLeft, topRight, bottomLeft, bottomRight} = borderRadius;

  return (
    <button style={{...style, borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` }} onClick={() => onClick("5")}>
        Click me
    </button>
  )
}

export default Button_4;
