jugar = function(){
    let aleatorio;
    aleatorio=lanzarDado();
    if (aleatorio > 3){
        console.log("Ganaste");
        cambiarTexto("lblMensaje", "Es MAYOR a 3.. GANASTE");
    }else{
        cambiarTexto("lblMensaje", "Es MENOR a 3.. PERDISTE");
    }
    cambiarTexto("lblNumero",aleatorio);
}

lanzarDado=function(){
    let aleatorio;  
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1;
    return valorDado;
}
