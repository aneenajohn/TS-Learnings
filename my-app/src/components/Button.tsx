import React from 'react'

const Button = ({label, isPillType = false, padding, margin, background, color, fontSize} : {
  label: string,
  isPillType?: boolean,
  padding: number[],
  margin: string,
  background: string,
  color: string,
  fontSize: number
}) => {

  const getPadding = (): string => {
    let paddingStr = padding.map((item) => `${item}rem`).join(" ")
    console.log({paddingStr})
    return paddingStr;
  }

  return (
    <button style={{
        padding: getPadding(),
        background: "purple",
        color: "grey",
        margin: "2rem auto",
        fontSize: `${fontSize}px`
    }}>
        {label}
    </button>
  )
}

export default Button