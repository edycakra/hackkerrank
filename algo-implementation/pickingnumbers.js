function pickingNumbers(a) {
    // Write your code here
    return a.reduce((count,val) => {
        // count occurance of each number
        count[val]++
        return count;
    }, new Array(100).fill(0))
        .reduce((max, val, index, count) =>{
        // max number of integers such that the absolute 
        // difference between any two is 1
        if (max < val + count[index + 1]){
                max = val + count[index + 1];
        }
        return max;
    }, 0);
}
var a = [1, 2, 2, 3, 1, 2]
console.log(pickingNumbers(a))