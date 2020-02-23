/*
GAME RULES:

- El juego tiene 2 jugadores, jugando en rondas.
- En cada turno, un jugador tira un dado tantas veces como lo desee. Cada resultado se agrega a su puntaje REDONDO
- PERO, si el jugador saca un 1, toda su puntuación REDONDA se pierde. Después de eso, es el turno del siguiente jugador
- El jugador puede elegir 'Hold', lo que significa que su puntaje REDONDO se agrega a su puntaje GLOBAL. Después de eso, es el turno del siguiente jugador
- El primer jugador en alcanzar 100 puntos en el puntaje GLOBAL gana el juego

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

//Vamos a crear los dados...
//dice = Math.floor(Math.random() * 6) + 1; //esto me dara un numero entre el 1 al 6
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice; //(((Con est metodo se cargaria l numero normal)))
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //con este metodo el numero lo cargamos en cursiva desde el javascript al HTML


//Ahora creamos una variable y le almacenamos un digito del HTML hasta aqui.
//var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none'; //oculto la imagen del dado cuando cargo la imagen...

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//function btn(){
// *AQUI PODEMOS PONER LA FUNCION Y LUEGO LLAMARLA DENTRO DEL EVENTO PERO COMO SOLO 
// LA USAMOS UNA VEZ LA ESCRIBIMOS DENTRO DEL EVENTO*
//}

document.querySelector('.btn-roll').addEventListener('click', function (){
    //*Cuando presionemos el boton*
    //1.Necesitamos un numero random
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.Necesitamos mostrar el resultado
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3.Actualizar la puntucion de la ronda, pero solo si el numero del dado no es 1.
    if(dice !== 1){//diferente
        //agregar puntaje
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //siguiente jugador
    }
});




