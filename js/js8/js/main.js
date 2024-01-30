// Ternary Operator
// Short hand for if else statement
let p1 = "paper"
let computer = "scissors"
let result = 
    p1 === computer 
        ? "Tie game!"
        : p1 === "rock" && computer === "paper"
        ? "Computer wins!"
        : p1 === "paper" && computer === "scissors"
        ? "Computer wins!"
        : p1 === "scissors" && computer === "rock"
        ? "Computer wins!"
        : "p1 wins!"
console.log(result)