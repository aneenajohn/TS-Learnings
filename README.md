# TS-Learnings

## Benefits of having TS:

### Type 'number' is not assignable to type 'string' -->
```let companyName = "Google";
   companyName = 100;
```


### Parameter 'num1' implicitly has an 'any' type
```function add(num1, num2){ //
}
```

### A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value
```function add(num1: number, num2: number): number {
    let res = num1 + num2;
}
```

### Expected 2 arguments, but got 1. An argument for 'num2' was not provided. -->
`add("abc")`

### Argument of type 'string' is not assignable to parameter of type 'number'.
### Property 'label' is missing in type '{}' but required in type '{ label: any; }'.
`<PrintText />`

### Binding element 'label' implicitly has an 'any' type.
 ```const PrintText = ({label}) => {
    // some code
    }
```

## Typing Props in React

So in react, props is an object and we destructure the keys from this props object.
Hence our type is also going to be an object as described below

A key containing `key?: value` in a prop of our type is an optional type even if you dont pass, TS wont throw an error

```function PrintText({label, isShown = false} : {
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

```

###  Property 'toUppercase' does not exist on type 'number'.
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

### Two pole type in TS:

- When we want to specify the length of the array and/or speacify types for different elements of array, then we can use two pole.
- `margin: [number,string]`
- This allows only elements on this array with 1st element being a number and 2nd should be a string

