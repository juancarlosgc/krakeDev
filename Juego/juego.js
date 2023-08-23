let puntosUsuario=0;
let puntosComputador=0;

jugar=function(seleccionado){
    let jugador = seleccionado; 
    let elemento,imagen,resultado;
    elemento=generarElemento();
    imagen=generarRuta(elemento);
    mostrarImagen("imgJuego",imagen);
    resultado=determinarGanador(elemento,jugador);
    if (resultado==1){
        mostrarTexto("lblResultado", "PERDISTE LA PARTIDA");
        puntosComputador+=1;
        mostrarTexto("lblPuntosComputador", puntosComputador);
    }else if(resultado == 2){
        mostrarTexto("lblResultado", "GANASTE LA PARTIDA");
        puntosUsuario+=1;
        mostrarTexto("lblPuntosUsuario", puntosUsuario);
    }else if(resultado == 0){
        mostrarTexto("lblResultado", "EMPATE");
    }

    if (puntosUsuario == 5){
        mostrarTexto("lblMensajeGanador", "HAS GANADO EL JUEGO");
    }else if(puntosComputador == 5){
        mostrarTexto("lblMensajeGanador", "EL COMPUTADOR TE HA VENCIDO");
    }
    
}