# TS-Learnings

## Benefits of having TS:

<!-- TSERR: Type 'number' is not assignable to type 'string' -->
`let companyName = "Google";
 companyName = 100;`


<!-- Parameter 'num1' implicitly has an 'any' type -->
`function add(num1, num2){ //
}`

<!-- A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value -->
`function add(num1: number, num2: number): number {
    let res = num1 + num2;
}`

<!-- Expected 2 arguments, but got 1. -->
<!-- An argument for 'num2' was not provided. -->
`add("abc")`

<!--  Argument of type 'string' is not assignable to parameter of type 'number'. -->