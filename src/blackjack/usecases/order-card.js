/**
 * 
 * @param {Array<String>} deck 
 * @returns {String}
 */
export const orderCard = (deck) => {

    if (deck.length === 0) {
        throw new Error("There aren't cards in the deck");
    }

    return deck.pop();;
}