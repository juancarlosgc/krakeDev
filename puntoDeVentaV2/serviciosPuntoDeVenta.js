calcularValorDescuento = function(monto, porcentaje){
    let descuento;
    descuento= (monto*porcentaje)/100;
    return descuento;
}

calcularIva = function(subTotal){
    let precioFinal,aux;
    precioFinal=subTotal*0.12;
    return precioFinal;
}

calcularSubTotal = function(precio, cantidad){
    let subTotal,aux;
    aux = parseFloat(precio*cantidad);
    subTotal=aux.toFixed(2);
    return subTotal;
}

calcularValorTotal = function(sub, des, iva){
    let total;
    total= (sub-des)+iva;
    return total;
}


calcularDescuentoPorVolumen=function(precio,cantidad){
    let descuento, valorPagar, valorSinDescuento;

    if (cantidad >= 3 && cantidad <= 5){
        descuento = (precio*3)/100;
        valorPagar=descuento.toFixed(2);
        return valorPagar;
    }else if (cantidad >= 6 && cantidad <= 11){
        descuento = (precio*4)/100;
        valorPagar=descuento.toFixed(2);
        return valorPagar;
    }else if (cantidad >= 12){
        descuento = (precio*5)/100;
        valorPagar=descuento.toFixed(2);
        return valorPagar;
    }else{
        valorPagar=precio.toFixed(2);
        return valorPagar;
    }
}












