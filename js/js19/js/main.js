// JSON
// Used to send and receive data in many languages

const myObj = {
  name: "Dave",
  hobbies: ["play", "code"],
  hello: function () {
    console.log("Hello!");
  }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);