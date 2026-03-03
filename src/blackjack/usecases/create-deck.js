import _ from "underscore";

export const myName = 'Edmundo';


/**
 * This function create a new deck
 * @param {Array<string>} kindCards 
 * @param {Array<string>} specialCards 
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */

export const createDeck = (kindCards, specialCards) => {

    if (!kindCards && kindCards.lenght > 0) throw new Error('Type of letters is mandatory!!');
    if (!specialCards && specialCards.lenght > 0) throw new Error('Special letters is mandatory!!');


    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let kind of kindCards) {
            deck.push(i + kind);
        }
    }

    for (let kind of kindCards) {
        for (let special of specialCards) {
            deck.push(special + kind);
        }
    }

    return _.shuffle(deck);
}

// export default createDeck;
