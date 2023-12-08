import React, { useState, useRef } from 'react'


type ButtonProps = {
    type: "primary" | "secondary",
    color: "red" | "blue" | "green"
}

type SuperButtonProps = ButtonProps & {
    size: "md" | "lg" | "sm"
}


const Button_8 = ({type, color}: ButtonProps) => {

    type User = {
        name: string,
        age: number
    }

    const [count, setCount] = useState
    (0);
    const [abc, setAbc] = useState("hello");
    const [isBoolean, setBoolean] = useState(true);

    // DOCS: For the primitive values, TS infers the type by itself hence we need not explicitly provide it
    // const [count, setCount] = useState<number>(0);

    const [user,setUser] = useState<User | null>(null);

    const name = user?.name;

    const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
        <button
            style={{
            margin: "2rem",
            padding: "1rem",
            background: "purple",
            color: "white"
            }}
            onClick={(e) => console.log("Btn clicked")}
            ref={btnRef}
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