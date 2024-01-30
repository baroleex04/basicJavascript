// Web Storage API

// Not parts of the DOM - refers to the Window API
// Available to JS via the global variable - Window

// We do not have to type window. It is implied:

// window.alert(window.location);
// alert(location);

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
  name: "Le",
  hobbies: ["sleep", "eat", "code"],
  logname: function () {
    console.log(this.name);
  }
}

// sessionStorage.setItem("mySessionStore", myArray);
// const mySessionData = sessionStorage.getItem("mySessionStore");
// console.log(typeof mySessionData);

// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// const mySessionData = sessionStorage.getItem("mySessionStore");
// console.log(JSON.parse(mySessionData));

// sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// localStorage.clear();
const key = localStorage.key(0);
const length = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(key);
console.log(length);