import { getValueCard } from "./";

// Tur: 0 = First player, and the last will be the computer
/**
 * 
 * @param {number} turn 
 * @param {String} card 
 * @param {Array<number>} playersPoints 
 * @param {HTMLElement} smllPoints 
 * @returns 
 */
export const accumulatePoints = (turn, card, playersPoints, smllPoints) => {
    playersPoints[turn] += getValueCard(card);
    smllPoints[turn].innerText = playersPoints[turn];

    return playersPoints[turn];
}