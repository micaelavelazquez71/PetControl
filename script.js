// Array de mascotas
let mascotas = [];

// Función para agregar mascota
function agregarMascota() {

    let nombre =
        document.getElementById("nombre").value;

    let tipo =
        document.getElementById("tipo").value;

    let edad =
        document.getElementById("edad").value;

    let unidadEdad =
        document.getElementById("unidadEdad").value;

    // Validaciones

    if (nombre === "" || edad === "") {

        document.getElementById("mensaje").innerHTML =
            "Complete todos los campos";

        return;
    }

    if (nombre.length < 3) {

        document.getElementById("mensaje").innerHTML =
            "El nombre debe tener al menos 3 caracteres";

        return;
    }

    if (edad <= 0) {

        document.getElementById("mensaje").innerHTML =
            "Ingrese una edad válida";

        return;
    }

    document.getElementById("mensaje").innerHTML = "";

    // Emoji según mascota

    let emoji = "";

    if (tipo === "Perro") {
        emoji = "🐶";
    }
    else if (tipo === "Gato") {
        emoji = "🐱";
    }
    else if (tipo === "Ave") {
        emoji = "🐦";
    }
    else if (tipo === "Conejo") {
        emoji = "🐰";
    }
    else {
        emoji = "🐹";
    }

    // Crear objeto mascota

    let mascota = {

        nombre: nombre,
        tipo: tipo,
        edad: edad,
        unidadEdad: unidadEdad,
        emoji: emoji,
        fecha: new Date().toLocaleString()

    };

    // Guardar en array

    mascotas.push(mascota);

    // Mostrar mascotas

    renderizarMascotas();

    // Limpiar campos

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
}

function renderizarMascotas() {

    let lista =
        document.getElementById("listaMascotas");

    lista.innerHTML = "";

    mascotas.forEach(function (mascota, indice) {

        lista.innerHTML += `

        <div class="tarjeta">

            <h2>${mascota.emoji} ${mascota.nombre}</h2>

            <p><strong>Tipo:</strong> ${mascota.tipo}</p>

            <p><strong>Edad:</strong> ${mascota.edad} ${mascota.unidadEdad}</p>

            <p><strong>Registrado:</strong> ${mascota.fecha}</p>

            <button
                class="eliminar"
                onclick="eliminarMascota(${indice})">

                Eliminar

            </button>

        </div>

        `;
    });

    document.getElementById("contador").innerHTML =
        "Cantidad de mascotas: " + mascotas.length;
}

// Eliminar mascota

function eliminarMascota(indice) {

    mascotas.splice(indice, 1);

    renderizarMascotas();
}

// Eliminar todas

function eliminarTodas() {

    mascotas = [];

    renderizarMascotas();
}