import React from 'react'


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

    type GuestUser = Omit<User, "name">
  return (
    <div>
        <button>
            {btnLabelOptions.map((option) => option)}
        </button>
    </div>
  )
}

export default Button_9;
