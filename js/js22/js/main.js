// JS Event Listener

// const nav = document.querySelector("nav");
// console.log(nav);
// const h1 = nav.querySelector("h1");

// Syntax: addEventListener(event, function, useCapture)

// const doSomething = () => {
//     alert("Doing something!");
// }

// h1.addEventListener("click", doSomething, false);
// h1.removeEventListener("click", doSomething, false);

// h1.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.target.textContent = "Clicked";
// })

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

// const initApp = () => {
//   const nav = document.querySelector("nav");
// //   console.log(nav);
// //   const h1 = nav.querySelector("h1");
// //   nav.addEventListener(
// //     "click",
// //     (event) => {
// //       // event.stopPropagation();
// //       //   nav.classList.add("blue");
// //       nav.classList.toggle("blue");
// //       nav.classList.toggle("darkblue");
// //     },
// //     false
// //   );
// //   h1.addEventListener(
// //     "click",
// //     (event) => {
// //       // event.stopPropagation();
// //       const myText = event.target.textContent;
// //       myText === "My Page"
// //         ? (event.target.textContent = "Clicked")
// //         : (event.target.textContent = "My Page");
// //     },
// //     false
// //   );
//   nav.addEventListener("mouseover", (event) => {
//     event.target.classList.add("height100");
//   });
//   nav.addEventListener("mouseout", (event) => {
//     event.target.classList.remove("height100");
//   });
// };

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    })
}
