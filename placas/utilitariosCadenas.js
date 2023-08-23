esMayuscula=function(caracter){
    let validaLetraMayuscula;
    validaLetraMayuscula=caracter.charCodeAt(0);
    if (validaLetraMayuscula >= 65 && validaLetraMayuscula <=90){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let validaDigito;
    validaDigito=caracter.charCodeAt(0);
    if (validaDigito >= 48 && validaDigito <=57){
        return true;
    }else{
        return false;
    }
}

esGuion=function(caracter){
    let validaGuion;
    validaGuion=caracter.charCodeAt(0);
    if (validaGuion == 45){
        return true;
    }else{
        return false;
    }
}