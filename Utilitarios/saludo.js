

saludar = function(){
    let nombre = recuperaTexto("txtNombre");
    let apellido = recuperaTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat ("txtEstatura");
    let mensajeBeinvenida = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado", mensajeBeinvenida);
    mostrarImagen("imgSaludo", "./imagenes/hello.gif");
    mostrarTextoEnCaja("txtNombre","");
}