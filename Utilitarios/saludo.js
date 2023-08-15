saludar = function(){
    let nombre = recuperaTexto("txtNombre");
    let apellido = recuperaTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat ("txtEstatura");
    let mensajeBeinvenida = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado", mensajeBeinvenida);
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

