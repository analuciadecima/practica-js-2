/*
Tarea: Sistema de pacientes

1 - Crea una clase para crear objetos con datos de pacientes. 
Los datos serían:
- Nombre
- Fecha de nacimiento
- Género
- DNI
- Dirección
- Teléfono
- email
- número de historia clínica
- Enfermedad pre-existente
La clase debe tener las siguientes funciones:
- mostrarDatosPersonales: Lista en pantalla los datos nombre, DNI, dirección, telefono e email.
- mostrarDatosClinicos: Lista en pantalla los datos nombre, DNI, número de historia clínica y enfermedad pre-existente.

2 - Escribe una función que te permita agregar pacientes a un array y al finalizar muestre los datos clínicos de los mismos.

3 - Escribe una función que permita eliminar un paciente por su DNI

4 - Escribe una función que permita buscar pacientes por DNI y otra que permita hacer la búsqueda por nombre (puede devolver más de un paciente que coincida con la búsqueda)

5 - Escribe una función que ordene la lista de pacientes por nombre

*/

class Pacientes{
    constructor(nombre, fechanac , genero, dni, direccion, telefono, email, numerohist , enfermedad){
       this.nombre = nombre;
       this.fechanac = fechanac;
       this.genero = genero;
       this.dni = dni;
       this.direccion = direccion;
       this.telefono = telefono;
       this.email = email;
       this.numerohist = numerohist;
       this.enfermedad = enfermedad;    
    }
    mostrarDatosPersonales(){
        document.write (`Datos personales: <br>
         -Nombre: ${this.nombre} <br>
         -Dni: ${this.dni}<br>
         -Direccion: ${this.direccion} <br>
         -Telefono: ${this.telefono}<br>
        -Email: ${this.email}<br>
        `)
    }
    mostrarDatosClinicos(){
       document.write (`Datos clinicos: <br>
       -Nombre: ${this.nombre}<br>
        -Dni: ${this.dni}<br>
        -Numero de historia clinica: ${this.numerohist}<br>
        -Enfermedad pre-existente: ${this.enfermedad}<br>
       `)

    }
}
let paciente1 = new Pacientes ("Ana Lucia", "21/08/1994", "Femenino", 38184671, "Crisostomo alvarez 800", 3614060104, "lu.decima5@gmail.com", 1, "ninguna");

let paciente2 = new Pacientes ("Rafaela Padilla", "13/03/2000", "Femenino", 42333455, "Lamadrid 726", 3814060104, "rafaelapadilla@gmail.com", 2, "ninguna");

//agregar paciente nuevo (no se que toqué, que me sale como doble lista pablo, intente arreglarlo pero no pude 🥲)
const pacientes = []
const agregarPaciente = (nombre, fechanac , genero, dni, direccion, telefono, email, numerohist , enfermedad) => {
    const nuevoPaciente = {
        nombre, 
        fechanac, 
        genero, 
        dni, 
        direccion, 
        telefono, 
        email, 
        numerohist, 
        enfermedad
    }
    pacientes.push(nuevoPaciente)
}
agregarPaciente(paciente1)
agregarPaciente(paciente2)


//Buscar paciente por dni
function buscarPorDni(dni){
    const pacientesEncontrados = pacientes.filter((paciente)=> paciente.dni === dni)
    if (pacientesEncontrados) 
        {return pacientesEncontrados
        }     
        else {alert ("No hay coincidencias");
}
}

//ordenar por lista
function ordenarAlfabeticamente() {
    pacientes.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }else if (a.nombre > b.nombre) {
            return 1;
        }else{
            return 0;
        }
    });
}