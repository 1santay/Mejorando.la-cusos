function aleatorio (minimo, maximo) {
	var numero = Math.floor(Math.random() *  (maximo - minimo + 1) + minimo );
	return numero;}
var opcionUsuario;
var opcionMaquina = aleatorio(0,2);
var Opcion = [" Tijeras", " Papel", " Piedra"];
opcionUsuario = prompt("Que usas"+ "\n"+ "Piedra = 2" + "\n" + "Papel = 1"+ "\n" + "tijeras = 0", 0);
alert("Maquina eligio " + Opcion[opcionMaquina]);
if ((parseInt(opcionUsuario)) == opcionMaquina) 
{alert("Empate");}
else if ((parseInt(opcionUsuario)) < opcionMaquina) 
{
	if (opcionMaquina == 2 && (parseInt(opcionUsuario) == 0)){alert("Perdiste");}
	else{alert("Ganaste");}
}
else if ((parseInt(opcionUsuario)) > opcionMaquina)
{
	if (opcionMaquina == 0 && (parseInt(opcionUsuario) == 2))
	{alert("Ganaste");}
	else{alert("Perdiste");}
}
else 
{alert("Opcion incorrecta");}
