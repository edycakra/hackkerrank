function diagonalDifference(arr) {
    // Write your code here
var result = 0

var diagonal1 = 0
var diagonal2 = 0

for (var i = 0; i < arr.length;i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (i == j) {
            diagonal1 += arr[i][j]
        }
        if (i + j == arr.length-1) {
            diagonal2 += arr[i][j]
        }
    }
}
result = Math.abs(diagonal1 - diagonal2)

return result
}

console.log(diagonalDifference([[11, 2, 4], 
                                [ 4, 5, 6], 
                                [10, 8,-12]]))