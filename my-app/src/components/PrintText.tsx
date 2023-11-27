import React, { useEffect, useState } from 'react'

/**
 * Write a functional component that accepts an extended piece of text from the user and prints the text to the screen,
 * beginning with the first word and appending the next word every half-second until the entire text is displayed on the screen.
 * For example, if the user submits “Hi my name is Bob”, the screen should read “Hi”, then “Hi my”, then “Hi my name”, and so on.
 * If the user submits another piece of text reset the display and begin printing the new text.
 **/
type PrintTextProps = {
    label: string,
    isShown?: boolean
}
const PrintText = ({label, isShown = false} : PrintTextProps) => {
    const [enteredText, setEnteredText] = useState("");
    const [textToPrint, setTextToPrint] = useState("");
    const timeouts: any = [];

    const textInputHandler = (e: any) => {
        setTextToPrint("");
        setEnteredText(e.target.value)
    }

    const onSubmitClicked = () => {
        const words = enteredText.split(" ");
        setEnteredText("");
        setTextToPrint("");

        words.forEach((word, index) => {
            // setTimeout(() => {
            //     setTextToPrint(words.slice(0, index+1).join(" "));
            //     console.log(words.slice(0, index+1).join(" "))
            // }, index*500);

            const timeout = setTimeout(() => {
                setTextToPrint((prevText) => (`${prevText} ${word} `))
            }, index*500)

            timeouts.push(timeout);
        })
    }

    useEffect(() => {
        return () => {
            console.log("Cleanup called", timeouts);
            timeouts.forEach((timeout: string | number | NodeJS.Timeout | undefined) => clearTimeout(timeout));
        }
    },[])

  return (
    <div>
        <div>
            <label>{label}</label>
            <input value={enteredText} onChange={textInputHandler}/>
        </div>
        <button onClick={onSubmitClicked}>Submit</button>
        {textToPrint ? <p>{textToPrint}</p>: <></>}
    </div>
  )
}

export default PrintText