import React from 'react'

type Color = "purple" | "red" | "blue" | "green" | "white" | "black"

type ButtonProps = {
    label: string,
    isPillType?: boolean,
    padding: number[],
    margin: [number,string],
    background: Color,
    color: Color,
    fontSize: number
    type?: "submit" | "reset" | "button",
}


const Button_1 = ({label, isPillType = false, padding, margin, background, color, fontSize}: ButtonProps) => {

  let a = fontSize.toString();
  console.log({a});
//   let b = fontSize.toUppercase(); // TSERR:Property 'toUppercase' does not exist on type 'number'.

  const getPadding = (): string => {
    let paddingStr = padding.map((item) => `${item}rem`).join(" ")
    console.log({paddingStr})
    return paddingStr;
  }

  return (
    <button style={{
        padding: getPadding(),
        background,
        color,
        margin: `${margin[0]}rem ${margin[1]}`,
        fontSize: `${fontSize}px`
    }}>
        {label}
    </button>
  )
}

export default Button_1