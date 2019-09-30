function kangaroo(x1, v1, x2, v2) {
    var result 

    if (!(x2 > x1 && v2 > v1) && !(x2 < x1 && v2 < v1) && ((x1 - x2) % (v2 - v1) === 0)) {
        result = 'YES'
    } else {
        result = 'NO'
    }

    return result
}

console.log(kangaroo(0, 3, 4, 2))//YES
console.log(kangaroo(0, 2, 5, 3))//NO