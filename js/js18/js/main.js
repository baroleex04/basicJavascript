// Factory Function
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} pizza.`)
//   };
// }

// myPizza = pizzaFactory("medium");
// myPizza.bake();

// Classes
class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  getSauce() {
    return this.#sauce;
  }
  hereYouGo() {
    console.log(`Here is your ${this.#sauce} ${this.crust} ${this.#size} pizza.`)
  }
}

const myPizza = new Pizza("medium");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
console.log(myPizza.getSauce());

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
//   }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();

// const myPizza = new Pizza("gay", "small");
// myPizza.setCrust("sausege");
// myPizza.type = "supreme"
// myPizza.bake();
// myPizza.setToppings("fish");
// myPizza.setToppings("shrimp");
// console.log(myPizza.getToppings());
// console.log(myPizza.getCrust());