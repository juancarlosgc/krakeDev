calcularTotal = function(){
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;


    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    
    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    console.log(nombreProducto);

    //2. Recuperar el precio como float
    precioProducto = recuperarFloat ("txtPrecio");
    console.log(precioProducto);
    
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");
    console.log(cantidad);

    //4. Recuperar el porcentaje de descuento como int
    porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");
    console.log(porcentajeDescuento);

    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal = calcularSubTotal(cantidad,precioProducto);
    console.log(valorSubtotal);

    //5. Mostrar valorSubtotal en el componente lblSubtotal
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
         */

    mostrarTexto("lblSubtotal", valorSubtotal);
    
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    //7. Mostrar el resultado en el componente lblDescuento
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Descuento esperado: 48.6
            Si el caso de prueba es exitoso, hacer un commit
         */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    //9. Mostrar el resultado en el componente lblValorIVA    
    /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                IVA esperado: 5.832
            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    //11. Mostrar el resultado en el componente lblTotal
     /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Total esperado: 5.832
            Si el caso de prueba es exitoso, hacer un commit
        */
    //12. Mostrar un resumen en el componente lblResumen
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */ 
    
}   
limpiar=function(){
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */