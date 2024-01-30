// Conditionals: If Statements
let customerIsBanned = false
let soup = "chicken noodle soup"
let reply
let crackers = true
if (customerIsBanned) {
    reply = "No soup for you"
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} and crackers`
} else if (soup) {
    reply = `Here's your order of ${soup}`
} else {
    reply = "Sorry, we're out of soup."
}
console.log(reply)
