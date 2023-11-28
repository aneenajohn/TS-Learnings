import React from 'react'

type ButtonProps = {
  style: {
      padding: string,
      backgroundColor: string,
      color: string,
      margin: string,
      fontSize: number,
      borderRadius: number,
      borderColor: string
  }
}


const Button_2 = ({style}: ButtonProps) => {

  return (
    <button style={style}>
        Click me
    </button>
  )
}

export default Button_2;
