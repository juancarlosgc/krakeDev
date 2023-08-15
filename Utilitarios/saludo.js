saludar = function(){
    let nombre = recuperaTexto("txtNombre");
    let apellido = recuperaTexto("txtApellido");
}

recuperaTexto= function(idComponente){
    let componente;
    let valoringresado;
    componente=document.getElementById(idComponente);
    valoringresado=componente.value;
    return valoringresado;
}