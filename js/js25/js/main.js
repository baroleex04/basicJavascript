// Fetch API requires a discussion of
// Callbacks, Promises, Thenable, and Async/Await

// 2nd parameter of Fetch is a object
// Callbacks

// function firstFunction(parameters, callback) {
//     // do stuff
//     callback();
// }

// // AKA "callback hell"
// firstFunction(para, function() {
//     // do stuff
//     secondFunction(para, function() {
//         thirdFunction(para, function() {

//         })
//     })
// })

// * Promises
// 3 states: Pending, Fulfilled, Rejected

// Async / Await

// const myUsers = {
//     userList: []
// };
// Workflow function

// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const jsonJokeData = await response.json();

//   console.log(jsonJokeData);
// };

// getDadJoke();

// const jokeObj = {
//   id: "00000dfsfsdf",
//   joke: "Ha ha",
// };

// Abstract into functions
// maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const JsonResponse = await response.json();
  const joke = JsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// Workflow "procedure" function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
};

processJokeRequest();
// const requestJoke = async (firstName, lastName) => {
//   const response = await fetch(
//     `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
//   );
//   const JsonResponse = await response.json();

//   console.log(JsonResponse.value.joke);
// };
// requestJoke("Bao", "Le");

// const postData = async (jokeObject) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(jokeObject),
//   });
//   const JsonResponse = await response.json();

//   console.log(JsonResponse.headers);
// };

// postData(jokeObj);
// console.log(getAllUserEmails());
// const anotherFunction = async () => {
//     const data = await myCoolFunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);
// }

// anotherFunction();
// console.log(myUsers.userList);
// await must be in asynch function
// const users = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         data.forEach(user => {
//             console.log(user);
//         });
//     });

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! Resolve the promise!");
//   } else {
//     reject("No! Rejected the promise.");
//   }
// });

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resolved!");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then((value) => {
//   console.log(value);
// });
// console.log(myPromise);

// myPromise
// .then((value) => {
//     return value + 1;
// })
// .then(newValue => {
//     console.log(newValue);
// })
// .catch(err => {
//     console.log(err);
// })
