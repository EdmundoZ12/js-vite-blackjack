import { orderCard, createCard, accumulatePoints } from "./";

// Computer Time
/**
 * 
 * @param {number} minPoints 
 * @param {Array<string>} deck 
 * @param {Array<Number>} playersPoints
 */
export const computerTime = (minPoints, playersPoints, divCardsPlayers, smllPoints, deck = []) => {

    if (!minPoints) throw new Error("The minimum points are required!!");

    let computerPoints = 0;

    do {
        const card = orderCard(deck);
        computerPoints = accumulatePoints(playersPoints.length - 1, card, playersPoints, smllPoints);
        createCard(playersPoints.length - 1, card, divCardsPlayers);

    } while ((computerPoints < minPoints) && (minPoints <= 21));

    determineWinner(playersPoints);

}

const determineWinner = (playersPoints) => {

    const [minPoints, computerPoints] = playersPoints;

    setTimeout(() => {
        if (minPoints === computerPoints) {
            alert('Nobody Wins!! :(');
        } else if (minPoints > 21) {
            alert('Computer Wins!!');
        } else if (computerPoints > 21) {
            alert('Player Wins!! :)');
        } else {
            alert('Computer Wins!!');
        }
    }, 100);
}


