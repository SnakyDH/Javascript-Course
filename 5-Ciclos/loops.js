let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
/* Basic For */
for (let i = 0; i < numbers.length; i++) {
  if (i === 50) {
    continue; /* Se salta la condicional*/
    /* break : Rompe el ciclo*/
  }
  console.log(numbers[i]);
}
/* For in: For para objects*/
const persona = {
  nombre: "Daniel",
  apellido: "Garcia",
  edad: 20,
};
for (const key in persona) {
  /*Para objetos*/
  console.log(
    `key: ${key}, Value: ${persona[key]}` /*La notacion el . es comoun paso por valor, mientras [] es como pasar por parametro*/
  ); /* Keys del objeto*/
}
for (const iterator of numbers) {
  /* Para elementos iterables*/
  console.log(iterator);
}
