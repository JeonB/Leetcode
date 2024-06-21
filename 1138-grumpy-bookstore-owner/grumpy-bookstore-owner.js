/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
function maxSatisfied(customers, grumpy, minutes) {
    let totalSatisfied = 0;
    let maxIncrease = 0;
    let currentIncrease = 0;

    // Step 1: Calculate the initial satisfied customers
    for (let i = 0; i < customers.length; i++) {
        if (!grumpy[i]) {
            totalSatisfied += customers[i];
        }
    }

    // Step 2: Calculate the potential increase in satisfied customers
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i]) {
            currentIncrease += customers[i];
        }
        if (i >= minutes && grumpy[i - minutes]) {
            currentIncrease -= customers[i - minutes];
        }
        maxIncrease = Math.max(maxIncrease, currentIncrease);
    }

    return totalSatisfied + maxIncrease;
}
