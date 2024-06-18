//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).

let numero = Number(
    prompt("Ingrese un número")
  );
  console.log(!isNaN(numero));
 
 if (numero % 2 === 0) {console.log("El numero ingresado es divisible en 2")

 } else if (numero % 3 === 0){
    console.log("El numero ingresado es divisible en 3")
 } else if (numero % 5 === 0){
    console.log("El numero ingresado es divisble en 5")
 } else if(numero % 7 === 0){
    console.log("El numero ingresado es divisble en 7")
 }
 

