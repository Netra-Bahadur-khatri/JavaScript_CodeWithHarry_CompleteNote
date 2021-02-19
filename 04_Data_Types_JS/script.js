

console.log("This is Tutorial No. 4");


/*
C/C++ is staticcally programming languages:
JS is Dynamically programming languages:
means we don't have to define any data types in js
Data Types in JS:
-> Primitive Data Types:
    :- main data types.
    :- memory allocation stack.
    :- string,number,boolean,char, float,null, undefined, symbol.
*/


//String
let name = `This is Netra kC`
console.log("My String name is "+name);
console.log("My Data type is "+(typeof name));


//number
let marks = 34;
console.log("Data types is "+(typeof marks));


//boolean
let isStudent = true;
console.log("Data types is "+(typeof isStudent));


//Null
let nullVar = null;
console.log("Data types is "+(typeof nullVar));


//Undefined
let undef = undefined;
console.log("Data types is "+(typeof undef));



/*
-> References Data Types:
    :- memory allocation at heap.
    :- Arrays,Objects literal, functions,Dates.
*/

//Array
let myArray = [1,2,3,4,5,false, "String", 34.56, null]
console.log("Data type is "+ (typeof myArray));

// Object Literals
let StudentMarks = {
    Netra:100,
    Yagya:78,
    jesis:45
}
console.log(StudentMarks);
console.log(typeof StudentMarks);

//functions
function findName(){

}
console.log(typeof findName);


//date
let date = new Date();
console.log(typeof date);
