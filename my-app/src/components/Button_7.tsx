import { type } from 'os';
import React from 'react'

// V1
// type ButtonProps = {
//     type: "submit" | "reset" | "button",
//     autoFocus?: boolean
//   }

// V2
// type ButtonProps = React.ComponentProps<"button">;
// This will accept all the button attributes
// Following is the suggestion from TS: when we use `React.ComponentProps` and we don't have any ref being passed from parent then we could use `ComponentPropsWithoutRef` else `ComponentPropsWithRef` explicitly
// DOCS: type React.ComponentProps<T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>> = T extends React.JSXElementConstructor<infer P> ? P : T extends keyof React.JSX.IntrinsicElements ? React.JSX.IntrinsicElements[T] : {}
// NOTE: prefer ComponentPropsWithRef, if the ref is forwarded, or ComponentPropsWithoutRef when refs are not supported.

// V3
type ButtonProps = React.ComponentPropsWithoutRef<"button">;


// Button component with attributes
const Button_7 = ({type, autoFocus}: ButtonProps) => {

  return (
        <button type={type} autoFocus={autoFocus}>
            Click Me!
        </button>
  )
}

export default Button_7;