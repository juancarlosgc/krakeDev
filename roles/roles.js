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


