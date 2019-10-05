function cost(s, ss) {
    s = s.map(a => a.join('')).join('');
    let cost = 0;
    for (let i = 0; i < s.length; i++) {
        cost += Math.abs(parseInt(s[i]) - parseInt(ss[i]));
    }
    return cost;
}

function formingMagicSquare(s) {
    // Complete this function
    const ss = ['618753294','816357492','834159672','438951276','672159834','276951438','294753618','492357816',];
    let min = 100;
    for (let i = 0; i < ss.length; i++) {
        const co = cost(s, ss[i]);
        if (co < min) min = co;
    }
    return min;
}
console.log(formingMagicSquare([[4, 9, 2],[3, 5, 7],[8, 1, 5]]))//1

/*logic
create a matrix for col and for row, sum each row of both matrix, if 15, then it is a magic square
*/