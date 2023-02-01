/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map((num) => (num += 1));
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   let encontrados = array.find((e) => e == elemento);
    if(encontrados) return true;
    else return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let nuevo = arrayOfNums.reduce((a, b) => a + b, 0)
   return nuevo
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let acc = 0
   for(const i of resultadosTest){
      acc = acc + i
   }
   return acc / resultadosTest.length
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let grande = 0
   for(const i of arrayOfNums){
      if(grande < i) grande = i;
   } return grande
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let acc = 1
   if(arguments.length === 0) return 0
   else if(arguments.length === 1) return arguments[0]
   else{
      for(let i = 0; i < arguments.length; i++){
         acc = acc * arguments[i]
      }
      return acc
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let arreglo = array.filter((e) => e > 18)
   return arreglo.length
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1) return "Es fin de semana"
   else if(numeroDeDia === 7) return "Es fin de semana"
   else return "Es dia laboral"
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let texto = num.toString(); // Se pasa la variable "num" a string
   let primerValor = texto.charAt(0); // se toma el primer valor
   if(primerValor === "9") return true;
     return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   let comparar = array[0]; // guardamos el primer valor del array
   for (let i=1; i < array.length; i++) { //usamos el metodo for
      if(array[i] !== comparar) { // comparamos a partir del segundo valor [i] con el primero hasta que se acabe todo el array
         return false;
      }
   }
   return true
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let nuevoArray = []; // creamos un nuevo array
   for(let i=0; i < array.length; i++) { // usamos el metodo for para recorrer el array
      if(array[i] === "Enero"){ //preguntamos si el array i es igual al mes que buscamos
         nuevoArray.push(array[i]);
       } // si aparece le damos push para agregarlo al nuevo arreglo
      else if(array[i] === "Marzo"){
         nuevoArray.push(array[i]);
      }
      else if(array[i] === "Noviembre"){
         nuevoArray.push(array[i]);
      }
   }
   if(nuevoArray.length !== 3){ // preguntamos si es diferente a 3(numero de elementos en la busqueda)
      return "No se encontraron los meses pedidos";
   }
   return nuevoArray; // retornamos el array con los cambios
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let arrayTablaDelSeis = [];
   for(let i=0; i < 11; i++){
      arrayTablaDelSeis.push(6 * i);
   }
   return arrayTablaDelSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let mayores = [];// creamos un nuevo array para retornar los valores pedidos
   for(let i=0; i < array.length; i++) { // usamos el metodo for para recorrer el array
      if(array[i] > 100){
         mayores.push(array[i]); //si el i es mayor a 100 le damos push dentro del array
      }
   }
   return mayores; //si no retornamos los valores mayores a 100 al array nuevo
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let arreglo = [];// creamos un nuevo arreglo
   let valor = num; // guardamos el valor del num en una variable nueva
   for(let i = 0; i < 10; i++){ //usamos el for para recorrer el array
      valor = valor + 2; // se aumenta en dos el numero recibido en la variable principal
      if(valor === i){
         break; // si el valor es igual a la suma se interrumpe con el statement break
      }
      else arreglo.push(valor); // si no, se agrega a la variable 
   }
   if(arreglo.length < 10){
      return "Se interrumpió la ejecución";
   } else {
      return arreglo;
   }

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let arreglo = [];
   let valor = num;
   for(let i = 0; i < 10; i++){
      if(i+1 === 5){
         continue;
      }
      else {valor = valor + 2;
      arreglo.push(valor);
      }

   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
