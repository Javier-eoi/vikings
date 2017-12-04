var indexJugador1;
var indexJugador2;
var limit = 10;

var Viking = function(name,health,strength)
{
	this.name = name;
	this.health = health;
	this.strength = strength;
	this.warcry = function(){
		console.log("Huh");
	}
};

var Saxon = function(health,strength)
{
	this.health = health;
	this.strength = strength;
};

var saxon = new Saxon( randomIntFromInterval(6,20), randomIntFromInterval(1,3) )

var juan = new Viking("Juan",50,9);
var pedro = new Viking("Pedro",50,5);
var raul = new Viking("Raul",50,5);
var ruben = new Viking("Ruben",50,5);
var javi = new Viking("Javi",50,5);
var vikings = [juan,pedro,raul,ruben,javi];
var saxons = [saxon]


var fin = false;

for(var i = 1;i <= limit && !fin;i++)
{	
		indexViking = 	randomIntFromInterval(0 vikings.length-1);
		indexSaxon = 	randomIntFromInterval(0 saxons.length-1);

	if (vikings[indexJugador1].health <= vikings[indexJugador2].strength )
	{
		fin = true;
	} else
	{
	 vikings[indexJugador1].health -= vikings[indexJugador2].strength;
	 vikings[indexJugador1].warcry();
		console.log(vikings[indexJugador1].name+" ha pegado a " vikings[indexJugador2].name);
	}
}

for(var index in vikings)
{
	console.log("Vida de: " vikings[index].name+" : " vikings[index].health);
}


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


