calcularValorDescuento = function(monto, porcentaje){
    let cmpMonto, cmpPorcentaje;
    let descuento, total;
    cmpMonto=document.getElementById(monto).value;
    cmpPorcentaje=document.getElementById(porcentaje).value;
    descuento= (parseFloat(cmpMonto)*parseInt(cmpPorcentaje))/100;
    total=parseInt(cmpMonto)-descuento;
    return total;
}

calcularIva = function(precioSinIva){
    let cmpPrecioSinIva;
    let precioFinal;
    cmpPrecioSinIva=document.getElementById(precioSinIva).value;
    precioFinal=parseFloat(cmpPrecioSinIva)*0.12;
    return precioFinal;
}

calcularSubTotal = function(precio, cantidad){
    let cmpPrecio, cmpCantidad;
    let subTotal;
    //cmpPrecio=document.getElementById(precio);
    //cmpCantidad=document.getElementById(cantidad);
    //let num1 = parseFloat(cmpPrecio);
    //let num2 = parseInt(cmpCantidad);
    subTotal = precio*cantidad;
    return subTotal;
}

calcularTotal = function(subTotal, descuento, iva){
    let total;
    let cmpSubTotal, cmpDescuento, cmpIva;
    cmpSubTotal=document.getElementById(subTotal).value;
    cmpDescuento= document.getElementById(descuento).value;
    cmpIva= document.getElementById(iva).value;
    total= parseFloat(cmpSubTotal)+parseFloat(cmpIva)+parseFloat(iva);
    return total;
}







