calcularValorDescuento = function(monto, porcentaje){
    let descuento;
    descuento= parseFloat((monto*porcentaje)/100);
    return descuento;
}

calcularIva = function(subTotal){
    let precioFinal;
    precioFinal=parseFloat(subTotal*0.12);
    return precioFinal;
}

calcularSubTotal = function(precio, cantidad){
    let subTotal;
    subTotal = precio*cantidad;
    return subTotal;
}

calcularValorTotal = function(sub, des, iva){
    let total;
    total= (sub-des)+iva;
    return total;
}


calcularDescuentoPorVolumen=function(precio,cantidad){
    let descuento,aux;

    if (cantidad >= 3 && cantidad <= 5){
        aux = (precio*3)/100;
        descuento=aux.toFixed(2);
        return descuento;
    }else if (cantidad >= 6 && cantidad <= 11){
        aux = (precio*4)/100;
        descuento=aux.toFixed(2);
        return descuento;
    }else if (cantidad >= 12){
        aux = (precio*5)/100;
        descuento=aux.toFixed(2);
        return descuento;
    }else{
        aux=precio.toFixed(2);
        return descuento;
    }
}












