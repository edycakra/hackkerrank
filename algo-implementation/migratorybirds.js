function migratoryBirds(arr) {
var numMap = {};
var maxNum = 0;
var maxChar = 0;

for (var i = 0; i < arr.length; i++) {
    if (numMap[arr[i]]) {
        numMap[arr[i]]++
    } else {
        numMap[arr[i]] = 1
    }
}
keyobj = Object.keys(numMap)
for (var j = keyobj[0]; j < keyobj[keyobj.length-1]; j++) { 
    if (numMap[j] > maxNum) { 
        maxNum = numMap[j];
        maxChar = j;
    }
}
return maxChar;
}
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))// 3