console.log ( 2 == 0) // false
console.log ( 2 > 0)  //true
console.log ( 2 < 0)  // false
console.log ( 2 <= 0) // false
console.log ( 2 >= 0) //true

/*

== and === are known as equality check operators 

< , > , <= , >= are know as comparision operators

both equality and comparision operators works differently in turms of comparision and data type conversion

example
*/

console.log ( '2' == 0)  // false
console.log ( '2' > 0)   // true

console.log ( null == 0) // false
console.log ( null < 0)  // false
console.log ( null >= 0) // true

/* 
here equlity operator changes null to NaN and then compare where as comparision changes it to 0 and then compare. Thus we are getting true in line 3
*/