// making a symbol in JS

let a = Symbol(2)
let b = Symbol(2)

console.log (a==b)
console.log(a)

//we can see that a and b both have 2 value as symbol but the comparision of the values return false because each symbol return different value irespective of there assigned value

/*
1) Primitive Datatypes (values returned from typeof function)
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes (values returned from typeof function)
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/