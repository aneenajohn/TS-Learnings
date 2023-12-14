import React from 'react'
import { type Color } from "../lib/types";
//DOCS: import { Color } from "../lib/types";
// To differentiate a type from the normal JS variables/functions, we can mention `import {type Color} from ...` while importing

// DOCS: Describes the relation between countValue and countHistory
// If countValue is of a number, then countHistory should be an array of numbers
type ButtonProps<T> = {
    countValue: T,
    countHistory: T[],
    color?: Color
}

const Button_10 = <T,>({countValue, countHistory}: ButtonProps<T>) => {
  return (
    <button>Click me!</button>
  )
}

export default Button_10;

// Traditional Function
function Button<T>({countValue, countHistory} : ButtonProps<T>) {
    return (
        <button>Click me!</button>
      )
}
