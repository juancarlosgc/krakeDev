//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
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
    //let letra;
    //letra=recuperarTexto("txtLetra");

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
    let letrasEnconstradas;
    let caracter;
    
    for (let i=0;i<palabraSecreta.length;i++){
        if (palabraSecreta.charAt(i)==letra){
            mostrarLetra(letra,i);
            letrasEnconstradas+=1;
        }
    }
    
    //palabra=recuperarTexto("txtSecreta");
    //guardarPalabra(palabra);
}

ingresarLetra=function(){
    let aux,letra;
    aux=recuperarTexto("txtLetra");
    letra=aux.charCodeAt(aux);
    if (letra >= 65 && letra <= 90){
        validar(aux);
    }else{
        console.log("SOLO SE ADMITEN MAYUSCULAS");
    }

}



