function aleatorio (minimo, maximo) {
	var numero = Math.floor(Math.random() *  (maximo - minimo + 1) + minimo );
return numero;
}
function NumeroConvert(){
	var OpcionMas;
	if (OpcionUsuario == "Piedra"){
		var OpcionMas = 0;
	}
	else if (OpcionUsuario == "Papel"){
		var OpcionMas = 1;
	}
	else if (OpcionUsuario == "Tijeras"){
		var OpcionMas = 2;
	}
	else if (OpcionUsuario == "Lagarto"){
		var OpcionMas = 3;
	}
	else if (OpcionUsuario == "Spock"){
		var OpcionMas = 4;
	}
return OpcionMas;
}
var OpcionMaquina = aleatorio(0,4);
var OpcionUsuario; 
var Opcion = [" Piedra", " Papel", " Tijeras" , " Lagarto" ," Spock"];
OpcionUsuario = prompt("Que Escojes:"+ "\n"+ "Piedra " + "Papel "+ "Tijeras "+ "Lagarto "+ "Spock", "Spock");
OpcionFinal = NumeroConvert();
alert("Maquina eligio " + Opcion[OpcionMaquina]);
if (OpcionMaquina == OpcionFinal) 
	{
	alert("Empate");
	}
else if (OpcionMaquina > OpcionFinal) 
	{
	if (OpcionMaquina == 1 && OpcionFinal == 0 || OpcionMaquina == 2 && OpcionFinal == 1 ||
		 OpcionMaquina == 3 && OpcionFinal == 1 || OpcionMaquina == 4 && OpcionFinal == 0 ||
		 OpcionMaquina == 4 && OpcionFinal == 2)
			{
				alert("Perdiste");
			}
 	else {alert("Ganaste");}
	}
else if (OpcionMaquina < OpcionFinal) 
	{
		if (OpcionMaquina == 0 && OpcionFinal == 1 || OpcionMaquina == 0 && OpcionFinal == 4 ||
		 OpcionMaquina == 1 && OpcionFinal == 2 || OpcionMaquina == 1 && OpcionFinal == 3 ||
		 OpcionMaquina ==2 && OpcionFinal == 4 )
			{
				alert("Ganaste");
			}

		else{alert("Perdiste");}
	}

