// var, let, and const

var x = 1;
var x = 2; // not good if need announcement of def
console.log(x);

let y = 1; // err if redefine
// both let and var can be reassigned

const z = 1; // const can not be reassigned

// global scope 
let t = 1;

// local scope
{
  let y = 4;
}

// local scope
function myFunc() {
  const z = 5;
  console.log(z);
}

myFunc();