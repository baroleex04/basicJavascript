// Numbers
const myNumber = 42;

const myFloat = 42.01;

const myString = "42.123asds";

console.log(myNumber);

console.log(myFloat);

console.log(myString);

console.log(myString === myNumber);

console.log(myNumber === myString);
console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
console.log(Number("Dave"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseInt(myFloat));
console.log(myFloat.toString());
console.log(typeof Number.parseFloat(myString));
console.log(Number.parseFloat("4.23abc").toFixed(2).toString());
console.log(Number.isNaN("Dave"));
console.log(isNaN("Dave"));