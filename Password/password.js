let mensajeError;

validarPassword=function(password){

    let mensajeMayuscula;
    let mensajeDigito;
    let mensajeCaracter;
    let mensajeLongitud;
    let existeErrorLongitud=false;
    let existeErrorLetra=false;
    let existeErrorDigito=false;
    let existeErrorCaracter=false;
    let letra,digito,caracter;


    //Valida que el password tenga una longitud entre 8 y 16 caracteres
    if (password.length >= 8 && password.length  <= 16){
        mensajeLongitud=""; 
        existeErrorLongitud=true;
    }else{
        mensajeLongitud="El password debe tener entre 8 y 16 caracteres";
       
    }

    //Valida que el password tenga al menos una letra mayúscula
    for(let i=0;i<password.length;i++){
        letra=password.charCodeAt(i);
        if (letra >= 65 && letra <= 90){
            existeErrorLetra=true;
        }
    }
    if (existeErrorLetra==true){
        mensajeMayuscula="";
    }else{
        mensajeMayuscula="El password debe contener al menos una letra Mayúscula";
    }


    //Valida que el password tenga al menos un digito
     for(let i=0;i<password.length;i++){
        digito=password.charCodeAt(i);
        if (digito >= 48 && digito <= 57){
            existeErrorDigito=true;
        }
    }
    if (existeErrorDigito==true){
        mensajeDigito="";
    }else{
        mensajeDigito="El password debe contener al menos un Digito";
    }

     //Valida que el password tenga al menos un caracter especial
     for(let i=0;i<password.length;i++){
        caracter=password.charCodeAt(i);
        if (caracter == 42 || caracter == 45 || caracter == 95){
            existeErrorCaracter=true;
        }
    }
    if (existeErrorCaracter==true){
        mensajeCaracter="";
    }else{
        mensajeCaracter="El password debe tener al menos caracter * - _";
    }

    //Valida que las banderas utilizadas esten en true caso contrario retorna el respectivo mensaje de error
    if (existeErrorLongitud = true && existeErrorLetra == true && existeErrorDigito == true && existeErrorCaracter== true){
        return mensajeError="";
    }else{
        return mensajeError=(mensajeLongitud + " \n\r" + mensajeMayuscula + "\n\r " + mensajeDigito + "\n\r " + mensajeCaracter );
    }

}

ejecutarValidacion=function(){
    let password,mensaje;
    password=recuperarTexto("txtPassword");
    mensaje=validarPassword(password);

    if (mensaje == ""){
        mostrarTexto("lblMensaje", "Password Correcto");
    }else{
        mostrarTexto("lblMensaje", mensaje);
    }
}


  


    
    

