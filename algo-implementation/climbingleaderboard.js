// function climbingLeaderboard(scores, alice) {
//     var results = Array(alice.length);
//     var rank = 1;
//     for (var i = 0, j = alice.length - 1; j >= 0; j--) {
//         for (; scores[i] > alice[j]; i++) {
//             if (scores[i] > scores[i + 1] || i === scores.length - 1) {
//                 rank++
//             }    
//         }
//         results[j] = rank;
//     }
//     return results;
// }
// var scores = [100, 90, 90, 80, 75, 60]
// var alice = [50, 65, 77, 90, 102]
// console.log(climbingLeaderboard(scores, alice))
// //output = 6, 5, 4, 2, 1
// //=================================================================================
// function climbingLeaderboard(scores, points) {
//     var lastScore = 0;
//     var uniqueScores = [];
//     while (scores.length) {
//         var tempScore = scores.pop();
//         if (tempScore != lastScore) {
//             lastScore = tempScore;
//             uniqueScores.push(tempScore);
//         }
//     }
//     var index = 0;
//     points.forEach(function(element) {
//         while (element >= uniqueScores[index]) {
//             index++;
//         }
//         console.log(uniqueScores.length - index + 1);
//     });
// }
// var scores = [100, 90, 90, 80, 75, 60]
// var alice = [50, 65, 77, 90, 102]
// console.log(climbingLeaderboard(scores, alice))
// /*output =
// 6
// 5
// 4
// 2
// 1
// */
// //=================================================================================

