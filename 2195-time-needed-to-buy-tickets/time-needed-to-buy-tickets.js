/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  
    let timeToBuyTicket = tickets[k];
    let ans = 0;
    
    while(timeToBuyTicket > 0){
        for(let i = 0; i< tickets.length ; i++){
            if(tickets[i] > 0){
                tickets[i]--;
                ans++;
            }
            if(i === k && tickets[i] === 0)
                break;
        }
        timeToBuyTicket--;
    }

    return ans;
};