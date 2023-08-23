
validarEstructura=function(numeroplaca, idComponenteError){
    let longitud;
    let mensajeConcatenado;
    let existeError=false;
    let encontrado = false;
    let picoPlaca = false

    placa=numeroplaca;
    longitud=placa.length;

    let caracter1,caracter2,caracter3,caracter4,caracter5,caracter6,caracter7,caracter8;
    let mensaje1,mensaje2, mensaje3,mensaje4,mensaje5,mensaje6,mensaje7,mensaje8,mensaje9;
    let mensajeVehiculo;
    let mensajePicoPlaca;
    let mensajepProvincia;
    caracter1=esMayuscula(placa.charAt(0));
    caracter2=esMayuscula(placa.charAt(1));
    caracter3=esMayuscula(placa.charAt(2));
    caracter4=esGuion(placa.charAt(3));
    caracter5=esDigito(placa.charAt(4));
    caracter6=esDigito(placa.charAt(5));
    caracter7=esDigito(placa.charAt(6));
    caracter8=esDigito(placa.charAt(7));
    

    if (longitud < 7 || longitud > 8){ 
        existeError = true;
        mensaje1="ERROR DEBE CONTENER ENTRE 7 Y 8 CARACTERES"
    }else{
        mensaje1=""
    }
    
        if (caracter1 == false){
            mensaje2="ERROR EL PRIMER CARACTER DEBE SER LETRA MAYUSCULA"
            existeError = true;
        }else{
            mensaje2=""
        }
        if(caracter2 == false){
            mensaje3="ERROR EL SEGUNDO CARACTER DEBE SER LETRA MAYUSCULA"
            existeError = true;
        }else{
            mensaje3=""
        }
        if(caracter3 == false){
            mensaje4="ERROR EL TERCER CARACTER DEBE SER LETRA MAYUSCULA"
            existeError = true;
        }else{
            mensaje4=""
        }
        if(caracter4 == false){
            mensaje5="ERROR EL CUARTO CARACTER DEBE SER UN GUION"
            existeError = true;
        }
        else{
            mensaje5=""
        }
        if(caracter5 == false){
            mensaje6="ERROR EL QUINTO CARACTER DEBE SER UN NUMERO ENTRE 0 Y 9"
            existeError = true;
        }else{
            mensaje6=""
        }
        
        if(caracter6 == false){
            mensaje7="ERROR EL SEXTO CARACTER DEBE SER UN NUMERO ENTRE 0 Y 9"
            existeError = true;
        }else{
            mensaje7=""
        }
        if(caracter7 == false){
            mensaje8="ERROR EL SEPTIMO CARACTER DEBE SER UN NUMERO ENTRE 0 Y 9"
            existeError = true;
        }else{
            mensaje8=""
        }
        if (longitud >= 8){
            if(caracter8 == false){
                mensaje9="ERROR EL OCTAVO CARACTER DEBE SER UN NUMERO ENTRE 0 Y 9"
                existeError = true;
            }else{
                mensaje9=""
            }
        }else{
            mensaje9="";
        }
        mensajeConcatenado=(" POR FAVOR REVISE LAS OBSERVACIONES CON ERROR \n\r " +mensaje1 + "\n\r" + mensaje2 + "\n\r" +  mensaje3 + "\n\r" + mensaje4 + "\n\r" + mensaje5 + "\n\r" + mensaje6 + "\n\r" + mensaje7 + "\n\r" + mensaje8 + "\n\r" + mensaje9);

        if (existeError == false){
            return null;
        }else{
           return mensajeConcatenado;
        }

}

obtenerTipoVehiculo=function(placa, idComponenteError){
    let caracter;
    caracter=placa.charAt(1);
    if (caracter == "A" || caracter == "Z"){
        mensajeVehiculo="Vehiculo comercial";
        encontrado= true;
        return mensajeVehiculo;
    }else if (caracter == "E" ){
        mensajeVehiculo="Vehiculo gubernamental";
        encontrado= true;
        return mensajeVehiculo;
    }else if (caracter == "X" ){
        mensajeVehiculo="Vehiculo de uso oficial";
        encontrado= true;
        return mensajeVehiculo;
    }else if (caracter == "S" ){
        mensajeVehiculo="Vehiculo de gobierno provincial";
        encontrado= true;
        return mensajeVehiculo;
    }else if (caracter == "M" ){
        mensajeVehiculo="Vehiculo de gobierno municipal";
        encontrado= true;
        return mensajeVehiculo;
    }else if (caracter == "M" ){
        mensajeVehiculo="Vehiculo de gobierno municipal";
        encontrado= true;
        return mensajeVehiculo;
    }else{
        mensajeVehiculo="Vehiculo particular";
        encontrado= true;
        return mensajeVehiculo;
    }

    if (encontrado == false){
        return null;
    }

}

