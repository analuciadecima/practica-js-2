/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos*/

//algoritmo:
//Datos de entrada: Numeros a ingresar
//Proceso: almacenar los numeros y sumarlos a los que ya estan ingresados.
//Resultado: Suma total de los numeros ingresados.

let numeros= ""
let sumatoria= ""


do {
numeros= parseInt(prompt ("Ingrese un numero"))

if (isNaN(numeros)) {alert ("Debe ingresar un numero")}
 else  {sumatoria += numeros;

 }

} 
while (numeros) {alert("La suma total de los números introducidos es: " + sumatoria);
}
