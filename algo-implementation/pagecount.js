function pageCount(n, p) {
    /*
     * Write your code here.
     */
    var pageTurns = Math.floor(p / 2);
    var totalTurns = Math.floor(n / 2);
    return Math.min(pageTurns, totalTurns - pageTurns);
}
console.log(pageCount(6, 5)) //1