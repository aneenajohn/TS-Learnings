# TS-Learnings

## Benefits of having TS:

### TSERR: Type 'number' is not assignable to type 'string'
```
let companyName = "Google";
   companyName = 100;
```


### TSERR: Parameter 'num1' implicitly has an 'any' type
```
function add(num1, num2){ //
}
```

### TSERR: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value
```
function add(num1: number, num2: number): number {
    let res = num1 + num2;
}
```

### TSERR: Expected 2 arguments, but got 1. An argument for 'num2' was not provided.
`add("abc")`

### TSERR: Argument of type 'string' is not assignable to parameter of type 'number'.
### TSERR: Property 'label' is missing in type '{}' but required in type '{ label: any; }'.
`<PrintText />`

### TSERR: Binding element 'label' implicitly has an 'any' type.
 ```
 const PrintText = ({label}) => {
    // some code
    }
```

## Typing Props in React

So in react, props is an object and we destructure the keys from this props object.
Hence our type is also going to be an object as described below

A key containing `key?: value` in a prop of our type is an optional type even if you don't pass, TS wont throw an error

```
function PrintText({label, isShown = false} : {
    label: string,
    isShown?: false
}) => {}
```

So in cases, where we have numerous no. of props instead of having type checking as above syntax, we can have a clear concise one with `type` or `interface`

```
type PrintTextProps = {
    label: string,
    isShown?: boolean
}

const PrintText = ({label, isShown = false} : PrintTextProps) => {}
```

## Complete code used for demonstration below:
```
import React from 'react'

// type ButtonProps = {
//   style: React.CSSProperties,
//   borderRadius: {
//     topLeft: number,
//     topRight: number,
//     bottomLeft: number,
//     bottomRight: number
//   }
// }

// DOCS: The above type could be re-written as below as well:
// Record<string, number> => string => is the type of key in this object, and number is the type of value on this object
// Ref readme for more

type ButtonProps = {
    style: React.CSSProperties,
    borderRadius: Record<string, number>,
    // onClick: () => void, // DOCS: Function without any params and doesn't return anything
    onClick: (testNum: string) => number,
    children: React.ReactNode, // DOCS: Accepts everything as children like string, JSX Element, boolean, num etc.
    // children: JSX.Element // DOCS: Accepts only JSX element <div></div>
    setCount: React.Dispatch<React.SetStateAction<number>>
    isPillType?: boolean,
  }


const Button_5 = ({style, borderRadius, onClick, children, setCount, isPillType = false}: ButtonProps) => {

  const {topLeft, topRight, bottomLeft, bottomRight} = borderRadius;

  const clickHandler = () => {
    onClick("5");
    setCount((prevCount) => prevCount+1);
  }

  return (
    <>
        <button
            style={{...style, borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` }} onClick={clickHandler}>
            {children}
        </button>
        <Print />
    </>
  )
}

export default Button_5;


const Print = ({text = "Hello"}) => {
    return <p>{text}</p>
}
```

### TSERR: Property 'toUppercase' does not exist on type 'number'.
- When we try to access any predefined methods on array/string/obj/number, TS checks if the method used is allowed for this particular data type

```
type ButtonProps = {
    label: string,
    isPillType?: boolean,
    padding: number[],
    margin: [number,string],
    background: string,
    color: string,
    fontSize: number
}

let b = fontSize.toUppercase(); // Property 'toUppercase' does not exist on type 'number'
```

### Tuple type in TS:

- When we want to specify the length of the array and/or specify types for different elements of array, then we can use tuple.
- `margin: [number,string]`
- This allows only elements on this array with 1st element being a number and 2nd should be a string


## Specific Object Structure typing VS Generic typing

```
<!-- Specific -->
type ButtonProps = {
  style: React.CSSProperties,
  borderRadius: {
    topLeft: number,
    topRight: number,
    bottomLeft: number,
    bottomRight: number
  }
}

<!-- Generic -->
type ButtonProps = {
    style: React.CSSProperties,
    borderRadius: Record<string, number>,
    // onClick: () => void,
    onClick: (testNum: string) => number,
  }
