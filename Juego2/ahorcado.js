
let palabraSecreta;
let errores=0;
let intentos=0;
let coincidencias=0;

esMayuscula=function(caracter){
    let letra;
    letra=caracter.charCodeAt(0);
        if (letra >= 65 && letra <= 90){
            return true;
        }else{
            return false;
        }
}
guardarPalabra=function(){
    palabra=recuperarTexto("txtSecreta");
    let aux="";
    let existeErrror = false;
    if (palabra.length ==  5){
        for (let i=0;i<palabra.length;i++){
            letra=palabra.charAt(i);
            if (esMayuscula(letra)){
                aux+=letra;
            }else{
                existeErrror=true;
            }
        }
        if (existeErrror==false){
            palabraSecreta=aux;
            console.log(palabraSecreta);
        }
    }else{
        alert("Se tiene que ingresar una palabra de 5 caracteres en mayúsculas");
    }
}

mostrarLetra=function(letra,posicion){
    if (posicion==0){
        mostrarTexto("div0",letra);
    }
    if (posicion==1){
        mostrarTexto("div1",letra);
    }
    if (posicion==2){
        mostrarTexto("div2",letra);
    }
    if (posicion==3){
        mostrarTexto("div3",letra);
    }
    if (posicion==4){
        mostrarTexto("div4",letra);
    }
}

validar=function(letra){
    let letrasEnconstradas=0;
    let error=false;
    
    for (let i=0;i<palabraSecreta.length;i++){
        if (palabraSecreta.charAt(i)==letra){
            letrasEnconstradas+=1; 
            coincidencias+=1;
            mostrarLetra(letra,i);        
        }
    }

    if(letrasEnconstradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores+=1;
        mostrarAhorcado();
    }


}

ingresarLetra=function(){
    let aux,letra;
    aux=recuperarTexto("txtLetra");
    intentos+=1;
    letra=aux.charCodeAt(aux);
    
        if (letra >= 65 && letra <= 90){
            validar(aux);
            if(coincidencias == 5){
                mostrarImagen("ahorcadoImagen","./ganador.gif");                
            }else if(intentos == 10){
                mostrarImagen("ahorcadoImagen","./gameOver.gif"); 
            }
        }else{
            console.log("SOLO SE ADMITEN MAYUSCULAS");
        }
    console.log("Intentos" + intentos);
    console.log("Coincidencias" + coincidencias);

}

mostrarAhorcado=function(){
    if (errores==1){
        mostrarImagen("ahorcadoImagen","./Ahorcado_01.png");
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen","./Ahorcado_02.png");
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen","./Ahorcado_03.png");
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen","./Ahorcado_04.png");
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen","./Ahorcado_05.png");
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen","./Ahorcado_06.png");
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen","./Ahorcado_07.png");
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen","./Ahorcado_08.png");
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen","./Ahorcado_09.png");
    }
}



