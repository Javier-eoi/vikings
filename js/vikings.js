var limit = 10;

var Viking = function(name,health,strength)
{
	this.name = name;
	this.health = health;
	this.strength = strength;
};

var juan = new Viking("Juan",50,9);
var pedro = new Viking("Pedro",50,5);
var raul = new Viking("Raul",50,5);
var ruben = new Viking("Ruben",50,5);
var javi = new Viking("Javi",50,5);
var jugadores = [juan,pedro,raul,ruben,javi];
var indexJugador1;
var indexJugador2;
var fin = false;

for(var i = 1;i <= limit && !fin;i++)
{	

	do{
		indexJugador1 = randomIntFromInterval(0,jugadores.length-1);
		indexJugador2 = randomIntFromInterval(0,jugadores.length-1);
	}while(indexJugador1 === indexJugador2)

	if(jugadores[indexJugador1].health <= jugadores[indexJugador2].strength)
	{
		fin = true;
	}else
	{
		jugadores[indexJugador1].health -= jugadores[indexJugador2].strength;
		console.log(jugadores[indexJugador1].name+" ha pegado a "+jugadores[indexJugador2].name);
	}
}

for(var index in jugadores)
{
	console.log("Vida de: "+jugadores[index].name+" : "+jugadores[index].health);
}


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}