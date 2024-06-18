//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt ("Ingresa tu edad")) ;
if (isNaN (edad)) {
    alert ("ingrese un número")
}

if (edad >= 18) {
    console.log('Ya puedes conducir');
  } else if (edad < 18 && edad >= 0) {
    console.log("Aún no puedes conducir");
  } else {
    console.log ("Introduce una edad válida");
  }
