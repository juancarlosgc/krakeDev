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

guardarPalabra=function(palabra){
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
        }else{
            alert("Se tiene que ingresar una palabra de 5 caracteres en mayúsculas");
        }
    }
}

validar=function(){
    let palabra;
    palabra=recuperarTexto("txtSecreta");
    guardarPalabra(palabra);
}


