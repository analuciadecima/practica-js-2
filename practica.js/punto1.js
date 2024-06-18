//1-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

 //1
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));
if (isNaN(num1) || isNaN(num2)) {
    alert("Alguno de los valores ingresados no es un número")}
else if (num1 > num2) {
    console.log('El número mayor es: ' + num1);
} else if (num2 > num1) {
    console.log('El número mayor es: ' + num2);
}