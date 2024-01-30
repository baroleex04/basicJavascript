// Functions

// Function Declaration Syntax

function sum(num1, num2) {
  if (num2 === undefined) {
    return num1;
  }
  return num1 + num2;
}

function getUsernameFromEmail(email) {
  return email.slice(0, email.indexOf("@"))
}

const getUsernameFromEmail2 = function (email) {
  return email.slice(0, email.indexOf("@"))
}

const getUsernameFromEmail3 = (email) => {
  return email.slice(0, email.indexOf("@"))
}

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(getUsernameFromEmail3("ng@mai"));
console.log(toProperCase("vdfvdfbd"));
console.log(sum(6));
