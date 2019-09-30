function breakingRecords(scores) {
var hi = scores[0]
var lo = scores[0]
var countmax = 0
var countmin = 0

for (var i = 1; i < scores.length; i++) {
    if (scores[i] > hi) {
        hi = scores[i]
        countmax++
    }
    if (scores[i] < lo) {
        lo = scores[i]
        countmin++
    }
}

var result = [countmax, countmin]
return result
}
console.log (breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

