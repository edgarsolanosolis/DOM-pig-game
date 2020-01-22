/*
GAME RULES:

- El juego tiene 2 jugadores, jugando en rondas.
- En cada turno, un jugador tira un dado tantas veces como lo desee. Cada resultado se agrega a su puntaje REDONDO
- PERO, si el jugador saca un 1, toda su puntuación REDONDA se pierde. Después de eso, es el turno del siguiente jugador
- El jugador puede elegir 'Hold', lo que significa que su puntaje REDONDO se agrega a su puntaje GLBAL. Después de eso, es el turno del siguiente jugador
- El primer jugador en alcanzar 100 puntos en el puntaje GLOBAL gana el juego

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

//Vamos a crear los dados...
dice = Math.floor(Math.random() * 7); //esto me dara un numero entre el 0 al 6
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice; (((Con est metodo se cargaria l numero normal)))
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //con este metodo el numero lo cargamos en cursiva desde el javascript al HTML


//Ahora creamos una variable y le almacenamos un digito del HTML hasta aqui.
var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none'; //oculto la imagen del dado cuando cargo la imagen...







