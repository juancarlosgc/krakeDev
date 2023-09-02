probarAtributos=function(){
    let persona={
        nombre : "Juan",
        apellido : "Grijalva",
        edad : 24,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.apellido);
    if (persona.estaVivo==false){
        console.log("No esta vivo");
    }else{
        console.log("Esta vivo");
    }
}

crearProducto=function(){
    let producto1={
        nombre : "Laptop",
        precio : 500.5,
        stock : 100
    }

    let producto2={
        nombre : "Celular",
        precio : 900.56,
        stock : 50
    }

    console.log(producto1.nombre);
    console.log(producto2.nombre);
    if (producto1.stock > producto2.stock ){
        console.log("Producto 1 tiene mayor stock");
    }else if(producto1.stock < producto2.stock ){
        console.log("Producto 2 tiene mayor stock");
    }else{
        console.log("Ambos productos tienen mismo stock");
    }
}

crearCliente= function(){
    let cliente = {
        cedula: "171292",
        nombre: "Juan"
    }
    let cliente1={};
    cliente1.nombre="Carlos";
    cliente1.apellido="Grijalva";
    cliente1.cedula="123456";
}

probarIncrementoSaldo=function(){
    let cta={
        numero: "123456",
        saldo: 500.25
    }
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
}

probarDeterminarMayor=function(){
    let mayor;
    let per1={nombre: "Juan" , edad: 40}
    let per2={nombre: "carlos" , edad: 40}
    mayor=determinarMayor(per1,per2);
    if (mayor!=null){
        console.log("El mayor es: " + mayor.nombre);
    }
}

incrementarSaldo=function(cuenta,monto){
    
    cuenta.saldo+=monto;

}

determinarMayor=function(persona1,persona2){
    if (persona1.edad>persona2.edad){
        return persona1;
    }else if(persona1.edad<persona2.edad){
        return persona2;
    }else{
        return null;
    }
}

