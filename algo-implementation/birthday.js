// Complete the birthday function below.
function birthday(s, d, m) {
    var count = 0;
    for (var i = 0; i < s.length - m + 1; i++){
        var sum = 0;
        for (var j = 0; j < m; j++){
            sum = sum + s[i + j];
        }
        if (sum == d) {
            count++;
        }
        
    }


    return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))