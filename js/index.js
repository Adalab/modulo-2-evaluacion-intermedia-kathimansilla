'use strict';

const dice = document.querySelector('.js_dice');
const inputBet = document.querySelector('.js_inputBet');
const btnPlay = document.querySelector('.js_btnPlay');
const textToPlayResult = document.querySelector('.js_textToPlayResult');
const credit = document.querySelector('.js_credit');

//prueba
let currentCredit = 50;
console.log(currentCredit);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

function getDiceUser () {
    const diceUser = dice.value;
    return parseInt(diceUser);
    console.log(diceUser);
    //delete console.log
};

function getBetUser () {
    const betUser = inputBet.value;
    return parseInt(betUser);
    console.log(betUser);
    //delete console.log
};

function compareNumbers () {
    let randomNumber = getRandomNumber(6);
    console.log('Este es el randomNumber: ' + randomNumber);
    let diceUser = getDiceUser();
    let betUser = getBetUser();
    //delete console.log
    console.log(randomNumber, diceUser, betUser);
    if (randomNumber === diceUser) {
        currentCredit = currentCredit + (betUser * 2);
        credit.innerHTML = `Saldo ${currentCredit}`;
        textToPlayResult.innerHTML = 'Has ganado el doble de lo apostado :)';
    }
    else {
        currentCredit = currentCredit - betUser;
        credit.innerHTML = `Saldo ${currentCredit}`;
        textToPlayResult.innerHTML = 'Has perdido lo apostado :(';
    }
};


function handlePlay (event) {
    event.preventDefault();
    compareNumbers();
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