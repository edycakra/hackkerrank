function catAndMouse(x, y, z) {
    var deltaA = Math.abs(x-z)
    var deltaB = Math.abs(y-z)

    if (deltaA == deltaB) {
        return 'Mouse C'
    } else if (deltaA < deltaB) {
        return 'Cat A'
    } else {
        return 'Cat B'
    }

}
console.log(catAndMouse(2, 1, 3))//Cat B
console.log(catAndMouse(1, 2, 3))//Cat B
console.log(catAndMouse(1, 3, 2))//Mouse C