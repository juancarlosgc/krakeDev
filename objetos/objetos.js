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