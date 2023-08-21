calcularTasaInteres = function(ingresoAnual){
    
    let tasaInteres;
    if (ingresoAnual < 300000){
        tasaInteres = 16;
    }else if(ingresoAnual >= 300000 && ingresoAnual < 500000){
        tasaInteres=15;
    }else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
        tasaInteres=14;
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        tasaInteres=13;
    }else if(ingresoAnual >= 2000000){
        tasaInteres=12;
    }
    return tasaInteres;
}


calcularCapacidadPago= function(edad, ingresos, egresos){
    let capacidadPago, aux;
    aux=(ingresos-egresos);
    if (edad <= 50){
        capacidadPago=(aux*40)/100;
        return capacidadPago;
    }else{
        capacidadPago=(aux*30)/100;
        return capacidadPago;
    }
}

calcularDescuento=function(precio,cantidad){
    let descuento, valorPagar, valorSinDescuento,aux;
    valorSinDescuento=precio*cantidad;
    if (cantidad >= 3 && cantidad <= 5){
        descuento = (valorSinDescuento*2)/100;
        aux = valorSinDescuento-descuento;
        valorPagar=aux.toFixed(2);
        return valorPagar;
    }else if (cantidad >= 6 && cantidad <= 11){
        descuento = (valorSinDescuento*3)/100;
        aux = valorSinDescuento-descuento;
        valorPagar=aux.toFixed(2);
        return valorPagar;
    }else if (cantidad >= 12){
        descuento = (valorSinDescuento*4)/100;
        aux = valorSinDescuento-descuento;
        valorPagar=aux.toFixed(2);
        return valorPagar;
    }else{
        aux=valorSinDescuento;
        valorPagar=aux.toFixed(2);
        return (valorSinDescuento);
    }
}

determinarColesterolLDL = function(colesterol){
    let nivelColesterol;
    if (colesterol < 100){
        nivelColesterol="Óptimo";
        return nivelColesterol;
    }else if(colesterol>= 100 && colesterol <= 129){
        nivelColesterol="Casi óptimo";
        return nivelColesterol;
    }else if(colesterol>= 130 && colesterol <= 159){
        nivelColesterol="Límite superior de rango normal";
        return nivelColesterol;
    }else if(colesterol>= 160 && colesterol <= 189){
        nivelColesterol="Alto";
        return nivelColesterol;
    }else if(colesterol>= 1090){
        nivelColesterol="Muy alto";
        return nivelColesterol;
    }
}

validarClave=function(clave){
    let validaClave;
    validaClave=clave.length;
    if (validaClave >= 8 && validaClave <= 16){
        return true;
    }else{
        return false;
    }
}

esMayuscula=function(caracter){
    let caracterValidar;
    caracterValidar=caracter.charCodeAt(0);
    if (caracterValidar >= 65 && caracterValidar <= 90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let caracterValidar;
    caracterValidar=caracter.charCodeAt(0);
    if (caracterValidar >= 97 && caracterValidar <= 122){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let caracterValidar;
    caracterValidar=caracter.charCodeAt(0);
    if (caracterValidar >= 48 && caracterValidar <= 57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90 ){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso= function(notaMatematica, notaFisica, notaGeometria){
    if (notaMatematica > 90 || notaFisica > 90){
        if (notaGeometria > 80){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        if (notaFisica > notaMatematica){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}