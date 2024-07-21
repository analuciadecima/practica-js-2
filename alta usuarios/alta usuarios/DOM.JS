
/* Guarda en localStorage el arreglo con la clave 'users'
Crea una tabla que muestre los datos de todos los usuarios incluida una imagen de su avatar.
Crea una función que te permita agregar un usuario nuevo. La carga de los datos se debe hacer a través de un formulario sencillo y la función se debe llamar en el evento submit del formulario.
Agrega un botón en la tabla, por cada usuario, que permita borrar el registro. Debes crear la función que realice esa acción y agregar el evento al botón.
Usa bootstrap para los estilos de la web.
IMPORTANTE
Todo cambio en los registros de usuarios debe guardarse en localStorage.*/


class Usuario {
    constructor(nombre, apellido, correo, avatar) {
        this.id = usuarios.length > 0 ? usuarios.at(-1).id + 1 : 1;
        this.first_name = nombre;
        this.last_name = apellido;
        this.email = correo;
        this.avatar = avatar;
    }
}


let usuarios = JSON.parse(localStorage.getItem("users")) || [
    {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
];

const guardarUsuarios = () => {
    localStorage.setItem("users", JSON.stringify(usuarios));
};

const crearTabla = () => {
    let cuerpoTabla = document.querySelector("#table-body");
    cuerpoTabla.innerHTML = "";
    usuarios.forEach((usuario) => {
        let fila = document.createElement("tr");
        let celdas = `
            <td>${usuario.id}</td>
            <td>${usuario.last_name} ${usuario.first_name}</td>
            <td>${usuario.email}</td>
            <td><img class="img-table" src=${usuario.avatar} alt=${usuario.last_name}/></td>
            <td>
                <button class="btn btn-primary rounded-pill" onclick="eliminarUsuario(${usuario.id})">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </td>`;
        fila.innerHTML = celdas;
        cuerpoTabla.append(fila);
    });
};

const agregarUsuario = (event) => {
    event.preventDefault();
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let correo = document.querySelector("#correo");
    let imagen = document.querySelector("#avatar");

    let user = new Usuario(nombre.value, apellido.value, correo.value, imagen.value);

    usuarios.push(user);
    guardarUsuarios();
    alert("El usuario se agregó de manera correcta");
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    imagen.value = "";
    crearTabla();
    document.querySelector("#registro").reset();
    nombre.focus();
};

document.querySelector("#registro").addEventListener("submit", agregarUsuario);

const eliminarUsuario = (id) => {
    let index = usuarios.findIndex((item) => item.id === id);
    if (index >= 0) {
        let validar = confirm(`Seguro desea eliminar a ${usuarios[index].first_name} ${usuarios[index].last_name}`);
        if (validar) {
            usuarios.splice(index, 1);
            guardarUsuarios();
            crearTabla();
        }
    }
};

crearTabla();
