
function gradingStudents(grades) {
    // Write your code here
var finalscore = []
var selisih = []

for (var i = 0; i < grades.length; i++) {
    selisih[i] = Math.round(grades[i]/5)*5 - grades[i]
        if (selisih[i] < 0) {
            finalscore[i] = grades[i]
        } else if (selisih[i] <= 2 && grades[i] >= 38){
            finalscore[i] = grades[i] + selisih[i]
        } else {
            finalscore[i] = grades[i]
        }
}


return finalscore

// return finalscore

}
console.log(gradingStudents([73, 67, 38, 33])) // 75, 67, 40, 33
/* 
Less than 40 = failed
If there's a difference of max 2 points between input and the next multiplication of 5, input will be rounded to that multiplication of 5
38 => rounded to 40
37 => still 37
*/