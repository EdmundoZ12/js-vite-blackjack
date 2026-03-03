
/**
 * 
 * @param {number} turn 
 * @param {String} card 
 * @param {Array<HTMLElement>} divCardsPlayers 
 */
export const createCard = (turn, card, divCardsPlayers) => {
    //   <!-- <img class="carta" src="assets/cartas/10D.png" /> -->
    const imgCardHtml = document.createElement('img');
    imgCardHtml.src = `assets/cartas/${card}.png`;
    imgCardHtml.classList.add('carta');
    divCardsPlayers[turn].append(imgCardHtml);
}