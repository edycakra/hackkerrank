function getTotalX(a, b) {
    // Write your code here
    var count = 0
    var rangemin = a[a.length-1]
    var rangemax = b[0]
    for (var i = rangemin; i <= rangemax; i++) {
        if (a.every(int => (i % int == 0))) {
            if (b.every(int => (int % i == 0))) {
                count++;
            }
        }
    }
    return count
}

console.log(getTotalX([ 2,  4],
                      [16, 32, 96]))