/*
there are 2 types of memories used in JS
Stack and Heap

Stack (used by premetive data types)
here each variable of premetive datatype take copy of the value of variable from the value stored in memory.
so the changes are made to the copy of the value, not to the actual value stored in memory unless the original variable's value is changed.

Heap (used by Referancial or non premitive data types)
here each variable take the refferance for the actual memory address of the value stored in memory, not just copy.
so if the changes are made, the actual value stored on memory is altered
*/

let a = 1
console.log(a)

let b = a
console.log(b)

b = 2
console.log(b)
console.log(a)

// here the value of a = 1 even after b takes referance from a and then assigned new value as 2

let l = [1,2,3,4,5]
console.log(l)
console.log(l[3])

l[3] = 10

console.log(l)

// here the value of the l[3] is taken as refferance and the changes made to it, make changes to the actual array as the memory location is taken as refferance not just the copy.