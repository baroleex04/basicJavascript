// Objects
// key-value pairs in curly braces
const myObj = {
  name: "Dave",
};
const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Milk",
  },
  action: function () {
    return "Hello World!";
  },
  thisAction: function () {
    return `Time for ${this.beverage.morning}!`;
  },
};

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vroom!!!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck);
console.log(truck.wheels);
console.log(truck.engine()); // Inheritance

const car = Object.create(vehicle);
car.doors = 2;
car.engine = function () {
  return "Halau!";
};
console.log(car);
console.log(car.wheels);
console.log(car.engine()); // Inheritance

const tesla = Object.create(car);
console.log(myObj.name);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["alive"]);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());
console.log(anotherObj.thisAction());

const band = {
  vocals: "Ro",
  guitar: "Ha", 
  sunny: "Ga",

};

delete band.vocals;
console.log(band.hasOwnProperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(band[job]);
}

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}`);
}

// destructuring object
// const { guitar : myVariable } = band;
// const { sunny } = band;
// console.log(sunny);
// console.log(myVariable);

function sings({ sunny }) {
  return `Guitar plays ${sunny}`;
} 

console.log(sings(band))
