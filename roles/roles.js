let esNuevo=false;
let roles=[];
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
    deshabilitarComponente("btnGuardarRol");
   
    
}

mostrarOpcionResumen=function(){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
    mostrarRoles();
    mostrarTotales();
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
                habilitarComponente("btnGuardarRol");
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
    }
}

calcularAporteEmpleado=function(sueldo){
    let aporte;
    aux=(sueldo*9.45)/100;
    aporte=aux.toFixed(2);
    return aporte;
}

calcularValorAPagar=function(sueldo,aporte,descuento){
    let sueldoTotal=(sueldo-aporte-descuento);
    return sueldoTotal;
}

calcularRol=function(){
    let aux_sueldo,sueldo;
    let aux_descuento,descuento;
    aux_sueldo = recuperarFloatDiv("infoSueldo");
    sueldo=aux_sueldo.toFixed(2);

    aux_descuento=recuperarFloat("txtDescuentos");
    descuento=aux_descuento.toFixed(2);

    if (descuento >= 0 && descuento <= sueldo){
        let aporte=calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS", aporte);
        let sueldoFinal=calcularValorAPagar(sueldo,aporte,descuento);
        mostrarTexto("infoPago", sueldoFinal);
        habilitarComponente("btnGuardarRol");
    }else{
        console.log("El descuento no puede ser mayor al sueldo");
    }

}



buscarRolEmpleado=function(cedula){
    let elementoRol;
    let rolEncontrado;
    for(let i=0;i<roles.length;i++){
        elementoRol=roles[i];
        if (elementoRol.cedula == cedula){
            rolEncontrado=elementoRol;
            return rolEncontrado;
        }
    }
    console.log("Sin datos");
    return null;
    
}
  

agregarRol=function(rol){
    let resultado;
    resultado=buscarRolEmpleado(roles.cedula);
    if(resultado==null){
        roles.push(rol);
        return true;
    }else{
        alert("YA EXISTE EL ROL DEL EMPLEADO" + empleado.cedula);
        return false;
    }
}



calcularAporteEmpleador=function(sueldo){
    let aporteEmpleador;
    aux=(sueldo*11.55)/100;
    aporteEmpleador=aux.toFixed(2);
    return aporteEmpleador;
}

guardarRol=function(){
    let error=false;
    let valorCedula=recuperarTextDiv("infoCedula");
    let valorNombre=recuperarTextDiv("infoNombre");
    let valorSueldo=recuperarFloatDiv("infoSueldo");
    let valorPago=recuperarFloatDiv("infoPago");
    let aporteEmpelador=calcularAporteEmpleador(valorSueldo);
    let aporteEmpleado=calcularAporteEmpleado(valorSueldo);

    let rol= {};
             rol.cedula=valorCedula;
             rol.nombre=valorNombre;
             rol.sueldo=valorSueldo;
             rol.pago=valorPago;
             rol.aporteEmpleador=aporteEmpelador;
             rol.aporteEmpleado=aporteEmpleado;
             console.log(rol);
    
    agregarRol(rol);


}

mostrarRoles=function(){
    let cmpTabla=document.getElementById("tablaResumen");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
   "<th>NOMBRE</th>"+
    "<th>VALOR A PAGAR</th>"+
    "<th>APORTE EMPLEADO</th>"+
    "<th>APORTE EMPLEADOR</th>"+
    "</tr>";
    let elementoRol;
    for(let i=0;i<roles.length;i++){
        elementoRol=roles[i];
        contenidoTabla+=
       "<tr>"
       +"<td>" + elementoRol.cedula + "</td>"
       +"<td>" + elementoRol.nombre + "</td>"
       +"<td>" + elementoRol.pago + "</td>"
       +"<td>" + elementoRol.aporteEmpleado + "</td>"
       +"<td>" + elementoRol.aporteEmpleador + "</td>"
       +"</tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarTotales=function(){
    let totalEmpleado=0;
    let totalEmpleador=0;
    let totalAPagar=0;
    let elementoRol;
    let auxEmpleado,auxEmpleador;
    let totalNomina;
    for(let i=0;i<roles.length;i++){
        elementoRol=roles[i];
        auxEmpleado=parseFloat(elementoRol.aporteEmpleado);
        totalEmpleado+=auxEmpleado;
        auxEmpleador=parseFloat(elementoRol.aporteEmpleador);
        totalEmpleador+=auxEmpleador;
        totalAPagar=totalEmpleado+totalEmpleador; 
    }
    totalNomina=totalEmpleado+totalEmpleador+totalAPagar;


    mostrarTexto("infoAporteEmpresa",totalEmpleador);
    mostrarTexto("infoAporteEmpleado",totalEmpleado);
    mostrarTexto("infoTotalPago",totalAPagar);
    mostrarTexto("infoNomina",totalNomina);
    
}




