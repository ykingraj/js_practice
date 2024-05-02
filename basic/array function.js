// forEach loop for array
/* the syntax of forEach loop for an array is  

array.forEach ((element, index, array) => 
{
  block of loop or function
})

here we have 3 arguments to in forEach loop that can be accessed and worked upon.

element = gives of returns the current value being worked upon

index = gives or returns the current index of the element being worked upon

array = gives the value of the array as whole.
*/
let numbers = [1, 2, 33, 22, 3, 4, 5];
numbers.forEach((n, i ,a) => {
    //console.log("Element at index " + i + " is " + n + " in array "+ a);
    //console.log(" The array being used is " + a);
  });




// sort function in array
/*
the sort function is used with array to sort it in ascending or decending order.

the syntax of sort function is 

array.sort() 
This sorts the given array in assending order and on the basics of unicode points of the character. Applicable only for the array with string not for numbers.

array.sort((variable_a, variable_b) => variable_a - variable_b)
This sorts the array in assending order. Here variable_a marks the smallest digit and the variable_b makrs the largest number.
After the fat arraow (=>) , the arrangement of the vabiable_a and variable_b determines the asending and decending order of the final output.
In this case the output is assending. We can use any variable in place of variable_a and variable_b.


array.sort((variable_a, variable_b) => variable_b - variable_a)
In this case the output is assending
*/
console.log ( numbers.sort())



//filter function
/*
the filter function is used to create a new array from the existing array based on certain condtion

syntax 

array.filter((number, index, array) => condition)

the index and array argument is optional
if the condition is true, then the number will be added to new array else, will be skiped
*/

let evenum = numbers.filter((num,ind) => num % 2 == 0 && ind > 1 )
console.log (evenum)



// reduce function
/*
this function is used to reduce the vlaues of an array to a single value and return it.

syntax 

array.reduce((accumulator, currentValue, index, array), => accumulaor operation currentValue, initialValue);

array.reduce((accumulator, currentValue, index, array), => accumulator + currentValue  initialValue);

here
accumulator: The accumulated value computed by the previous iterations or the initialValue (if provided).
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array reduce() was called upon.
initialValue (optional): An optional initial value to be used as the initial accumulator value. If omitted, the first element of the array will be used as the initial accumulator value, and iteration will start from the second element.

*/
numbers = [1,2,3,4,5,6,7,8,9]
let redarray = numbers.reduce((r,a) => r+a)
console.log ( redarray) // output = 45 

redarray = numbers.reduce((r,a) => r-a)
console.log ( redarray) // output = -43

redarray = numbers.reduce((r,a) => r*a)
console.log ( redarray) // output = 362880

numbers = ["a","b"]
redarray = numbers.reduce((r,a) => r+a , "hi ")
console.log ( redarray) // output = hi ab

numbers = ["a","b"]
redarray = numbers.reduce((r,a) => r-a)
console.log ( redarray) // output = NaN



//find() and findIndex() functions
/*
find() function will return the first value that satisfies the given condition.
syntax
array.find((element, index, array) => condition);
here
element: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array find() was called upon.
Return value:
The value of the first element in the array that satisfies the provided testing function, or undefined if no such element is found.

findIndex() function will return the index of first value that satisfies the given condition.
syntax 
array.findIndex(callback(element, index, array) => condition);
Parameters same as find()
but findIndex() returns the index of the found element instead of the element itself.
*/
numbers = [10, 20, 30, 40, 50];
// Find the first element greater than 25
let foundElement = numbers.find(number => number > 25);
console.log(foundElement); // Output: 30
// Find the index of the first element greater than 25
let foundIndex = numbers.findIndex(number => number > 25);
console.log(foundIndex); // Output: 2 (index of 30 in the array)


// some() and every() functions
/*
Both some() and every() are array methods in JavaScript used to test elements in an array against a condition, but they differ in how they evaluate the elements.

The some() 
method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if at least one element satisfies the condition, otherwise false.

Syntax:
array.some((element, index, array) => condition);

Parameters and return value:
element: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array some() was called upon.
Returns true if at least one element in the array satisfies the condition specified by the callback function; otherwise, returns false.


every():
method tests whether all elements in the array pass the test implemented by the provided function. It returns true if all elements satisfy the condition, otherwise false.

Syntax:
array.every((element, index, array) => condition);

Parameters and return value:
Same as some().
Returns true if every element in the array satisfies the condition specified by the callback function; otherwise, returns false.
*/
numbers = [10, 20, 30, 40, 50];

// Check if at least one element is greater than 25
let hasSome = numbers.some(number => number > 25);
console.log(hasSome); // Output: true (because 30, 40, and 50 are greater than 25)

// Check if every element is greater than 25
let allMatch = numbers.every(number => number > 25);
console.log(allMatch);



//includes() function
/*
it checks if the array includes the specified value

syntax 
array.includes(searchElement, fromIndex);

searchElement: The value to search for in the array.
fromIndex (optional): The position in the array at which to begin the search. If omitted or undefined, the search starts from index 0. If fromIndex is negative, it is treated as array.length + fromIndex. If fromIndex is greater than or equal to the length of the array, includes() returns false.

The includes() method returns true if the array contains the specified value, and false otherwise.
*/
let  fruits = ['apple', 'banana', 'orange', 'kiwi'];

// Check if 'banana' is included in the array
let hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true

// Check if 'grape' is included in the array
let hasGrape = fruits.includes('grape');
console.log(hasGrape); // Output: false




//push() function
/*
push(): Adds one or more elements to the end of an array and returns the new length of the array.

syntax 
array.puch(variable or "item")
*/
fruits = ['apple', 'banana'];
fruits.push('orange'); // ['apple', 'banana', 'orange']


//pop() function
/*
pop(): Removes the last element from an array and returns that element.

syntax
array.pop ( variable or "element")
*/
fruits = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop(); // 'orange'


//shift() function
/*
shift(): Removes the first element from an array and returns that element.

syntax
array.shift ( variable or "element")
*/
const fruits = ['apple', 'banana', 'orange'];
const firstFruit = fruits.shift(); // 'apple'

//unshift() function
/*
unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

syntax
array,unshift( variable or "element")
*/
const fruits = ['banana', 'orange'];
fruits.unshift('apple'); // ['apple', 'banana', 'orange']

//splice() function
/*
splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

syntax 
array.splice(start, deleteCount, item1, item2, ...);
*/

const fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'grape'); // ['apple', 'grape', 'orange']

//slice() function
/*
slice(): Returns a shallow copy of a portion of an array into a new array.

syntax
array.slice(start, end);
*/
const fruits = ['apple', 'banana', 'orange'];
const slicedFruits = fruits.slice(1, 2); // ['banana']


// concat() function
/*
concat(): Returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments.

syntax
array.concat("element 1","element 2")
*/
const fruits = ['apple', 'banana'];
const moreFruits = fruits.concat('orange', 'grape'); // ['apple', 'banana',  'orange', 'grape']

//indexof() function
/*
indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

syntax
array.indexOf("element")
*/
const fruits = ['apple', 'banana', 'orange'];
const index = fruits.indexOf('banana'); // 1

/* 
map()
*/