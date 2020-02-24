/*
GAME RULES:

- El juego tiene 2 jugadores, jugando en rondas.
- En cada turno, un jugador tira un dado tantas veces como lo desee. Cada resultado se agrega a su puntaje REDONDO
- PERO, si el jugador saca un 1, toda su puntuación REDONDA se pierde. Después de eso, es el turno del siguiente jugador
- El jugador puede elegir 'Hold', lo que significa que su puntaje REDONDO se agrega a su puntaje GLOBAL. Después de eso, es el turno del siguiente jugador
- El primer jugador en alcanzar 100 puntos en el puntaje GLOBAL gana el juego

*/

var scores, roundScore, activePlayer;

init();

//Vamos a crear los dados...
//dice = Math.floor(Math.random() * 6) + 1; //esto me dara un numero entre el 1 al 6
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice; //(((Con est metodo se cargaria l numero normal)))
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //con este metodo el numero lo cargamos en cursiva desde el javascript al HTML


//Ahora creamos una variable y le almacenamos un digito del HTML hasta aqui.
//var x = document.querySelector('#score-0').textContent;


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
        nextPlayer();
    }
});



document.querySelector('.btn-hold').addEventListener("click", function (){

        //1-Agregar la calificaciones actual a la calificacion global 
        scores[activePlayer] += roundScore;
        //scores[activePlayer] = scores[activePlayer] + roundScore; *Esto es lo mismo que lo de arriba*


        //2-Actualizar laintefaz del usuario
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //3-Verificar si el jugador gano el juego
        if(scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = "Ganador!"
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner'); //winner es un clase del archivo CSS que se agrga
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active'); //se elimina la clase active 

        }else{
        //4- siguinte jugador
        nextPlayer();
        }
});

function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
      //  if(activePlayer === 0){
      //      activePlayer = 1;           ESTO ES LO MISMO QUE LO DE ARRIBA
      //  }else{
      //      activePlayer = 0;
      //  }
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active'); //aqui utilizaamos el toggle que es alternar, pasa el fecto una y otra vez
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active'); *Linea 14 del index, remueve la clase active.
        //document.querySelector('.player-1-panel').classList.add('active');    *Linea 23 del index, agrega la clase active.
        //La clase active sirve para darle color cuando sea el turno de un jugador y el puntito rojo en el truno del jugador, quitaar y poner.

        document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none'; //oculto la imagen del dado cuando cargo la imagen...

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    ddocument.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



