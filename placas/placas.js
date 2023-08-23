validarPlaca=function(){
    let erroresEstructura;
    placa=recuperarTexto("txtPlaca");
    validarEstructura(placa,"lblError");
    erroresEstructura=validarEstructura(placa,"lblError");
    if ( erroresEstructura === null){
        console.log("Placa Valida");
        mostrarTexto("lblError","PLACA VALIDA");
    }else{
        mostrarTexto("lblError",erroresEstructura);
    }
}

