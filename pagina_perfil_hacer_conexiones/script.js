
let logout = document.querySelector(".logout");

logout.addEventListener("click", function(){
    alert("¡Estás a punto de hacer logout!");
});

function muestraTitulo(elementoH1){
    alert("Le has dado click al " + elementoH1.textContent);
}

function muestraBusqueda(elementoBusqueda){
    console.log(elementoBusqueda.value);
}

function muestraLetra(elementoBusqueda){
    console.log(elementoBusqueda.value);
}

function seleccionaPais(elementoPais){
    console.log(elementoPais.value, elementoPais.textContent);
}

function cambiarFondo(elementoHeader){
    elementoHeader.classList.add("extra");
}

function removerFondo(elementoHeader){
    elementoHeader.classList.remove("extra");
}

function editProfileName() {
    // Solicitar al usuario que ingrese un nuevo nombre
    var newName = prompt("Enter your new name:");

    // Verificar si el usuario ingresó un nombre
    if (newName !== null) {
        // Actualizar el texto del nombre con el nuevo nombre
        document.getElementById('userName').textContent = newName.trim();
    }
}

function removerConexion(elementoRemover){
    // Remover el elemento de "Connection Requests"
    elementoRemover.closest(".card-list-item").remove();
    
    // Decrementar el contador de solicitudes de conexión
    decrementarContadorSolicitudes();

}

function agregarConexion(elementoAgregar){
    // Obtener el elemento de conexión a agregar
    let conexion = elementoAgregar.closest('.buttons').previousElementSibling;
    
    // Agregar el elemento a "Your Connections"
    agregarConexionAListado(conexion);

    // Remover el elemento de "Connection Requests"
    elementoAgregar.closest(".card-list-item").remove();
    
    // Actualizar los contadores de conexiones
    decrementarContadorSolicitudes();
    incrementarContadorConexiones();
}

function decrementarContadorSolicitudes() {
    let elementoNumeroConexiones = document.querySelector('#connectionRequestNumber');
    let numeroConexion = Number(elementoNumeroConexiones.textContent);
    numeroConexion --;
    elementoNumeroConexiones.textContent = numeroConexion;
}

function incrementarContadorConexiones() {
    let elementoNumeroTotalConexiones = document.querySelector('#totalConnections');
    let numeroTotalConexion = Number(elementoNumeroTotalConexiones.textContent);
    numeroTotalConexion ++;
    elementoNumeroTotalConexiones.textContent = numeroTotalConexion;
}

function agregarConexionAListado(conexion) {
    let listaConexiones = document.querySelector('#myConnections');
    listaConexiones.innerHTML += `
        <li class="card-list-item start">
            ${conexion.innerHTML}
        </li>`;
}
