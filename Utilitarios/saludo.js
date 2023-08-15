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

recuperaTexto= function(idComponente){
    let componente;
    let valoringresado;
    componente=document.getElementById(idComponente);
    valoringresado=componente.value;
    return valoringresado;
}

recuperarInt = function(idComponente){
    let valorCaja = recuperaTexto(idComponente);
    let valorEntero= parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja = recuperaTexto(idComponente);
    let valorFloat= parseFloat(valorCaja);
    return valorFloat;
}

mostrarTexto = function(idComponente, mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

mostrarImagen = function(idComponente, rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
}

mostrarTextoEnCaja=function(idComponente, mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}
