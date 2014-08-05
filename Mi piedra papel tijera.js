function aleatorio (minimo, maximo) {
	var numero = Math.floor(Math.random() *  (maximo - minimo + 1) + minimo );
	return numero;
}
var piedra= 0;
var papel= 1;
var tijeras= 2;
var opcionUsuario;
var opcionMaquina = aleatorio(0,2);
var Opcion = [" Piedra", " Papel", " Tijera"];
opcionUsuario = prompt("Que usas"+ "\n"+ "Piedra = 0" + "\n" + "Papel = 1"+ "\n" + "tijeras = 2", 0);

if (opcionUsuario == piedra && opcionMaquina == piedra ) 
{
	alert("Maquina uso" + Opcion[opcionMaquina]);
alert("Empate");
}
else if (opcionUsuario == piedra && opcionMaquina == papel ) {
	alert("Maquina uso" + Opcion[opcionMaquina]);
alert("Perdiste");
}
else if(opcionUsuario == piedra && opcionMaquina == tijeras ) {
	alert("Maquina uso" + Opcion[opcionMaquina]);
alert("Ganaste");
}
else if(opcionUsuario == papel  && opcionMaquina == papel) {
	alert("Maquina uso" + Opcion[opcionMaquina]);
alert("Empate");
}
else if(opcionUsuario == papel  && opcionMaquina == tijeras ) {
	alert("Maquina uso" + Opcion[opcionMaquina]);
alert("Perdiste");
}
else if(opcionUsuario == papel  && opcionMaquina == piedra) {
	alert("Maquina uso" + Opcion[opcionMaquina]);
alert("Ganaste");
}
else if(opcionUsuario == tijeras  && opcionMaquina == tijeras ) {
	alert("Maquina uso" + Opcion[opcionMaquina]);
alert("Empate");
}
else if(opcionUsuario == tijeras  && opcionMaquina == piedra) {
	alert("Maquina uso" + Opcion[opcionMaquina]);
alert("Perdiste");
}
else if(opcionUsuario == tijeras  && opcionMaquina == papel) {
	alert("Maquina uso" + Opcion[opcionMaquina]);
alert("Ganaste");
}
else{
alert("Opcion no valida");
}
// clase
// Primer Ejemplo
var edad = 17;
var apellido = "Lopez";
var nombre = "Luis";
alert(nombre + " " + apellido + "\n" + edad + "años");

// segundo Ejemplo
var peso;
var respuesta;
var pesoEnMarte;
alert("Quieres saber tu peso en marte?");
respuesta = prompt("","si / no");
if (respuesta == "si") {alert("genial") };
peso = prompt("Cual es tu peso?", "60");
pesoEnMarte = (peso/9.81)*(3.711)
alert("Tu peso en Marte es" +" "+ pesoEnMarte);

