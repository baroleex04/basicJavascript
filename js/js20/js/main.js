// Javascript Error and Error Handling
"use strict";
// variable = "Dave";
// console.log(variable);

// Object..create();

// const name = "Dave";
// name = "Joe";

// const makeError = () => {
//   try {
//     const name = "Dave";
//     name = "Joe";
//   } catch(err) {
//     console.error(err.stack);
//     logTheError(err.stack);
//     // console.error(err.message);
//     // console.warn(err);
//     // console.table(err);
//   }
// };
// makeError();

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      // throw new customError("This is a custom error!");
      if (i % 2 !== 0) {
        throw new Error("Odd Number!");
      }
      console.log("Even Number!");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};

makeError();

// function customError(message) {
//   this.message = message;
//   this.name = "customeError";
//   this.stack = `${this.name}: ${this.message}`;
// }
