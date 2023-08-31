let notas=[];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

agregarNota=function(nota){
    notas.push(nota);
}

probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

recorrerArreglo=function(){
    let notaR;
    for (let i=0;i<notas.length;i++){
        notaR=notas[i];
        console.log(notaR);
    }
}

calcularPromedio=function(){
    let sumaNotas=0;
    let promedio;
    for (let i=0;i<notas.length;i++){
        sumaNotas+=notas[i];
    }
    promedio=sumaNotas/notas.length;
    return promedio;
}

ejecutarPromedio=function(){
    let promedio,aux;
    aux=calcularPromedio();
    promedio=aux.toFixed(2);
    mostrarTexto("lblPromedio", promedio);
}