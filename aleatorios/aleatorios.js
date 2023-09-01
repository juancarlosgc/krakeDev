
let aleatorios=[];
obtenerAleatorio=function(){
    let aleatorio,aux,aleatorioEntero,valor;
    aleatorio = Math.random();
    aux = aleatorio*100;
    aleatorioEntero=parseInt(aux);
    valor = aleatorioEntero+1;
    return valor;
}

generarAleatorios=function(){

    let numero,aux;
    numero=recuperarInt("txtNumero"); 
    if (numero >= 5 && numero <=20 ){
        for (let i=0;i<numero;i++){
            //console.log(i);
            aux=obtenerAleatorio();
            aleatorios[i]=aux;
        }
        mostrarResultados(numero);
    }

}

mostrarResultados=function(arregloNumeros){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>NUMEROS</th></tr>";
    let miNumero;
    for (let i=0;i<arregloNumeros;i++){
        miNumero=aleatorios[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNumero;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}