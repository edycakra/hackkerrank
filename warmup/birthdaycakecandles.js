//CARA MANUAL
// function birthdayCakeCandles(ar) {
// var result = 0
// var temp = []
// var biggest = []
// //sort ascending
// for (var i = 0; i < ar.length; i++) {
//     for (var j = i+1; j < ar.length; j++) {
//         if (ar[i] > ar[j]) {
//             temp = ar[i]
//             ar[i] = ar[j]
//             ar[j] = temp
//         }
//     }
// }
// //push the i of biggest number into new var
// for (var k = 0; k < ar.length; k++) {
//     if (ar[k] == ar[ar.length-1]) {
//         biggest.push(k)
//     }
// }
// //count length of new var

// return biggest.length
// }
//===================================================
//CARA CEPAT
// function birthdayCakeCandles(ar) {
// var result = []
// var biggest = Math.max(...ar)

// //push the i of biggest number into new var
// for (var k = 0; k < ar.length; k++) {
//     if (ar[k] == biggest) {
//         result.push(k)
//     }
// }
// //count length of new var
// return result.length

// }
// console.log(birthdayCakeCandles([3, 2, 1, 3]))// 3 occurs twice, result = 2