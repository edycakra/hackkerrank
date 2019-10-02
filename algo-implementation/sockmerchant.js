function sockMerchant(n, ar) {
var obj = {}
for (var i = 0; i < ar.length; i++) {
    if (obj[ar[i]]) {
        obj[ar[i]]++
    } else {
        obj[ar[i]] = 1
    }
    
}
// return obj
var count = 0
var objvalues = Object.values(obj)
for (var j = 0; j < objvalues.length; j++) {
    count += Math.floor(objvalues[j]/2)
}
return count
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))