```
1. Specific Object Structure:
The first type explicitly defines the structure of the borderRadius object with four specific properties (topLeft, topRight, bottomLeft, bottomRight) each having a number type. This approach provides clarity and strictness about the expected properties and their types.

2. Generalized Object Structure:
The second type (Record<string, number>) defines a more generalized structure for borderRadius. It allows any number of properties (keys) as strings with corresponding values as numbers. This approach is more flexible, allowing for a varying number of properties in the borderRadius object.

When we want to enforce that structure, the first type is more suitable as it explicitly defines those properties.
If we need flexibility and anticipate the possibility of additional or dynamic properties for borderRadius, the second type (Record<string, number>) is more appropriate as it allows for a more generic object structure.

## Passing functions as params:

```
type ButtonProps = {
    style: React.CSSProperties,
    borderRadius: Record<string, number>,
    // onClick: () => void,
    onClick: (testNum: string) => number,
}
```

- When the function doesn't have any parameter and doesn't return anything then, we can type the same as `onClick: () => void`

- Function having a/some params and returning a value can be typed as `onClick: (testNum: string) => number`

## Typing children prop:

```
type ButtonProps = {
    style: React.CSSProperties,
    borderRadius: Record<string, number>,
    onClick: (testNum: string) => number,
    children: React.ReactNode
  }
```

- When we type the `React.ReactNode`, this accepts a string, html element, boolean, it could be anything. All the below snippets are valid.

```
    <Button>Click me</Button>
    <Button>{true}</Button>
    <Button>
        <icon>I</icon>
    </Button>
```


## To have strict check to allow only JSX element,

```
type ButtonProps = {
    children: JSX.Element
  }
```

### TSERR: TS2747: 'Button5' components don't accept text as child elements. Text in JSX has the type 'string', but the expected type of 'children' is 'Element'.
```
**NOT ALLOWED**
<Button>Click me</Button>
```

```
**ALLOWED**
    <Button>
        <div>
            <span></span>
        </div>
    </Button>
```

## Typing Default Params:
- For components with default params, TS infers the type automatically.
- Hence we don't have to explicitly type

![Default Param comp](image.png)

## Interface VS Type
- Interface can only define objects, our type of data structures can't be described with interface.

```
interface ButtonProps {
    style: React.CSSProperties,
    borderRadius: Record<string, number>,
    // onClick: () => void, // DOCS: Function without any params and doesn't return anything
    onClick: (testNum: string) => number,
    children: React.ReactNode, // DOCS: Accepts everything as children like string, JSX Element, boolean, num etc.
    // children: JSX.Element // DOCS: Accepts only JSX element <div></div>
    setCount: React.Dispatch<React.SetStateAction<number>>
    isPillType?: boolean,
  }
```

- Describing strings like below isn't possible.
```
type Color = "red" | "blue" | "white" | "purple"
const color: Color = "purple";
```

- This has to be an object if it has to be described by interface.
```
interface Color {
     color: "red" | "blue" | "white" | "purple"
}
```
## Typing component attributes:

React.ComponentProps => would accept all the attributes of  buttton element and it also accepts a `ref={ref}` being forwarded from parent.
```
type ButtonProps = React.ComponentProps<"button">;
```

- To accept only the attributes without ref,
```
type ButtonProps = React.ComponentPropsWithoutRef<"button">;
```

- To accept ref and attributes:
```
type ButtonProps = React.ComponentPropsWithRef<"button">;
```

It's better to specify with or without Ref explicitly.

## Intersecting types and interfaces

```
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary"
}
```
In interface we use `extends` to intersect

```
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary"
}
```
## Typing events:

For event handlers like onClick/onChange etc, we can attach type to the event if not known by hovering over the event on the callback function, TS infers the actual event type and gives us as below:

![Alt text](image-1.png)

### onClick Events:
```
const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("btn clciked")
    }

<button onClick={handleClick}></button>/
```
### onChange Events:

```
<input value={enteredText} onChange={textInputHandler}/>

const textInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextToPrint("");
        setEnteredText(e.target.value)
    }

```

## Typing react hooks:

### useState:
For the primitive values, TS infers the type by itself hence we need not explicitly provide it

```
<!-- Not necessary to do: -->
const [count, setCount] = useState<number>(0);

<!-- Fine to do -->
const [count, setCount] = useState(0);
```

For the object or an array,
```
const [user,setUser] = useState<User | null>(null);

const name = user?.name;
```

### useRef:

For useRef which holds a mutable Html Element,
```
const btnRef = useRef<HTMLButtonElement | null>(null);
```

The only other hook that needs a typing, is useContext API

### useContext:

TODO: Need to add this over

## Type assertion:

### Making an array as const:

When we have an array of some strings, TS infers it as string[] by default, so this array can be manipulated later with string elements.

![Alt text](image-2.png)

And when we type this array with `as const` from TS, this is not part of JS. Now, this is not a generic string, it becomes as strict readOnly array with only the defined entries on array.

![Alt text](image-3.png)

`as` is to assert TS to provide a more specific type.

 The usage of as const in TypeScript is a type assertion that informs the TypeScript compiler that you want to infer the most specific possible literal types for the elements of an array, tuple, or object.

```
const btnLabelOptions = [
    "Click me!",
    "Click me again!",
    "Click me one more time!"
] as const;
```
This as const syntax ensures that TypeScript infers the tuple type with literal string types, not just a generic array of strings.

### Another example:
Here when don't describe any type to `previousButtonColor` TS infers it as `string | null`.

However when we know that the buttonColor is of specific type as `type ButtonColor = "red" | "green" | "blue"` 

![Alt text](image-4.png)

We can assert it as:
```
useEffect(() => {
        const previousButtonColor = localStorage.getItem('btnColor') as ButtonColor
    },[])
```

## Omitting props from a type

type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }

Construct a type with the properties of T except for those in type K.

```
type Browser = "Mozilla" | "Chrome" | "Opera" | "Safari"
    type User = {
        sessionId: string,
        clientId: Browser,
        name: string
    }

    <!-- DOCS: When guest User has all props of User type except name when we could use `Omit<t,k>` => Omit the property `k` present in type `t` -->

    type GuestUser = Omit<User, "name">;

    <!-- Guest user will have all props except "name" -->
```

## TS Generics:
Generics in general is preferred to describe the relation between the props passed / could be between the function parameter and the return value.

In TypeScript, when defining a generic function,`const functionName = <T>(param: T) => {...}`, the angle brackets `<T>` before the function parameters allow you to specify the generic type parameter(s) for that particular function


```
 function convertToArray2<T>(value:T):T[] {
        return [value]
    }
```

The <T> syntax just before the function parameters is the way to declare the generic type parameter T. It indicates that the function convertToArray is a generic function that can accept a type T, and it returns an array of type T[] containing the given value.

*Generics* are used here to describe the relation between the parameter and the return value of this function,
ie whatever is the type of the value the return value should also be an array of same type

### Arrow function:
*In TSX:*

It is necessary to have a comma `<T,>` for defining generic type. Adding the comma after <T,> helps TypeScript distinguish between JSX and the intended TypeScript generic type parameter. This way, TypeScript recognizes <T,> as a generic type declaration and not a JSX element as in <div></div>.

However in .TS files comma is not necessary

```
const covertToArray = <T,>(value: T): T[] => {
        return [value]
    }
```

### Exporting common types:

If we need a reusable  `type`, It's better the have them on a separate `types.ts` file and export;

While importing,

We can do `import { Color } from "../lib/types";` or `import { type Color } from "../lib/types";` to explicitly let the dev know its a TS type, not a JS var/func/component.

### Type `unknown` :

Let's say we need to fetch the data from ana external API, the response of which is unknown, Instead of leaving that `data` from the API as `any` we can type it as `unknown` and have a schema like *Zod* to verify that the shape of the response is as expected particular shape before using the data.

![Alt text](image-5.png)

Here is a sample:

![Alt text](image-6.png)