obtenerDiapicoYPlaca=function(placa, idComponenteError){
    let caracter,digitoVerificador;
    digitoVerificador=placa.length-1;
    caracter=placa.charAt(digitoVerificador);

    if (caracter == 1 || caracter == 2){
        mensajePicoPlaca = "Día de Pico y Placa LUNES";
        return mensajePicoPlaca;
    }else if(caracter == 3 || caracter == 4){
        mensajePicoPlaca = "Día de Pico y Placa MARTES";
        return mensajePicoPlaca;
    }else if(caracter == 5 || caracter == 6){
        mensajePicoPlaca = "Día de Pico y Placa MIERCOLES";
        return mensajePicoPlaca;
    }else if(caracter == 7 || caracter == 8){
        mensajePicoPlaca = "Día de Pico y Placa JUEVES";
        return mensajePicoPlaca;
    }else if(caracter == 9 || caracter == 0){
        mensajePicoPlaca = "Día de Pico y Placa VIERNES";
        return mensajePicoPlaca;
    }
}

obtenerProvincia=function(placa, idComponenteError){
    let caracter,letraprovincia;
    letraprovincia=placa.charAt(0);
    if (letraprovincia == "A"){
        mensajeProvincia = "Azuay";
        return mensajeProvincia;
    }else if(letraprovincia == "B"){
        mensajeProvincia = "Bolivar";
        return mensajeProvincia;
    }else if(letraprovincia == "U"){
        mensajeProvincia = "Cañar";
        return mensajeProvincia;
    }else if(letraprovincia == "C"){
        mensajeProvincia = "carchi";
        return mensajeProvincia;
    }else if(letraprovincia == "X"){
        mensajeProvincia = "Cotopaxi";
        return mensajeProvincia;
    }else if(letraprovincia == "H"){
        mensajeProvincia = "Chimborazo";
        return mensajeProvincia;
    }else if(letraprovincia == "O"){
        mensajeProvincia = "El oro";
        return mensajeProvincia;
    }else if(letraprovincia == "E"){
        mensajeProvincia = "Esmeraldas";
        return mensajeProvincia;
    }else if(letraprovincia == "W"){
        mensajeProvincia = "Galapagos";
        return mensajeProvincia;
    }else if(letraprovincia == "G"){
        mensajeProvincia = "Guayas";
        return mensajeProvincia;
    }else if(letraprovincia == "I"){
        mensajeProvincia = "Imbabura";
        return mensajeProvincia;
    }else if(letraprovincia == "L"){
        mensajeProvincia = "Loja";
        return mensajeProvincia;
    }else if(letraprovincia == "R"){
        mensajeProvincia = "Los Rios";
        return mensajeProvincia;
    }else if(letraprovincia == "M"){
        mensajeProvincia = "Manabí";
        return mensajeProvincia;
    }else if(letraprovincia == "V"){
        mensajeProvincia = "Morona Santiago";
        return mensajeProvincia;
    }else if(letraprovincia == "N"){
        mensajeProvincia = "Napo";
        return mensajeProvincia;
    }else if(letraprovincia == "S"){
        mensajeProvincia = "Pastaza";
        return mensajeProvincia;
    }else if(letraprovincia == "P"){
        mensajeProvincia = "Pichincha";
        return mensajeProvincia;
    }else if(letraprovincia == "K"){
        mensajeProvincia = "Sucumbios";
        return mensajeProvincia;
    }else if(letraprovincia == "Q"){
        mensajeProvincia = "Orellana";
        return mensajeProvincia;
    }else if(letraprovincia == "T"){
        mensajeProvincia = "Tungurahua";
        return mensajeProvincia;
    }else if(letraprovincia == "Z"){
        mensajeProvincia = "Zamora Chinchipe";
        return mensajeProvincia;
    }else if(letraprovincia == "Y"){
        mensajeProvincia = "Santa Elena";
        return mensajeProvincia;
    }else{
        return null;
    }
    
    
}
 