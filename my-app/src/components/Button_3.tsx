import React from 'react'

type ButtonProps = {
  style: React.CSSProperties;
}


const Button_3 = ({style}: ButtonProps) => {

  return (
    <button style={style}>
        Click me
    </button>
  )
}

export default Button_3;
