import { type } from 'os';
import React from 'react'


type ButtonProps = {
    type: "primary" | "secondary",
    color: "red" | "blue" | "green"
}

type SuperButtonProps = ButtonProps & {
    size: "md" | "lg" | "sm"
}


const Button_8 = ({type, color}: ButtonProps) => {

  return (
        <button
            style={{
            margin: "2rem",
            padding: "1rem",
            background: "purple",
            color: "white"
            }}
            onClick={(e) => console.log("Btn clicked")}
        >
            Click Me!
        </button>
  )
}

export default Button_8;


export const SuperButton = ({type, color, size}: SuperButtonProps) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("btn clciked")
    }

    return (
        <button
            style={{
                margin: "2rem",
                padding: "1rem",
                background: color,
                color: "white",
                fontSize: `${size === "md" ? '1.5rem' : (size === "sm" ? "1rem" : "2rem")}
                }`
            }}
            onClick={handleClick}
        >
            Super Button
        </button>
    )
  }