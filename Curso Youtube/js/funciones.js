
/*  -------------- Funciones ----------------*/

function uno(){
	var saludo = document.write("hola a todos");
	return saludo;
};

function dos(a,b){
	var datos = document.write("<br> mi nombre es: " + a + "<br> la hora es: " + b + "hrs");
	return datos;
}


uno();

hora = new Date();
dos("sebastian", hora.getHours() + ":" + hora.getMinutes());