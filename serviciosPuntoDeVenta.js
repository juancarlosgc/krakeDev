calcularValorDescuento = function(monto, porcentaje){
    let descuento, total;
    descuento= (monto*porcentaje)/100;
    total=monto-descuento;
    return total;
}

calcularIva = function(precioSinIva){
    let precioFinal;
    precioFinal=precioSinIva*0.12;
    return precioFinal;
}

calcularSubTotal = function(precio, cantidad){
    let subTotal;
    subTotal = precio*cantidad;
    return subTotal;
}

calcularTotal = function(subTotal, descuento, iva){
    let total;
    cmpIva= document.getElementById(iva).value;
    total= parseFloat(cmpSubTotal)+parseFloat(cmpIva)+parseFloat(iva);
    return total;
}







