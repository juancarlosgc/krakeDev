calcularPromedioNotas=function(){
    let n1,n2,n3;
    let cmpNota1,cmpNota2,cmpNota3;
    cmpNota1=recuperarFlotante("txtNota1");
    n1 =parseFloat(cmpNota1);
    cmpNota2=recuperarFlotante("txtNota2");
    n2 =parseFloat(cmpNota2);
    cmpNota3=recuperarFlotante("txtNota3");
    n3 =parseFloat(cmpNota3);
    calcularPromedio(n1,n2,n3);
}