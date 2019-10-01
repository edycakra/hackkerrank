function bonAppetit(bill, k, b) {
    var sum = 0

    for (var i = 0; i < k.length; i++) {
        sum += k[i]
    }
    sum = (sum - k[bill[1]])/2;

    if (sum != b) {
        return (b-sum)
    } else {
        return 'Bon Appetit'
    }
}

console.log(bonAppetit([4, 1], [3, 10, 2, 9], 7))
console.log(bonAppetit([4, 1], [3, 10, 2, 9], 12))

/*TEST CASE
4 1
3 10 2 9
7
RESULT : BON APPETIT

4 1
3 10 2 9
12
RESULT : 5
*/

//=================================faster approach
// function bonAppetit(bill, k, b) {
//     const annasBill = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;
//     annasBill === b ? console.log('Bon Appetit') : console.log(b - annasBill);
// }

