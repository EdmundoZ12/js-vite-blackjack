import _ from 'underscore';
import { createDeck, orderCard, createCard, computerTime, accumulatePoints } from './usecases'

// import createDeck, { myName } from "./usecases/create-deck"; // export default
// import { createDeck as createNewDeck } from "./usecases/create-deck";
// console.log(myName);


/**
 * 2C = Two of Clubs ( Treboles )
 * 2D = Two of Diamonds ( Diamantes )
 * 2H = Two of Hearts ( Corazones )
 * 2S = Two of Spades ( Espadas )
 */

let deck = []; // deck = baraja
const kinds = ['C', 'D', 'H', 'S'],
    specials = ['J', 'Q', 'K', 'A'];

let playersPoints = [];

// HTML References
const btnOrder = document.querySelector('#btn-order'),
    btnStop = document.querySelector('#btn-stop'),
    btnNewGame = document.querySelector('#btn-new');

const divCardsPlayers = document.querySelectorAll('.div-cards');
const smllPoints = document.querySelectorAll('small');


deck = createDeck(kinds, specials);

// This function start the game
const startGame = (numOfPlayers = 2) => {
    deck = createDeck(kinds, specials);
    playersPoints = [];

    for (let i = 0; i < numOfPlayers; i++) {
        playersPoints.push(0);
    }

    smllPoints.forEach((elem) => elem.innerText = 0);
    divCardsPlayers.forEach((elem) => elem.innerHTML = '');

    btnOrder.disabled = false;
    btnStop.disabled = false;

};

// Events
// Player Time
btnOrder.addEventListener('click', () => {
    const card = orderCard(deck);
    const playerPoints = accumulatePoints(0, card, playersPoints, smllPoints);
    createCard(0, card, divCardsPlayers);

    if (playerPoints > 21) {
        console.warn('YOU LOST!!');
        btnOrder.disabled = true;
        btnStop.disabled = true;
        computerTime(playerPoints, playersPoints, divCardsPlayers, smllPoints, deck);

    } else if (playerPoints === 21) {
        console.warn('You Win!!');
        btnOrder.disabled = true;
        btnStop.disabled = true;
        computerTime(playerPoints, playersPoints, divCardsPlayers, smllPoints, deck);

    }

})

btnStop.addEventListener('click', () => {
    btnOrder.disabled = true;
    btnStop.disabled = true;

    computerTime(playersPoints[0], playersPoints, divCardsPlayers, smllPoints, deck);

});

btnNewGame.addEventListener('click', () => {

    console.clear();
    startGame();

});




