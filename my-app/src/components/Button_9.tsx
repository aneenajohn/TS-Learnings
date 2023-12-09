import React, { useEffect } from 'react'


const Button_9 = () => {

    const btnLabelOptions = [
        "Click me!",
        "Click me again!",
        "Click me one more time!"
    ] as const; // DOCS: `as const` is part of TS not JS.

    type Browser = "Mozilla" | "Chrome" | "Opera" | "Safari"
    type User = {
        sessionId: string,
        clientId: Browser,
        name: string
    }

    // DOCS: When guest User has all props of User type except name when we could use `Omit<t,k>` => Omit the property `k` present in type `t`
    type GuestUser = Omit<User, "name">;

    type ButtonColor = "red" | "green" | "blue"

    useEffect(() => {
        const previousButtonColor = localStorage.getItem('btnColor') as ButtonColor
    },[])
  return (
    <div>
        <button>
            {btnLabelOptions.map((option) => option)}
        </button>
    </div>
  )
}

export default Button_9;
