// VAR
var hola = "Hola Mundo";
var global = "Ambito global (Objeto Window) - Pre-ecmascript6";
//No usar Var JAMAS - Mala practica.
//LET
let bloque = "Ambito de bloque (Como otros lenguajes.)";
console.log(hola, global, bloque); //Concatenación con espacios.
//CONST
const PI = 3.1416;
/* Las variables de tipo const no pueden definirsen sin asignarles
      un valor, tampoco se le puede reasignar el valor en VARIABLES PRIMITIVAS. */
console.log(PI);
let object = {
  nombre: "Daniel",
  edad: 35,
};
const colores = ["Blanco", "Negro"];
console.log(object);
console.log(colores);
object.correo = "correo@gmail.com";
colores.push("Gris");
console.log(object);
console.log(colores);
// TODO ES UN OBJECTO
console.log(
  "La diferencia entre los metodos y los atributos en JS \n se evidencia cuando los metodos tienen el () y los atributos NO"
);
