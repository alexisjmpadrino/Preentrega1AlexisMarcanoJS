//PREENTREGA1
/*Se presenta actividad, donde el profesor debe ingresar la nota del respectivo lapso que tiene un valor de 3.5, para ser un total de 10 puntos
 la nota registrada deberia estar comprendida entre 0 y 3.5 dependiento del lapso, al final se sumara e indicara el nivel aprobado.*/


let notaPrimerLapso = 3.5;
let notaSegundoLapso = 3.5;
let notaTercerLapso = 3;

alert("BIENVENIDO AL SISTEMA DE CALIFICACIONES ELECTRÓNICO");
let cargarNota = confirm("¿Desea cargar calificaciones?");
if (cargarNota == true){
    let nombreAlumano = prompt("Ingresar nombre y apellido del alumno");
    let seccionClases = prompt("Indique su seccion de aula: A o B").toLowerCase();

do{
    notaPrimerLapso = parseFloat(prompt("Ingrese calificación PRIMER lapso: Valor entre 0 y 3.5 puntos"));
    if ((notaPrimerLapso <0) || (notaPrimerLapso >3.5) || isNaN(notaPrimerLapso)){
        alert("Coloque un dato válido");
    }else{
        confirmacion = confirm("El valor ingresado es el siguiente " + notaPrimerLapso +  ". Si desea continuar presione ACEPTAR, si desea volver presione CANCELAR");
        if (confirmacion == false){
            notaPrimerLapso = 40;   
        }
    }
}while (notaPrimerLapso <0 || notaPrimerLapso >3.5 || isNaN(notaPrimerLapso));


do{
    notaSegundoLapso = parseFloat(prompt("Ingrese calificación SEGUNDO lapso: Valor entre 0 y 3.5 puntos"));
    if ((notaSegundoLapso <0) || (notaSegundoLapso >3.5) || isNaN(notaSegundoLapso)){
        alert("Coloque un dato válido");
    }else{
        confirmacion = confirm("El valor ingresado es el siguiente " + notaSegundoLapso +  ". Si desea continuar presione ACEPTAR, si desea volver presione CANCELAR");
        if (confirmacion == false){
            notaSegundoLapso = 40;   
        }
    }
}while (notaSegundoLapso <0 || notaSegundoLapso >3.5 || isNaN(notaSegundoLapso));

do{
    notaTercerLapso = parseFloat(prompt("Ingrese calificación TERCER lapso: Valor entre 0 y 3 puntos"));
    if ((notaTercerLapso <0) || (notaTercerLapso >3.5) || isNaN(notaTercerLapso)){
        alert("Coloque un dato válido");
    }else{
        confirmacion = confirm("El valor ingresado es el siguiente " + notaTercerLapso +  ". Si desea continuar presione ACEPTAR, si desea volver presione CANCELAR");
        if (confirmacion == false){
            notaTercerLapso = 40;   
        }
    }
}while (notaTercerLapso <0 || notaTercerLapso >3.5 || isNaN(notaTercerLapso));


let notaFinal = (notaTercerLapso + notaSegundoLapso + notaTercerLapso);
alert ("Su calificacion final es:" + " " + notaFinal + " " + "puntos");

if (seccionClases ==
     "A");

if((notaFinal >0) && (notaFinal <=3)){
    alert ("Su calificación es (Muy Deficiente)"); 
}
else if((notaFinal >3) && (notaFinal <=5)){ 
    alert ("Su calificación es (Insuficiente)"); 
}
else if((notaFinal >5) && (notaFinal <=7)){
    alert ("Su calificación es (Suficiente)");
}
else if((notaFinal >7) && (notaFinal <=9)){ 
    alert ("Su calificación es (Notable)"); 
}
else if((notaFinal >9) && (notaFinal <=10)){
    alert ("Su calificación es (Sobresaliente)"); 
}
else{
    alert("Calificación erronea");
} 

alert("Sus datos han sido cargados correctamente, presiona ACEPTAR para salir.");

}else{
    alert("Sus datos NO han sido cargados correctamente, presiona ACEPTAR para salir.");
}
















