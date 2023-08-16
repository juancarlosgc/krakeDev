calcularValorDescuento = function(monto, porcentaje){
    let descuento;
    descuento= (monto*porcentaje)/100;
    return descuento;
}

calcularIva = function(subTotal, descuento){
    let precioFinal;
    precioFinal=(subTotal-descuento)*0.12;
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









