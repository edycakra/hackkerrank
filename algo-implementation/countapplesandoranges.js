//CARA MANUAL
function countApplesAndOranges(s, t, a, b, apples, oranges) {
var apelmasuk = 0
var jerukmasuk = 0
    for(var i = s; i <= t; i++) {
        for (var p = 0; p < apples.length; p++) {
            if (a + apples[p] == i) {
                apelmasuk ++
            }
        }
        for (var j = 0; j < oranges.length; j++) {
            if (b + oranges[j] == i) {
                jerukmasuk ++
            }
        }
    }
console.log(apelmasuk+'\n'+jerukmasuk)
}
return(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
//===============================================================================

//CARA CEPAT
// function countApplesAndOranges(s, t, a, b, apples, oranges) {
// var apple_count = apples.filter(value => value + a >= s && value + a <= t).length;
// var orange_count = oranges.filter(value => value + b >= s && value + b <= t).length;
// console.log(apple_count+'\n'+orange_count)
// }
// return(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
//===============================================================================
//ALTERNATIF MANUAL CEPAT
// function countApplesAndOranges(s, t, a, b, apples, oranges) {

//     var totalApples = 0;
//     var totalOranges = 0;
//     for (var i = 0; i <= apples.length; i++) {
//         if (a + apples[i] >= s && a + apples[i] <= t) {
//             totalApples += 1;
//         }
//     }
//     for (var i = 0; i <= oranges.length; i++) {
//         if (b + oranges[i] >= s && b + oranges[i] <= t) {
//             totalOranges += 1;
//         }
//     }
//     console.log(totalApples);
//     console.log(totalOranges);
//     }
//     return(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))