function timeConversion(s) {
    /*
     * Write your code here.
     */
    var hours = Number(s[0]+s[1])
    var restdata = ''

    for (var i = 0; i < s.length; i++) {
        if ((s[i]) === 'P' && hours < 12) {
            hours += 12            
        } else if ((s[i]) === 'A' && hours == 12) {
            hours -= 12
        }
    }
    for (var j = 2; j < s.length-2; j++) {
        restdata += s[j]
    }
    if (hours < 12) {
        return ('0'+String(hours)+restdata)
    } else {
        return (String(hours)+restdata)
    }

}

console.log(timeConversion('07:05:45PM')) //19:05:45
console.log(timeConversion('07:05:45AM')) //07:05:45
console.log(timeConversion('01:00:00PM'))

