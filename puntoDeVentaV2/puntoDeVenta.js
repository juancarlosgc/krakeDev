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
    let existeError= false;


    nombreProducto = recuperarTexto("txtProducto");
    cantidad = recuperarInt("txtCantidad");
    precioProducto = recuperarFloat ("txtPrecio");
    
    
    esProductoValido=function(dato, idComponenteError){
        let valida;
        valida = dato.charCodeAt(0);

        if(dato.length == 0 ){
            mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
            existeError = true;
        }

        if (dato.length > 10){
            mostrarTexto(idComponenteError,"DEBE CONTENER MENOS DE 10 CARACTERES");
            existeError = true;
        }

       for(i=0; i<dato.length; i++){
        if (dato.charCodeAt(i) < 65 || dato.charCodeAt(i) > 122  ){
            mostrarTexto(idComponenteError,"DEBE INGRESAR SOLO CARACTERES");
            existeError = true;
            }
        }

        if (existeError==false){
            mostrarTexto(idComponenteError, "");
        }
        return !existeError;
            
    }

    esCantidadValida=function(dato, idComponenteError){
        if(isNaN(dato) ){
            mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
            existeError = true;
        }

        if (dato < 1 || dato > 100){
            mostrarTexto(idComponenteError,"INGRESE UN NUMERO ENTRE 1 Y 100");
            existeError = true;
        }
        if (existeError==false){
            mostrarTexto(idComponenteError, "");
        }
        return !existeError;   
    }

    
    esPrecioValido=function(dato, idComponenteError){
        if(isNaN(dato) ){
            mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
            existeError = true;
        }

        if (dato < 0 || dato > 50){
            mostrarTexto(idComponenteError,"INGRESE UN NUMERO ENTRE 1 Y 50");
            existeError = true;
        }
        if (existeError==false){
            mostrarTexto(idComponenteError, "");
        }
        return !existeError;   
    }

    esProductoValido(nombreProducto,"lblError1");
    esCantidadValida(cantidad,"lblError2");
    esPrecioValido(precioProducto,"lblError3");

    if (esProductoValido(nombreProducto,"lblError1") && esCantidadValida(cantidad,"lblError2") && esPrecioValido(precioProducto,"lblError3")){
        valorSubtotal = calcularSubTotal(cantidad,precioProducto);
        mostrarTexto("lblSubtotal", valorSubtotal);

        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento);
    
        valorIVA=calcularIva(valorSubtotal-valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA);
    
        valorTotal=calcularValorTotal(valorSubtotal,valorDescuento,valorIVA);
        mostrarTexto("lblTotal", valorTotal); 
    }


limpiar=function(){
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");

       /* mostrarTexto("lblError1", "");
        mostrarTexto("lblError2", "");
        mostrarTexto("lblError3", "");*/
       

        mostrarTextoEnCaja("txtProducto", " " );
        mostrarTextoEnCaja("txtCantidad", "0");
        mostrarTextoEnCaja("txtPrecio", "0.0");
        mostrarTextoEnCaja("txtPorcentajeDescuento", "0.0");
}
}
