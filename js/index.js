'use strict';

const dice = document.querySelector('.js_dice');
const inputBet = document.querySelector('.js_inputBet');
const btnPlay = document.querySelector('.js_btnPlay');
const textToPlayResult = document.querySelector('.js_textToPlayResult');
const credit = document.querySelector('.js_credit');

function aleatNumber () {
    
};

function getDiceUser () {
    const diceUser = dice.value;
    console.log(diceUser);
    //delete console.log
};

function getBetUser () {
    const betUser = inputBet.value;
    console.log(betUser);
    //delete console.log
};

function handlePlay (event) {
    event.preventDefault();
    getDiceUser();
    getBetUser();
};

btnPlay.addEventListener('click', handlePlay);

/* 
0. Escuchar el click -> btnPlay
1. Obtener la apuesta de la usuaria -del 1 al 6-
2. Obtener un número aleatorio
3. Obtener la cantidad de dinero apostado
3. Comparar num aleat y user bet
4. Mostrar resultado: gana o pierde según la comparación anterior
5. Actualizar saldo
*/