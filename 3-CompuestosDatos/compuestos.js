console.log("Template String");
let text = "String";
let templateString = `Hi, Im template ${text}`;
console.log(templateString);
console.log("Functions hi()");
function hi() {
  console.log("Hi im Daniel :)");
}
console.log("Arrays");
const fruits = ["Apple", "Banana", "Blackberry"];
console.log(fruits);
console.log("Objects");
const cat = {
  name: "kitty",
  colour: "black",
  height: 40,
  favoriteFood: "fish",
};
let name = "Doggy",
  colour = "brown",
  height = 60,
  favoriteFood = "Cookies";
const dog = {
  name,
  colour,
  height,
  favoriteFood,
}; /*Asigna a la key name, el valor de la variable name etc...etc...*/
console.log(cat);
console.log(dog);
