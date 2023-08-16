calcularPromedioNotas=function(){
    let n1,n2,n3, resultado;
    let cmpNota1,cmpNota2,cmpNota3,cmpImagen,cmpPromedio;
    cmpNota1=recuperarFlotante("txtNota1");
    n1 =parseFloat(cmpNota1);
    cmpNota2=recuperarFlotante("txtNota2");
    n2 =parseFloat(cmpNota2);
    cmpNota3=recuperarFlotante("txtNota3");
    n3 =parseFloat(cmpNota3);
    resultado= calcularPromedio(n1,n2,n3);
    cmpPromedio=document.getElementById("lblPromedio");
    cmpPromedio.innerText=resultado;
    if (resultado > 7){
        cmpImagen=document.getElementById("imgPromedio");
        cmpImagen.src="Exito.gif";
    }else{
        cmpImagen=document.getElementById("imgPromedio");
        cmpImagen.src="Fracaso.gif";
    }

}