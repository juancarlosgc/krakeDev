calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)){
        alert("Introduce una nota válida.");
    }
    nota2 = recuperarFloat("txtNota2");
	nota3 = recuperarFloat("txtNota3");
    resultado = calcularPromedio(nota1, nota2, nota3);
    resultadoFormato = resultado.toFixed(2);
    mostrarTexto("lblResultado", resultadoFormato);
}

calcular1=function(){
    let nota1,nota2,nota3;
    let resultado;
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
	nota3 = recuperarFloat("txtNota3");
    
    if (isNaN(nota1)==true || isNaN(nota2)==true isNaN(nota3)==true){

    }
    resultado = calcularPromedio(nota1, nota2, nota3);
    resultadoFormato = resultado.toFixed(2);
    mostrarTexto("lblResultado", resultadoFormato);
 
}
