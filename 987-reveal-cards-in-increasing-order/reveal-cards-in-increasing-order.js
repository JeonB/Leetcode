/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const deckSize = deck.length;
    const queue = [];
    const res = [];

    deck.sort((a,b) => a-b);
    
    for(let i = 0; i<deckSize; i++) queue.push(i);
    for(let i = 0; i<deckSize; i++){
        res[queue.shift()] = deck[i];
        queue.push(queue.shift());
    }

    return res;
};