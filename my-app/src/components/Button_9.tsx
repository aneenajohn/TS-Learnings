import React from 'react'

const Button_9 = () => {

    const btnLabelOptions = [
        "Click me!",
        "Click me again!",
        "Click me one more time!"
    ] as const; // DOCS: `as const` is part of TS not JS.

  return (
    <div>
        <button>
            {btnLabelOptions.map((option) => option)}
        </button>
    </div>
  )
}

export default Button_9;
