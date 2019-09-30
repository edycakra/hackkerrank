function divisibleSumPairs(n, k, ar) {
var result = []

for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        if (i < j) {
            var sum = ar[i]+ar[j]
        
        if (sum % k == 0) {
            result.push(sum)
            }    
        }
    }
        
}


return result.length

}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));