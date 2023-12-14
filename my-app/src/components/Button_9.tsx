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
    },[]);

    // Generics:

    // const covertToArray = (value: string):string[] =>  {
    //     return [value]
    // }

    /**
     * Converts a value to an array of same type.
     * @param {T} value - The value to be converted to an array.
     * @returns {T[]} An array containing the provided value.
    **/
    // DOCS: Here there is relation between the parameter and the return value of this function,
    // ie whatever is the type of the value the return value should also be an array of same type
    const covertToArray = <T,>(value: T): T[] => {
        return [value]
    }

    covertToArray(2);
    convertToArray2("Hello");
    convertToArray2({name: "Abcd"})

    function convertToArray2<T>(value:T):T[] {
        return [value]
    }

    convertToArray2(2);
    convertToArray2("Hello");
    convertToArray2({name: "Abcd"})
  return (
    <div>
        <button>
            {btnLabelOptions.map((option) => option)}
        </button>
    </div>
  )
}

export default Button_9;
