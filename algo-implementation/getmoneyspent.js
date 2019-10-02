function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */

    var best = -1

    keyboards.sort((a, b) => b - a)
    drives.sort((a, b) => a - b)

    for (var i = 0; i < keyboards.length; i ++) {
        for (var j = 0; j < drives.length; j ++) {
            var combined = keyboards[i] + drives[j]
            if (combined > b[0]) { 
                break 
            } else {
                best = combined
            }
        }
    }
    return best
}

console.log(getMoneySpent([3, 1], [5, 2, 8], [10, 2, 3]))
