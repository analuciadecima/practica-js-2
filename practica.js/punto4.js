/*Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/

let numero = Number(
    prompt("Ingrese una nota del 0 al 10")
  );
  if (!isNaN(numero)) {
    alert("Alguno de los valores ingresados no es un número");
    if (numero >= 0 && numero <= 2) {
        console.log("La nota es muy deficiente");
      } else if (numero >= 3 && numero <= 4) {console.log("La nota es insuficiente");
      } else if (numero >= 5 && numero <= 6) {
        console.log("La nota es suficiente");
      } else if (numero === 7) {console.log("La nota bien");
      } else if (numero >= 8 && numero <= 9) {console.log("La nota es notable");
      } else if (numero === 10) {console.log("La nota es sobresaliente");
      } else if (numero < 0 || numero > 10) {console.log("numero erroneo");
      } else {
        console.log('Introduce un número válido');
      }
    }


  