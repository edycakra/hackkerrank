function plusMinus(arr) {
    var positive = []
    var negative = []
    var zero = []
    var result = 0
    
    for (var i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) != arr[i]) {
            negative.push(arr[i])
        } else if(arr[i] == 0) {
            zero.push(arr[i])
        } else {
            positive.push(arr[i])
        }
    }
    console.log((positive.length/arr.length).toFixed(6))
    console.log((negative.length/arr.length).toFixed(6)) 
    console.log((zero.length/arr.length).toFixed(6)) 
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1] )) 
/* The proportions of occurrence are 
positive    : 3/6 =  0.500000 
negative    : 2/6 =  0.333333 
zeros       : 1/6 =  0.166667
*/