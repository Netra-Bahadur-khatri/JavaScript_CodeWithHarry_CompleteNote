
console.log("This is third part in js from codewithharry");

/* 
Variables in JS:
ans:  Container
Keys to make an Variable in js:
3 ways: var, let, const
*/

var name = `Netra Kc`;
var address;
// address = "Nepalgunj";
var ph_no = 9864375;
console.log(name, address, ph_no);

/*
Rules for creating an variables in js:
-> cannot start with numbers.
-> can start with letters, numbers, or $.
-> are case sensitive.
*/


/*
Var Variable:
*/
var city = `Nepalgunj is my city.`;
console.log(city);



/*
const Variable:
*/
const collegeName = `The British college`;
// collegeName =   `The British College`; --> cannot do this(error)
console.log(collegeName);

// const fruitName; --> Not applicable, we have to assigned some values if we used an const keyword while making an variables.
const fruitNames = `Banana`;
console.log(fruitNames);


/*
let Variable: block level scope. or local variable
*/

{
    let cityName = "Kohalpur";
    cityName = `Digiya`;
    console.log(cityName);
}

const nameOfStudent = ["Netra", 12,"Yagya", 13, "Prakash", 14]
// nameOfStudent = ["Jesis", "Sajil","Nancy","SomeGirls"];
nameOfStudent.push(13);
console.log(nameOfStudent);

/*
Most common Programming case types:
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/