let clientes=[{cedula: "123", nombre: "Juan", edad: 30},
              {cedula: "456", nombre: "Carlos", edad: 40},
              {cedula: "789", nombre: "Noah", edad: 50},
            ];

mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
   "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+=
       "<tr>"
       +"<td>" + elementoCliente.cedula + "</td>"
       +"<td>" + elementoCliente.nombre + "</td>"
       +"<td>" + elementoCliente.edad + "</td>"
       +"</tr>"
    }

    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if (elementoCliente.cedula == cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

agregarCliente=function(cliente){
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    if(resultado==null){
        clientes.push(cliente);
        alert("Agregado");
        mostrarClientes();
    }else{
        alert("Ya existe" + cliente.cedula);
    }
}

crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let nuevoCliente= {};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    agregarCliente(nuevoCliente);
}

ejecutarBusqueda=function(){
    let valorCedula = recuperarTexto('txtCedulaBusqueda');
    let cliente=buscarCliente(valorCedula);
    if (cliente==null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
    }
}

modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if (clienteEncontrado != null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;

    }
}

guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");

    let datosCliente= {};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;

    modificarCliente(datosCliente);
    mostrarClientes();
}


