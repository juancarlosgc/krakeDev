validarPlaca=function(){
    let erroresEstructura;
    let tipoVehiculo;
    placa=recuperarTexto("txtPlaca");
    validarEstructura(placa,"lblError");
    erroresEstructura=validarEstructura(placa,"lblError");
    if ( erroresEstructura === null){
        console.log("Placa Valida");
        mostrarTexto("lblError","PLACA VALIDA");
        tipoVehiculo=obtenerTipoVehiculo(placa, "lblVehiculo");
        if (tipoVehiculo != null){
            mostrarTexto("lblVehiculo", tipoVehiculo);
        }
    }else{
        mostrarTexto("lblError",erroresEstructura);
    }
}

