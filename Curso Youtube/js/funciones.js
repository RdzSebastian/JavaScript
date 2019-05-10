
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

//------------- Rest -----------------

function UsoArray(...meses){
	for(let uno of meses){
		document.write(uno + "<br>");
	}
};

//UsoArray("Enero", "Febrero", "Marzo");

//------------ Spread ----------------

function UsoArray2(nombre, precio){
	return "Nombre: " + nombre + "<br>Precio: " + precio;
}

/*
var juguete = ["Autito", 25];
document.write( UsoArray2(...juguete));
*/

// ---------- Funciones anónimas ------

var siete = function(){ 
	respuesta = "Hola a todos";
	return respuesta;
};

//document.write(siete());


// ---------------- CALL BACK----------

var a = function(nombre, uno) { var e=nombre; uno(e); }
var b = function(i){document.write(i); };

//a("Seba",b);


//------------------ ARROW -----------------


var dos = (nombre, apellido) => nombre + apellido;

document.write(dos("Seba", "Rodriguez"));