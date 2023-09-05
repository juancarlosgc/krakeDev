let esNuevo=false;
let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1712925698",nombre:"Juan",apellido:"Carlos",sueldo:700.0}
]

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarCajas();
    
}

mostrarOpcionRol=function(){
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen=function(){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}

mostrarEmpleados=function(){
    let elementoEmpleado;
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
   "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        contenidoTabla+=
       "<tr>"
       +"<td>" + elementoEmpleado.cedula + "</td>"
       +"<td>" + elementoEmpleado.nombre + "</td>"
       +"<td>" + elementoEmpleado.apellido + "</td>"
       +"<td>" + elementoEmpleado.sueldo + "</td>"
       +"</tr>"
    }

    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
}

buscarEmpleado=function(cedula){
    let elementoCliente;
    let clienteEncontrado;
    for(let i=0;i<empleados.length;i++){
        elementoCliente=empleados[i];
        if (elementoCliente.cedula == cedula){
            clienteEncontrado=elementoCliente;
            return clienteEncontrado;
        }
    }
    return null;
}

agregarEmpleado=function(empleado){
    let resultado;
    resultado=buscarEmpleado(empleado.cedula);
    if(resultado==null){
        empleados.push(empleado);
        return true;
    }else{
        alert("Ya existe empleado" + empleado.cedula);
        return false;
    }
}

guardar=function(){
    let error=false;
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorApellido=recuperarTexto("txtApellido");
    let valorSueldo=recuperarFloat("txtSueldo");
    let cedula=validaCedula(valorCedula);
    let nombre=validaCaracteres(valorNombre);
    let apellido=validaCaracteres(valorApellido);
    let sueldo=validaSueldo(valorSueldo);
    
    if (valorCedula.length != 10){
        mostrarTexto("lblErrorCedula","La cédula debe tener 10 digitos");
        error=true;
    }else if (cedula == false){
        mostrarTexto("lblErrorCedula","La cédula debe tener solo digitos");
        error=true;
    }else{
        mostrarTexto("lblErrorCedula","");
    }
    
    if (valorNombre.length < 3){
        mostrarTexto("lblErrorNombre","El nombre debe contener al menos 3 caracteres");
        error=true;
    }else if (nombre==false){
        mostrarTexto("lblErrorNombre","El nombre debe contener solo letras mayusculas");
        error=true;
    }else{
        mostrarTexto("lblErrorNombre","");
    }

    if (valorApellido.length < 3){
        mostrarTexto("lblErrorApellido","El apellido debe contener al menos 3 caracteres");
        error=true;
    }else if (apellido==false){
        mostrarTexto("lblErrorApellido","El apellido debe contener solo letras mayusculas");
        error=true;
    }else{
        mostrarTexto("lblErrorApellido","");
    }

    if(sueldo == false){
        mostrarTexto("lblErrorSueldo","Debe ingresar un numero entre 400 Y 5000");
        error=true;
    }


    if (esNuevo==true){
        if (error==false){
            let aux;
            aux=valorSueldo.toFixed(2);
            let nuevoEmpleado= {};
             nuevoEmpleado.cedula=valorCedula;
             nuevoEmpleado.nombre=valorNombre;
             nuevoEmpleado.apellido=valorApellido;
             nuevoEmpleado.sueldo=aux;
             let empleado= agregarEmpleado(nuevoEmpleado);
             if (empleado == true){
                alert("Empleado Guardado correctamente");
                mostrarEmpleados();
                deshabilitarCajas();
                esNuevo=false;
             }
        }
    }else if(esNuevo == false){
        if (error==false){
            let modificaEmpleado=buscarEmpleado(valorCedula);
            modificaEmpleado.nombre=valorNombre;
            modificaEmpleado.apellido=valorApellido;
            modificaEmpleado.sueldo=valorSueldo;
            mostrarEmpleados();
            deshabilitarCajas();
            alert("EMPLEADO MODIFICADO");
        }

    }

    
}


validaCedula=function(cedula){
    let caracter;
    let esDigito;
    for (let i = 0 ; i < cedula.length; i++ ){
    caracter=cedula.charCodeAt(i);
        if (caracter >= 48 && caracter <= 57 ){
            esDigito = true;
        }else{
            esDigito = false;
            return esDigito;
        }
    }
    return esDigito;
    
}

validaCaracteres=function(texto){
    let caracter;
    let esCaracter;
    for (let i = 0 ; i < texto.length; i++ ){
    caracter=texto.charCodeAt(i);
        if (caracter >= 65 && caracter <= 90 ){
            esCaracter = true;
        }else{
            esCaracter = false;
            return esCaracter;
        }
    }
    return esCaracter;
}


validaSueldo=function(valor) {
    if (valor>=400 && valor<=5000){
        return true;
    }else{
        return false;
    }
}

deshabilitarCajas=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtBusquedaCedula");
    let empleado=buscarEmpleado(valorCedula);
    if (empleado != null){
        mostrarTextoEnCaja("txtCedula",empleado.cedula);
        mostrarTextoEnCaja("txtNombre",empleado.nombre);
        mostrarTextoEnCaja("txtApellido",empleado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
    }else{
        alert("EMPLEADO NO EXISTE");
    }
}

limpiar=function(){
    esNuevo=false;
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    deshabilitarCajas();

}

buscarRol=function(){
    let valorCedula=recuperarTexto("txtBusquedaCedulaRol");
    let empleado=buscarEmpleado(valorCedula);

    if (empleado != null){
        mostrarTexto("infoCedula",empleado.cedula);
        mostrarTexto("infoSueldo",empleado.sueldo);
        mostrarTexto("infoNombre",empleado.nombre + " " +  empleado.apellido);
        infoNombre
    }
}
  




