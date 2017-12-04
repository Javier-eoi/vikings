
function Viking(name,health,strength)
{
	this.name = name;
	this.health = health;
	this.strength = strength;
}

function Pit(viking1, viking2, turns) {
	this.viking1 = viking1;
	this.viking2 = viking2;
	this.turns = turns;
}

Viking.prototype.hit = function(enemy){
	var hitDamage = this.strength;
	enemy.health -= hitDamage;
}

Pit.prototype.fight = function(){
	var minHealth = 7;
	while (this.turns > 0 && this.viking1.health > minHealth && this.viking2.health > minHealth) {
		this.viking1.hit(this.viking2);
		this.viking2.hit(this.viking1);
		this.turns--;
	}
	this.winner = this.viking1.health > this.viking2.health ? this.viking1 : this.viking2;
}
Pit.prototype.showWinner = function() {
	console.log("And the winner is " + this.winner.name);
}

var v1 = new Viking("Juan",90,10);
var v2 = new Viking("Pedro",90,10);
var pit = new Pit(v1,v2,8)



 


/*
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
		indexViking = 	randomIntFromInterval(0, vikings.length-1);
		indexSaxon = 	randomIntFromInterval(0, saxons.length-1);

	if (vikings[indexJugador1].health <= vikings[indexJugador2].strength )
	{
		fin = true;
	} else
	{
	 vikings[indexJugador1].health -= vikings[indexJugador2].strength;
	 vikings[indexJugador1].warcry();
		console.log(vikings[indexJugador1].name + " ha pegado a " + vikings[indexJugador2].name);
	}
}

for(var index in vikings)
{
	console.log("Vida de: " + vikings[index].name + " : " + vikings[index].health);
}


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
*/
