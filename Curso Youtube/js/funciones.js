
/*  -------------- Funciones ----------------*/

function uno(){
	var saludo = document.write("hola a todos");
	return saludo;
};

//uno(); 

function dos(a,b){
	var datos = document.write("<br> mi nombre es: " + a + "<br> la hora es: " + b + "hrs");
	return datos;
}

/*
hora = new Date();
dos("sebastian", hora.getHours() + ":" + hora.getMinutes());
*/

function existencia(nombre, apellido){
	if(nombre != null && apellido != null){
		respuesta = document.write(nombre + " ", apellido);
	}else{
		respuesta = document.write("No puso sus datos completos");
	};
	return respuesta;
}


// existencia("Sebastian", "Rodriguez");

function UsoArray(...meses){
	for(let uno of meses){
		document.write(uno + "<br>");
	}
};

//UsoArray("Enero", "Febrero", "Marzo");

function UsoArray2(nombre, precio){
	return "Nombre: " + nombre + "<br>Precio: " + precio;
}

/*
var juguete = ["Autito", 25];
document.write( UsoArray2(...juguete));
*/

var siete = function(){ 
	respuesta = "Hola a todos";
	return respuesta;
};

document.write(siete());