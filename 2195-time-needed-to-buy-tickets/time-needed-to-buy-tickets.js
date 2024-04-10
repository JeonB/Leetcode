/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  
    let timeToBuyTicket = 0;
    let pointer = 0;
    while(tickets[k] > 0){
        if(tickets[pointer] > 0){
            tickets[pointer] += -1;
            timeToBuyTicket++;
        }
        pointer++;
        if(pointer > tickets.length){
            pointer = 0;
        }

    }

    return timeToBuyTicket;
};