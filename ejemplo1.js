function mientras(){
	var nota, respuesta,veces=0, suma=0, promedio;
	while(veces<=3){
		nota= parseFloat(prompt("Ingrese la nota"));
		suma= suma+nota; 
		veces= veces+1;
	}
	promedio= suma/3;

	document.write("El promedio de la notas ingresadas es:"+ promedio)
}