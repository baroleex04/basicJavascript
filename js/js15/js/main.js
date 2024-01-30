// array
const myArray = [];

myArray[0] = "Dave"
myArray[1] = 1001
myArray[2] = false

console.log(myArray)

console.log(myArray.length)

console.log(myArray[1])

myArray.push("school")

const lastItem = myArray.pop()

console.log(lastItem)

myArray.unshift(42)

console.log(myArray)

myArray.shift()

console.log(myArray)

delete myArray[1]

console.log(myArray)
myArray.splice(1,1, true)
console.log(myArray)