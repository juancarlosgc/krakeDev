calcularPromedioNotas=function(){
    let n1,n2,n3, resultado;
    let cmpNota1,cmpNota2,cmpNota3,cmpImagen,cmpPromedio,cmpMensaje;
    cmpNota1=recuperarFlotante("txtNota1");
    n1 =parseFloat(cmpNota1);
    cmpNota2=recuperarFlotante("txtNota2");
    n2 =parseFloat(cmpNota2);
    cmpNota3=recuperarFlotante("txtNota3");
    n3 =parseFloat(cmpNota3);
    resultado= calcularPromedio(n1,n2,n3);
    cmpPromedio=document.getElementById("lblPromedio");
    cmpPromedio.innerText=resultado;
    if (resultado > 0 && resultado < 5){
        cmpImagen=document.getElementById("imgPromedio");
        cmpImagen.src="Fracaso.gif";
        cmpMensaje=document.getElementById("lblMensaje");
        cmpMensaje.innerText=("Reprobado");
    }else if (resultado >= 5 && resultado <= 8){
        cmpImagen=document.getElementById("imgPromedio");
        cmpImagen.src="Buen trabajo.gif";
        cmpMensaje=document.getElementById("lblMensaje");
        cmpMensaje.innerText=("BUEN TRABAJO");
    }else if (resultado > 8 && resultado <= 10){
        cmpImagen=document.getElementById("imgPromedio");
        cmpImagen.src="excelente.gif";
        cmpMensaje=document.getElementById("lblMensaje");
        cmpMensaje.innerText=("EXCELENTE");
    }else{
        cmpImagen=document.getElementById("imgPromedio");
        cmpImagen.src="error.gif";
        cmpMensaje=document.getElementById("lblMensaje");
        cmpMensaje.innerText=("DATOS INCORRECTOS");
    }

}