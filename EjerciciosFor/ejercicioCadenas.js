ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadenas(mensaje);
   
}

ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

recorrerCadenas= function(cadena){
    let caracter;
  
    
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("caracter" + caracter + "Posicion" + posicion);
    }

    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER" + caracter + "Posicion" + posicion);
    }
}

invertirCadena=function(cadena){
    let cadenaResultante,aux;
    cadenaResultante="";
    for (let i=cadena.length; i>=0; i--){
        cadenaResultante+=cadena.charAt(i);
    }
    //console.log(cadenaResultante);
    mostrarTexto("lblTexto",cadenaResultante)
}