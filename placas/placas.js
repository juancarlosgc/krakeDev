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
        picoPlaca=obtenerDiapicoYPlaca(placa,"lblPicoPlaca");
        mostrarTexto("lblPicoPlaca", picoPlaca);

        provincia=obtenerProvincia(placa,"lblPicoPlaca");
        if (provincia != null){
            mostrarTexto("lblProvincia",provincia);
        }
        
    }else{
        mostrarTexto("lblError",erroresEstructura);
    }
}

limpiar=function(){
    mostrarTexto("lblError", "");
    mostrarTexto("lblPicoPlaca", "");
    mostrarTexto("lblVehiculo", "");
    mostrarTexto("lblProvincia", "");
    mostrarTextoEnCaja("txtPlaca","")

}
