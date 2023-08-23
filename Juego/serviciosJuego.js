obtenerAleatorio=function(){
    //var aleatorio = Math.floor(Math.random() * (this._maximo - this._minimo + 1)) + this;
    let aleatorio,aux,aleatorioEntero,valor;
    aleatorio = Math.random();
    aux = aleatorio*3;
    aleatorioEntero=parseInt(aux);
    valor = aleatorioEntero+1;
    return valor;
}

generarElemento= function(){
    let valorRandomico;
    let resultado;
    valorRandomico = obtenerAleatorio();
    if (valorRandomico == 1){
        console.log(valorRandomico);
        resultado= "piedra";
        return resultado;
    }else if(valorRandomico == 2){
        console.log(valorRandomico);
        resultado= "papel";
        return resultado;
    }else if(valorRandomico == 3){
        console.log(valorRandomico);
        resultado= "tijera";
        return resultado;
    }
}

determinarGanador=function(eleccionJugador1,eleccionJugador2){
    let resultado;
    let op1,op2,ganador;
    op1=eleccionJugador1;
    op2=eleccionJugador2;
    if (op1 == "papel" && op2 == "piedra"){
        return 1; 
    }else if(op1 == "piedra" && op2 == "tijera"){
        return 1;
    }else if(op1 == "tijera" && op2 == "papel"){
        return 1;
    }else if(op2 == "papel" && op1 == "piedra"){
        return 2;
    }else if(op2 == "piedra" && op1 == "tijera"){
        return 2;
    }else if(op2 == "tijera" && op1 == "papel"){
        return 2;
    }else if(op2 == "piedra" && op1 == "piedra"){
        return 0;
    }else if(op2 == "papel" && op1 == "papel"){
        return 0;
    }else if(op2 == "tijera" && op1 == "tijera"){
        return 0;
    }
}

generarRuta=function(nombre){
    if(nombre == "piedra"){
        return "./imagenes/piedra.png";
    }else if(nombre == "papel"){
        return "./imagenes/papel.png";
    }else if(nombre == "tijera"){
        return "./imagenes/tijera.png";
    }
}