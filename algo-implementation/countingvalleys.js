function countingValleys(n, s) {
    var level = 0;
    var valleys = 0;
   
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'U') {
            level ++;
            if (level == 0) {
                valleys ++;
            }
        } else {
            level --;
        }
    }
    return valleys;
}

console.log(countingValleys(12, 'UDDDUDUUUDDU'))
